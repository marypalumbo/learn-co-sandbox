console.log('message!')
console.log(document.querySelector('#third-div'))
console.log(document.querySelectorAll('div p'))

//1.create element 2. put text in paragraph text 3. put it on the page

let pTag = document.createElement('p')
pTag.innerText = "Some Text"
let thirdDiv = document.querySelector('#third-div')
thirdDiv.appendChild(pTag)

// Data Types
Number: 1, 2, 3, 4, 3.4, 24/4
Boolean: true false (3 > 4) -> false
String: 'p' "tag"

'true' true //not the same
'1' 1 //not the same