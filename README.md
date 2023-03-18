# Project Template for

%% **Nuxt 3** + **Vuetify 3** + **Koa** + **TypeScript**

## Preface

- Apply the whole project in an ESM manner:

  - add `"type":"module"` in package.json
  - all the relative import paths need to use extensions as ".js"
  - https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#type-in-package-json-and-new-extensions
  - https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

- Remember to rename **.env.default** to **.env** in the project root folder

## Developement

- Frontend and Backend are divided into 2 standalone server
  - Define the ports in .env
  - Define the base path in .env
  - Local client: http://127.0.0.1:8088
  - Local server: http://127.0.0.1:8087
  - Start in separated terminal
    ```
    npm run dev:client
    npm run dev:server
    ```
- API Request from client will be forwarded to the server by using
  - **./client/server/api/[...].ts**
- Differentiate tsconfig for client and server
  - **./tsconfig.json** is for nuxt (./client)
  - **./tsconfig-server.json** is for koa (./server)
