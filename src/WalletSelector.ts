import {
  setupWalletSelector,
  WalletSelector
} from "@near-wallet-selector/core";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import {
  setupModal,
  WalletSelectorModal
} from "@near-wallet-selector/modal-ui";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";

interface IWalletStuff {
  selector: WalletSelector;
  modal: WalletSelectorModal;
}

let walletSelector: undefined | IWalletStuff = undefined;

export async function getWalletSelector(): Promise<IWalletStuff> {
  if (walletSelector == null) {
    const selector = await setupWalletSelector({
      network: "testnet",
      modules: [setupMeteorWallet(), setupMyNearWallet()]
    });

    const modal = await setupModal(selector, {
      contractId: "guest-book.testnet"
    });

    walletSelector = {
      selector,
      modal
    };
  }

  return walletSelector;
}
