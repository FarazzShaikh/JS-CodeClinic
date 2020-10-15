# Modules
## Using Modules.
```html
...
<script src="..." type="module">
...
```

## Exporting from a module
```js
export default a = 10           // Default Export
export const a = 10             // Named Export

export default class C {}       // Default Class Export
export default function f() {}  // Default Function Export
```

## Importing a module
```js
import foo from './path/file.js'      // Import default export

import * as foo from './path/file.js'      // Import default export as alias

import { foo, bar } from './path/file.js'      // Import named export

import { foo as Alias, bar } from './path/file.js'      // Import named export as alias
```