import { Blocks, Managers } from "@arkecosystem/crypto";
import { genesisBlock as GB } from "../../config/testnet/genesisBlock";
import { testnet } from "../../config/testnet/testnet";

Managers.configManager.setConfig(testnet);
Managers.configManager.getMilestone().aip11 = false;

export const genesisBlock = Blocks.BlockFactory.fromData(GB);

Managers.configManager.getMilestone().aip11 = true;
