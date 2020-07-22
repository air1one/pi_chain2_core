import { Identities, Managers } from "@arkecosystem/crypto";
import { generateMnemonic } from "bip39";
import { devnet } from "../config/devnet/devnet";
import { mainnet } from "../config/mainnet/mainnet";
import { testnet } from "../config/testnet/testnet";
import { unitnet } from "../config/unitnet/unitnet";

export const generateWallets = (network, quantity = 10) => {
    network = network || "testnet";
    const mapNetworkToConfig = { testnet, unitnet, devnet, mainnet };
    const networkConfig = mapNetworkToConfig[network];

    if (!networkConfig) {
        throw new Error("Invalid network");
    }

    Managers.configManager.setConfig(networkConfig);

    const wallets = [];
    for (let i = 0; i < quantity; i++) {
        const passphrase: string = generateMnemonic();
        const publicKey: string = Identities.PublicKey.fromPassphrase(passphrase);
        const address: string = Identities.Address.fromPassphrase(passphrase);

        wallets.push({ address, passphrase, publicKey });
    }

    return wallets;
};
