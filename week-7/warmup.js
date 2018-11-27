// 1. get the button for the click event
// 2. attach the click event to the button

const button = document.querySelector('#add')
// <button>+</button>
button.addEventListener('click',(event) => {
  // Step 1 find the div
  const div = document.querySelector('#total')
  // Step 2 change the number inside the div
  // fist save the old value
  const oldValue = parseInt(div.innerText, 10)
  // add one to the old value 
  div.innerText = oldValue + 1 
})

const subtractButton = document.querySelector('#subtract')
// <button>+</button>
subtractButton.addEventListener('click',(event) => {
  // Step 1 find the div
  const div = document.querySelector('#total')
  if (div.innerText === '0') {
    return
  }
  // Step 2 change the number inside the div
  // fist save the old value
  const oldValue = parseInt(div.innerText, 10)
  // add one to the old value 
  div.innerText = oldValue - 1 
})
