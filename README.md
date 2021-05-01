# gmail-to-line

Send a message to LINE by receiving specific email in GMail.

# Pre requirement

This project using Google apps script (GAS) for:
- Checking email with specified query
- Send a message to LINE channel

Then it is necessary to prepare followings to work this codes:
- GAS project
- LINE channel

# How to deploy

- First, do `yarn install` to install tools and dependencies.

- Then rename `src/properties.ts.example` to `src/properties.ts`, and fulfill fields marked as "update me".

```typescript
export const properties = {
  GMAIL_FROM_ADDRESS_QUERY: "update me",
  LINE_CHANNEL_ACCESS_TOKEN: "update me",
};
```

- Do build and deploy with `yarn deploy`.

If it goes success, logs will be like follows.

```console
$ yarn deploy

yarn run v1.22.10
$ yarn build && clasp push
$ webpack
(node:8237) [DEP_WEBPACK_COMPILATION_OPTIMIZE_CHUNK_ASSETS] DeprecationWarning: optimizeChunkAssets is deprecated (use Compilation.hooks.processAssets instead and use one of Compilation.PROCESS_ASSETS_STAGE_* as stage option)
(Use `node --trace-deprecation ...` to show where the warning was created)
asset index.js 18.7 KiB [compared for emit] (name: main)
runtime modules 891 bytes 4 modules
cacheable modules 5.69 KiB
  ./src/index.ts 2.03 KiB [built] [code generated]
  ./src/gmail.ts 2.82 KiB [built] [code generated]
  ./src/line.ts 585 bytes [built] [code generated]
  ./src/properties.ts 283 bytes [built] [code generated]
webpack 5.36.2 compiled successfully in 515 ms
└─ dist/appsscript.json
└─ dist/index.js
Pushed 2 files.
Done in 4.89s.
```

# LICENSE

MIT

# Author

Yosuke Akatsuka (a.k.a pankona)
