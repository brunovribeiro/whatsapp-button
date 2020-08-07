# \<snapbot-button>

```html
<snapbot-button hash="xxxxxxxxxxxxxxxxxxxxxx"></whatsapp-button>
```

## Installation by CDN

## Usage
```html
<snapbot-button hash="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"></snapbot-button>
```

## Linting with ESLint, Prettier, and Types

To scan the project for linting errors, run

```bash
npm run lint
```

To automatically fix many linting errors, run

```bash
npm run format
```

You can format using ESLint and Prettier individually as well

```bash
npm run format:eslint
```

```bash
npm run format:prettier
```

## Testing with Karma

To run the suite of karma tests, run

```bash
npm run test
```

or to run them in compatibility mode for legacy browsers

```bash
npm run test:compatibility
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```

or

```bash
npm run test:compatibility
```

## Testing with Karma via BrowserStack

To run the suite of karma tests in BrowserStack, run

```bash
npm run test:bs
```

## Managing Test Snapshots

You can manage the test snapshots using

```bash
npm run test:update-snapshots
```
or
```bash
npm run test:prune-snapshots
```

## Demoing with 

To run a local instance of Storybook for your component, run

```bash
npm run storybook
```

To build a production version of Storybook, run

```bash
npm run storybook:build
```


## Local Demo with `es-dev-server`

```bash
npm start
```

To run a local development server that serves the basic demo located in `demo/index.html`

```bash
npm start:compatibility
```

To run a local development server in compatibility mode for older browsers that serves the basic demo located in `demo/index.html`