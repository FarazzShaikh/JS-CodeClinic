# Objects
## Initilization
### Basic Initilization
```js
const object = {}                    // Empty Object
const object = {x: 0}                // Object with properties
const object = {
    f: () => {
        return 1                     // Object with function
    }
}  
```

### Keys can be string or number
```js
const object = {
    key: 1,         // String no quotes
    "key": 1,       // String with quotes
    1: 1            // Number
}

```

### Values Can be any type
```js
const object = {
    key1: 1,            // Number
    key2: 'String',     // String
    key3: () => 2,      // Function
    key4: undefined,    // Undefined
    key5: {}            // Object
    key6: []            // Array
}
```

### Accessing Objects
```js
const object = {
    key1: 1,
    key2: 2
}

console.log(object.key1)        // 1

console.log(object[key2])       // 2
```

## Looping over Object
### For-in
```js
const object = {
    1: 1,
    2: 2,
    3: 3
}

for (const key in object) {
    if (object.hasOwnProperty(key)) {
        const element = object[key];
        console.log(element)            // 1, 2, 3
    }
}
```

### Object.values()
```js
const object = {
    1: 1,
    2: 2,
    3: 3
}

Object.values(object) // [1, 2, 3]
Object.values(object).forEach(v => console.log(v)) // 1, 2, 3

```

### Object.keys()
```js
const object = {
    key1: 1,
    key2: 2,
    key3: 3
}

Object.keys(object) // ["key1", "key2", "key3]"
Object.keys(object).forEach(k => console.log(object[k])) // 1, 2, 3

```

