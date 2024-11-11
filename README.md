# Nuxt restart issue reproduction

A reproduction for Nuxt issue [#29813](https://github.com/nuxt/nuxt/issues/29813).

## Setup

Make sure to install dependencies:

```bash
pnpm install
```

## Run the reproduction

**Important!** 

Before running the dev server, ensure you run the database migrations.

```bash
# Run migrations first
pnpm db:migrate

# Then you can run the dev server
pnpm dev
```

## The issue

When the dev server is running, click the "Create User" button to call an endpoint that will add some data to the database.

The Nuxt process will restart, thinking the nuxt.config.ts file has been updated.