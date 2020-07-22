import { app } from "@arkecosystem/core-container";
import { testnet } from "../../../utils/config/testnet/testnet";
import { setUpContainer } from "../../../utils/helpers/container";

jest.setTimeout(60000);

process.env.CORE_RESET_DATABASE = "1";

export const setUp = async (options = {}) =>
    setUpContainer({
        ...options,
        exit: "@arkecosystem/core-blockchain",
        networkConfig: testnet,
    });

export const tearDown = async (): Promise<void> => app.tearDown();
