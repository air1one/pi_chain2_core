import "jest-extended";

import {
    Builders as MagistrateBuilders,
    Transactions as MagistrateTransactions,
} from "@arkecosystem/core-magistrate-crypto";
import { Managers, Transactions } from "@arkecosystem/crypto";
import { testnet } from "../../../utils/config/testnet/testnet";

let builder: MagistrateBuilders.BusinessResignationBuilder;

Managers.configManager.setHeight(2); // aip11 (v2 transactions) is true from height 2 on testnet

describe("Business resignation builder", () => {
    Managers.configManager.setConfig(testnet);
    Transactions.TransactionRegistry.registerTransactionType(MagistrateTransactions.BusinessResignationTransaction);

    beforeEach(() => {
        builder = new MagistrateBuilders.BusinessResignationBuilder();
    });

    describe("should test verification", () => {
        it("should be true", () => {
            const actual = builder.sign("passphrase");
            expect(actual.build().verified).toBeTrue();
            expect(actual.verify()).toBeTrue();
        });
    });
});
