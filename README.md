# ethvault/iframe-provider-polyfill

[![Build Status](https://travis-ci.org/ethvault/iframe-provider-polyfill.svg?branch=master)](https://travis-ci.org/ethvault/iframe-provider-polyfill)
[![MinZipped size](https://badgen.net/bundlephobia/minzip/@ethvault/iframe-provider-polyfill)](https://bundlephobia.com/result?p=@ethvault/iframe-provider-polyfill@0.1.4)
![NPM Version](https://img.shields.io/npm/v/@ethvault/iframe-provider-polyfill.svg)

This is a drop in script that overrides web3 to point at the parent window when the page is embedded in an iframe.
This makes the dapp instantly compatible with Ethvault if it works with MetaMask.

## Browsers only

This polyfill is meant for browser contexts only. 
The import is no-op in node contexts.

## Usage

Install the dependency

```bash
npm i @ethvault/iframe-provider-polyfill
```

or with yarn:

```bash
yarn add @ethvault/iframe-provider-polyfill
```

Then import it into your `index.js`

```typescript
import '@ethvault/iframe-provider-polyfill';
```

Or use a CDN like [unpkg](https://unpkg.com). 
Use [subresource integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity),
to prevent security vulnerabilities.

(v0.1.5)
```html
<script src="https://unpkg.com/@ethvault/iframe-provider-polyfill@0.1.5/dist/index.js" integrity="sha384-qx1eG3ocmrXxXBwEL+qnP7je980Depwy/J7keRHVnqfEFVXHJ0ruzYIsUX767NEH" crossorigin="anonymous"></script>
```
