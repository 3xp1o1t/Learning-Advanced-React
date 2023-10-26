# Learning React Testing with Vitest

## Setup

Required packages

```bash
npm create vite@lastest
# React -> TypeScript + SWC
npm i vitest happy-dom @testing-library/react @testing-library/user-event -D
# (optional) Added vitest ui for a web interface of each test env.
npm i -D @vitest/ui
```

Files modified:

It depends on documentaions.

```json
//package.json -> script test added.
"test": "vitest"
```

```ts
// vite.config.ts Add this line to the beggining of the file
/// <reference types="vitest" />
// then, after plugins, add a comma.
test: {
   environment: 'happy-dom',
},
```

thats all by the moment of this learning path.

Tips/Tricks

- html-aria list: <https://www.w3.org/TR/html-aria/#docconformance>

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
