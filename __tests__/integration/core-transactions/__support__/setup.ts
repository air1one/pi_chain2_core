import { app } from "@arkecosystem/core-container";
import { unitnet } from "../../../utils/config/unitnet/unitnet";
import { setUpContainer } from "../../../utils/helpers/container";

jest.setTimeout(60000);

export const setUp = async () => {
    try {
        return await setUpContainer({
            exit: "@arkecosystem/core-database-postgres",
            network: "unitnet",
            networkConfig: unitnet,
        });
    } catch (error) {
        console.error(error.stack);
        return undefined;
    }
};

export const tearDown = async () => {
    await app.tearDown();
};
