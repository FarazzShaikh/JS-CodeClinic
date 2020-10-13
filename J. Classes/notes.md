# Classes
## Declatation
```js
class ClassName {

    constructor(props) {
        console.log(props)
        this.property = 'prop'
    }

    method() {

    }
}
```

## instantiation
```js
const obj = new ClassName(props)

const a = obj.property  // Access Properties
obj.method()            // Access Methods
```

## Inheritance
```js
class A {
    constructor() {
        this.a = 10
    }
}

class B extends A {
    constructor() {
        super()
        console.log(this.a)     // 10
    }
}
```