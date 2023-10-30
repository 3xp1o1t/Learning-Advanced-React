![Header](public/github-header-image.png)
[Header Made with leviarista tool](https://leviarista.github.io/github-profile-header-generator/)

---

Table of contents

- [Setup for testing](#setup-for-testing)
- [Setup for Storybook with TailwindCSS and TypeScript](#setup-for-storybook-with-tailwindcss-and-typescript)
- [Currying and composition](#currying-and-composition)
- [Custom hooks with test](#custom-hooks-with-test)
  - [useArray](#usearray)

---

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

- Packages for this step:
  - class-variance-authority
  - tailwind-merge
- Install and setup TailwindCSS following docs
- Install StoryBook following the docs
- Import tailwindcss.css file into preview.ts

```ts
// .storybook/preview.ts
...
import 'tailwindcss/tailwind.css';
```

`Now all tailwind classes will be available inside stories.`

---

## Currying and composition

Added an example inside util folder with test of and advance use
of curried functions with function composition using de example of [Yuri Bett](https://blog.stackademic.com/spice-up-your-javascript-with-currying-894a7c463d03),
i just convert to TypeScript and add some test for better understanding.

[currying example](/src/util/currying.ts) | [currying test](/src/tests/util/currying.test.ts)

## Custom hooks with test

Descriptions/examples provided by [Leschev](https://habr.com/en/users/Leschev/), i just add generic support and testing

### useArray

The advantages of using this custom hook are twofold: it simplifies the management of array states and provides a cleaner and more readable code structure.

[useArray](/src/hooks/useArray.ts) | [test](/src/tests/hooks/useArray.test.tsx)

---

Thats all by the moment of this learning path.

Tips/Tricks

- html-aria list: <https://www.w3.org/TR/html-aria/#docconformance>

---
