# Functions

## Initilization
### Basic Initilization
```js
function name(param) {
    return param            // Bssic Function
}
```

### Alt Initilization
```js
const name = function (param) {
    return param            // Alt Function
}
```

### Arrow Fucntion
```js
const name = (param) => {
    return param            // Arrow Function
}
```

### Arrow Fucntion, One Param
```js
const name = param => {
    return param            // Arrow Function One Param
}
```

### Arrow Fucntion, One Param, One Expression
```js
const name = param => param // Arrow Fucntion, One Param, One Expression
```

## Parameters
### No Types
```js
function name(param) {
    return param            // Bssic Function
}

name(1)                      // calls funciton name() with Number
name('String')               // calls funciton name() with String
name(() => 1)                // calls funciton name() with Function
name([1, 2, 3])              // calls funciton name() with Array
name({x: 0, y: 0})           // calls funciton name() with Object
name(undefined)              // calls funciton name() with undefined
```

### Functions As Parameters
```js
function a(func) {
    return func(2)
}

function b(param) {
    return b**2
}

a(b)                                // Returns 4
a((a) => a**2)                      // Returns 4
```

## Return Types
### Can Return any type
```js
function a() {
    return 1                        // Returns Number
}

function b() {
    return "string"                 // Returns String
}

function c() {
    return (p) => {
        return p**2                 // Returns Function
    }
}
```