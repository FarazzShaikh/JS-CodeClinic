# Data Types

## Primative Types
### Number
```js
const number = 1                    // Int is a number
const number = 0.1                  // Float is a number
const number = 10e4                 // Scientific is a number
```

### String
```js
const string = '1'                  // Use Single Quotes
const string = "1"                  // Use Double Quotes
const string = `1`                  // Use Back-Ticks
```

### Boolean
```js
const bool = true
const bool = false
```

### Undefined
```js
const Undefined                     // Default Value is undefined
const Undefined = undefined         // Assign undefined
```

## Structural Types
### Array
```js
const array = []                    // Empty array
```

### Object
```js
const object = {}                   // Empty Object
```

### Function
```js
function f(a) { 
    return a                        // Regular funciton
}
```

## Checking Type
### typeof
```js
const a = 1
console.log(typeof a)               // Nnmber

const a = []
console.log(typeof a)               // object

const a = {}
console.log(typeof a)               // object
```

### instanceof
```js
const a = []
console.log(a instanceof Array)               // true

const a = {}
console.log(a instanceof Object)              // true

const a = []
console.log(a instanceof Object)              // true
```