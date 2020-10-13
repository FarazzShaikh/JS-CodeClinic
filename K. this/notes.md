# this
## What is this?
The JavaScript `this` keyword refers to the object it belongs to.

## this alone
```js
const a = this  // Global Object, Window in browsers
```

## In Classes
```js
class C {
    constructor() {
        console.log(this)   // current instance of C

        this.prop           // prop accessable throughout the class

        this.method()       // Must use this to access local methods
    }

    method() {
        return this.prop   // Must use this to access local properties
    }
}
```

## In Fucntions
```js
function f() {
    console.log(this)       // [Object Window]
}

const obj = {
    f: function () {
        console.log(this)   // {obj}
    }
}

const obj = {
    f: () => {
        console.log(this)   // [Object Window]
    }
}
```

## In Event Handlers
```js
mainDiv.addEventListener('click', () => {
    console.log(this)       // mainDiv
})
```

## Binding
```js
const a = {
  f: function () {
    console.log(this)
  }
}

function b(f) {
  f()
}

b(a.f)              // [Object Window]
b(a.f.bind(a))      // a
```