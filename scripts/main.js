let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";


// 변수
let myVariable
myVariable = 'hello'
console.log(myVariable)

let myVariable2 = 'world'
console.log(myVariable2)

var a = 1
let b = 2
const c = 3
console.log(a, b, c)

a = 10
b = 20
// c = 30
// const 로 선언된 변수는 재할당 불가능
// let, const 로 선언된 변수는 재선언 불가능

// type
let stringVar = 'hello'
let numberVar = 10
let boolVar = true
let arraryVar = []
let objectVar = {}
console.log(stringVar, numberVar, boolVar, arraryVar, objectVar)

arraryVar.push('hello')
console.log(arraryVar)

objectVar.name = 'kim'
objectVar.location = 'seoul'
console.log(objectVar)

// my_dict = Dict()
let myObject = new Object()
myObject.name = 'park'
console.log(myObject)



// 연산자 (동등)
let myVarA = 10
let myVarB = '10'
console.log(myVarA == myVarB)
console.log(myVarA === myVarB)



// 조건문
// let iceCream = 'chocolate'
// if (iceCream === 'chocolate') {
//   alert('choco')
// } else {
//   alert('no choco')
// }


// 반복문
console.log('while')
let i = 0
while (i < 5) {
  console.log(i)
  i++
}

console.log('for')
for (let i=0; i<5; i++) {
  console.log(i)
}

console.log('for2')
let myArray = [1, 2, 3, 4, 5]
for (let i=0; i<myArray.length; i++) {
  console.log(myArray[i])
}

console.log('for in')
for (let item in myArray) {
  console.log(item)
}

console.log('for of')
for (let item of myArray) {
  console.log(item)
}

console.log('for each')
myArray.forEach(function(item, index, array){
  console.log(item, index, array)
})





// 함수

function multiply(num1, num2) {
  let result = num1 * num2
  return result
}
console.log(multiply(23, 67))


// 함수 표현식
let multiply2 = function (num1, num2) {
  let result = num1 * num2
  return result
}
console.log(multiply2(23, 67))


// 화살표 함수 
let multiply3 = (num1, num2) => {
  let result = num1 * num2
  return result
}
console.log(multiply3(34, 56))

// 화살표 함수 생략1
// {}안의 코드가 return 하는 문장 하남나 있을 떄 {}, return 생략가능
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(34, 56))

// 화살표 함수 생략2
// ()안에 매개변수가 하나만 있다면 () 생략가능
let multiply5 = num1 => num1 * 2
console.log(multiply5(10))




// 이벤트 onclick
// document.querySelector('h1').onclick = function () {
//   alert('hello world!')
// }


// 이벤트 리스너
let myH1 = document.querySelector('h1')
// addEventListener(무슨일이 일어났을때, 무슨 행동을 할지)
myH1.addEventListener('click', function(e){
  // alert('hello world!')
  console.log('hello world!')
  console.log(e)
})


let myImage = document.querySelector('img')
console.log(myImage)

myImage.addEventListener('click', function(){
  let src = myImage.getAttribute('src')
  if (src === 'images/firefox-icon.png') {
    myImage.setAttribute('src', 'images/bear.jpg')
  } else {
    myImage.setAttribute('src', 'images/firefox-icon.png')
  }
})




// 비동기
console.log('hi')
// setTimeout(실행시킬함수, 시간)
setTimeout(function(){console.log('??')}, 2000)
console.log('bye')



// 비동기적인 코드 진행 개선

const URL = 'https://jsonplaceholder.typicode.com/posts/1'
// let response = fetch(URL)
// let result = response.json()
// console.log(response)
// console.log(result)

fetch(URL)
  .then(response => response.json())
  .then(json => console.log(json))

async function fetchAndPrint() {
  let response = await fetch(URL)
  let result = await response.json()

  console.log(result)
}

fetchAndPrint()



// DOM
const liElements = document.querySelectorAll('li')
console.log(liElements)

// for (const li of liElements) {
//   console.log(li)
// }

liElements.forEach(function(li){
  li.style.color = 'red'
  li.style.backgroundColor = 'white'
})

liElements.forEach(function(li){
  li.addEventListener('click', function(e){
    console.log(e.target)
    console.log(e.target.textContent)

    if (e.target.textContent === 'thinkers') {
      e.target.style.color = 'black'
    }
  })
})