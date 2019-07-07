import { IFrameEthereumProvider, isEmbeddedInIFrame } from '@ethvault/iframe-provider';

if (typeof window !== 'undefined') {
  if (isEmbeddedInIFrame()) {
    const target = window as any;

    const provider = new IFrameEthereumProvider();

    target.web3 = provider;
    target.web3.currentProvider = provider;
    target.ethereum = provider;
  }
}
