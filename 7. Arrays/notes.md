# Arrays

## Initilization
### Basic Initilization
```js
const array = []                    // Empty array
const array = [1, 2, 3]             // Array with elements
```

### Basic Initilization with length
```js
const array = new Array(5)          // Empty array with 5 undefined elements
console.log(array[1])               // undefined
```

### Basic Initilization with fill
```js
const array = new Array(5).fill(0)  // Array with 5 0s
console.log(array[1])               // 0
```

## Looping over Arrays
### For loop
```js
const array = new Array(5)

for(let i = 0; i < 5; i++) {
    console.log(array[i])           // Prints undefined 5 times
}
```

### Array.forEach()
```js
const array = new Array(5)

array.forEach((element, index) => {
    console.log(element)            // undefined x 5
})
```

## Array Methods
### Array.push()
```js
const array = []

array.push(1)
console.log(array)                // [1]

array.push(2)
console.log(array)                // [1, 2]
```

### Array.push()
```js
const array = [1, 2, 3]

array.pop()                     // 3
console.log(array)              // [1, 2]

array.pop()                     // 2
console.log(array)              // [1]
```

### Array.map()
```js
const array = [1, 2, 3]

const squared = array.map(e => e**2)
console.log(squared)                // [1, 4, 9]
```

### Array.filter()
```js
const array = [1, 2, 3]

const two = array.filter(e => e === 2)
console.log(two)                    // 2
```