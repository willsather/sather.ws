## Website

This is all the code that supports my website. You can find the two instances at either:

`https://www.sather.ws` or `https://dev.sather.ws`

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

You can run unit tests by:

```bash
pnpm test
```

You can run the [Playwright](https://playwright.dev/) End to End tests using:

```bash
pnpm test:e2e
```

(or headless):

```bash
pnpm test:e2e:ci
```

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
