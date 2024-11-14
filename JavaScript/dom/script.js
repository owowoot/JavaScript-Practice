const body = document.body
body.append('Hello World') // Hello World is on screen
body.appendChild('Hello World') // string does not show up, error in console. appendChild() only appends elements.

// adding elements dynamically
const div = document.createElement('div') // creates elements div but does not get automatically added to the page
body.append(div) // this now adds div to the page
div.innerText = "Hello World" // adding text to the page
div.textContent = "Hello World" // does same as innerText
// what's the difference?
// console.logging textContent will show invisible elements, innerText shows how it is displayed on screen.

// what if we want the text bolded?
div.innerHTML = "<strong>Hello World</strong>" // Will make Hello World bold
// IMPORTANT: innerHTML IS A SECURITY RISK
// a more secure way to code it:
const strong = document.createElement('strong')
strong.innerText = "Hello World"
div.append(strong)

const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");
spanBye.remove()// remove element

