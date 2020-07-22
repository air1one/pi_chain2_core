import { app } from "@arkecosystem/core-container";
import { asValue } from "awilix";
import { defaults } from "../../../../packages/core-vote-report/src/defaults";
import { startServer } from "../../../../packages/core-vote-report/src/server";
import { testnet } from "../../../utils/config/testnet/testnet";
import { setUpContainer } from "../../../utils/helpers/container";

jest.setTimeout(60000);

let server;
export const setUp = async () => {
    await setUpContainer({
        exit: "@arkecosystem/core-blockchain",
        networkConfig: testnet,
    });

    app.register("pkg.vote-report.opts", asValue(defaults));

    server = await startServer(defaults);
};

export const tearDown = async () => {
    await server.stop();
    await app.tearDown();
};
