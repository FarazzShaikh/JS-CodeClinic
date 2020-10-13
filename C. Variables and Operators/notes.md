# Variables
## Const vs let
```js
let a = 1       // Valid
a = 2           // Valid
a = "A"         // Valid
a = true        // Valid

const a = 1     // Valid
a = 2           // Invalid, can't reassign const
```

## Never use var
```js
console.log(a)      // Invalid, can't access before initialization
let a

console.log(a)      // Valid, var is hoisted to the top
var a


for (var i = 0; i < 5; i++){
  console.log(i)
}
console.log(i)                  // 5


for (let i = 0; i < 5; i++){
  console.log(i)
}
console.log(i)                  // Error

```

# Operators
## Math Operators
```js
const add       = 1 + 2
const subtract  = 1 - 2
const multiply  = 1 * 2
const divide    = 1 / 2
const mod       = 1 % 2

const shorthand += 1

const increment = 1++
const decrement = 1--
```

## Math Class
```js
const abs     = Math.abs(-1)
const sqrt    = Math.sqrt(4)
const floor   = Math.floor(1.45)
const round   = Math.round(1.564)

const tan     = Math.tan(-1)
const atan    = Math.atan(-1)

const PI      = Math.PI
```

## Logical Operators
```js
const greater = 5 > 6
const lesser  = 5 < 6

const not     = !true
const and     = true && false
const or      = true || false

const xor     = true ^ false

const equality = 5 == '6'         // True
const strictEquality = 5 === "6"  // False
```