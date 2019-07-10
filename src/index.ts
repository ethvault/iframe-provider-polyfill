import { IFrameEthereumProvider } from '@ethvault/iframe-provider';

/**
 * Return true if the current window context appears to be embedded within an iframe element.
 *
 * This should be checked before the provider is used.
 */
export function isEmbeddedInIFrame(): boolean {
  return window && window.parent && window.parent !== window.self;
}

if (typeof window !== 'undefined') {
  if (isEmbeddedInIFrame()) {
    const target = window as any;

    const provider = new IFrameEthereumProvider();

    target.web3 = provider;
    target.web3.currentProvider = provider;
    target.ethereum = provider;
  }
}
