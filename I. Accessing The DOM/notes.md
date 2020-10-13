# Accessing The DOM

## What is the DOM?
When a web page is loaded, the browser creates a Document Object Model of the page.

The HTML DOM model is constructed as a tree of Objects:

<img src="https://www.w3schools.com/js/pic_htmltree.gif" width="800">

<br></br>
## How to access these Objects?
### Doccument Object
```js
const mainDiv = document.querySelector('.main-div') // Get Element with css selector

const mainDiv = document.getElementsByClassName('main-div')[0] // Get Element with HTML Class

const mainDiv = document.getElementById('main-div')    // Get Element with HTML **ID**
```

## Create HTML Elements in JS
```js
const newDiv = document.createElement('div')
```

## Change element styles
```js
const mainDiv = document.querySelector('.main-div')

mainDiv.style.backgroundColor = 'black'
```

## Modify element properties
```js
const mainDiv = document.querySelector('.main-div')
mainDiv.classList += 'custom-class'
```

## Adding Event-listeners
```js
const mainDiv = document.querySelector('.main-div')

document.addEventListener('click', e => {
    console.log(e)
})

mainDiv.addEventListener('click', e => {
    console.log(e)
})
```