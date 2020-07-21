import "jest-extended";

import {
    Builders as MagistrateBuilders,
    Transactions as MagistrateTransactions,
} from "@arkecosystem/core-magistrate-crypto";
import { Managers, Transactions } from "@arkecosystem/crypto";
import { testnet } from "../../../utils/config/testnet/testnet";

let builder: MagistrateBuilders.BridgechainResignationBuilder;

Managers.configManager.setHeight(2); // aip11 (v2 transactions) is true from height 2 on testnet

describe("Bridgechain resignation builder", () => {
    Managers.configManager.setConfig(testnet);
    Transactions.TransactionRegistry.registerTransactionType(MagistrateTransactions.BridgechainResignationTransaction);

    beforeEach(() => {
        builder = new MagistrateBuilders.BridgechainResignationBuilder();
    });
    describe("should test verification", () => {
        it("should be true", () => {
            const actual = builder
                .bridgechainResignationAsset("8527a891e224136950ff32ca212b45bc93f69fbb801c3b1ebedac52775f99e61")
                .sign("passphrase");
            expect(actual.build().verified).toBeTrue();
            expect(actual.verify()).toBeTrue();
        });
    });
});
