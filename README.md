# Learning Advanced React Stuff

## Setup for testing

Required packages

```bash
npm create vite@latest
# React -> TypeScript + SWC
npm i vitest happy-dom @testing-library/react @testing-library/user-event -D
# (optional) Added vitest ui for a web interface of each test env.
npm i -D @vitest/ui
```

Files modified:

It depends on documentation.

```json
//package.json -> script test added.
"test": "vitest"
```

```ts
// vite.config.ts Add this line to the beginning of the file
/// <reference types="vitest" />
// then, after plugins, add a comma.
test: {
   environment: 'happy-dom',
},
```

## Setup for Storybook with TailwindCSS and TypeScript

- After installing and setting up tailwindcss
- Install storybook following the documentation
- Import tailwindcss into preview.ts

```ts
// .storybook/preview.ts
...
import 'tailwindcss/tailwind.css';
```

Now all tailwind classes will be available inside stories.

---

## Currying and composition

Added an example inside util folder with test of and advance use
of curried functions with function composition using de example of [Yuri Bett](https://blog.stackademic.com/spice-up-your-javascript-with-currying-894a7c463d03),
i just convert to TypeScript and add some test for better understanding.

[currying example](/src/util/currying.ts) | [currying test](/src/tests/util/currying.test.ts)

## Custom hooks with test

- Descriptions/examples provided by [Leschev](https://habr.com/en/users/Leschev/), i just add generic support and testing.

### useArray

The advantages of using this custom hook are twofold: it simplifies the management of array states and provides a cleaner and more readable code structure.

[useArray](/src/hooks/useArray.ts) | [test](/src/tests/hooks/useArray.test.tsx)

---

Thats all by the moment of this learning path.

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
