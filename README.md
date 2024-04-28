# README

项目使用 Koa+koa/router+module-alias+eslint+prettier+MongoDB+GraphQL

## 项目结构

```bash
|- config
  |- config.dev.js
  |- config.test.js
  |- config.prod.js
  |- index.js
|- node_modules
|- src
  |- constants
    |- common.js
    |- response.js
  |- middlewares
    |- catchDeal.js
    |- pathPrefix.js
    |- index.js
  |- resolvers
    |- hello.js
  |- routes
    |- login.js
    |- user.js
  |- schema
    |- user.js
  |- servers
    |- hello.js
  |- typeDefs
    |- hello.js
  |- index.js
  |- utils
    |- authenticate.js
    |- createOpt.js
|- .env
|- .eslint.js
|- .prettierrc
|- package-lock.json
|- package.json
```
## Environment Prepare

Install `node_modules`:

```bash
pnpm install
```

or

```bash
yarn
```

or

```bash
npm install
```

### Start project

```bash
yarn dev
```
