# Website

This is the Next.js application that supports my website. You can find it deployed at
[`www.sather.ws`](https://www.sather.ws).

## Local Setup

You can run this locally by:

1. Install Dependencies

   ```bash
   pnpm install
   ```

2. Start Next.js Development Server

   ```bash
   pnpm dev
   ```

## Testing

#### Unit Tests

You can run [Vitest](https://vitest.dev/) unit tests by:

```bash
pnpm test
```

The Vitest configuration can be found [here](./vitest.config.ts).

## Linting

You can run [BiomeJS](https://biomejs.dev/) linter _and_ formatter:

```bash
pnpm lint
```

or you can automatically fix the lint and format issues by:

```bash
pnpm lint:fix
```

The BiomeJS configuration can be found [here](./biome.json).

## Production build

To create a production build, you can:

1. Install Dependencies

   ```bash
   pnpm install
   ```

2. Build the Next.js Development application

   ```bash
   pnpm build
   ```

3. Start the Next.js Development application

   ```bash
   pnpm start
   ```
