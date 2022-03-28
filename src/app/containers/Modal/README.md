# React Modal Plugin

Easy to Modal provider for react

---

description: 'Global. Has context. Stacks windows.' labels: ['Modal', 'UI', 'react', 'typescript']

---

import { Modal } from './Modal';

## Introduction

### Create new Modal Element

All need for creating such element is a valid JSX.Element:

```js
// Arrow function
const ModalElement = () => ":3";
// Standart function
function ModalElement() {
  return ":3";
}
```

### Using Modal Context

```js
const ModalElement = () => {
  const { Resolve, Params } = useModalContext();
  return ":3";
};
```

### Component usage

```tsx

```

### Using props to customize the text

Modify the text to see it change live:

```tsx live

```
