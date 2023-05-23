//NULL과 Undefined
let name; // 암시적
let age = null; //명시적 

console.log(name, age);

setTimeout(function() {
  name="mina",
  age =22
  console.log(name,age)
}, 5000); //5초뒤에 age 값 할당



//Array (배열 )
const fruit = ['Apple', 'Banana', 'Cherry'];
// fruits의 아이템(요소)들 
console.log(fruit.length); 
console.log(fruit[fruit.length-1]); //마지막 아이템 조회 


// function helllo() {
//   console.log('hello!')
// }

// helllo(); //call

// function getNumber() {
//   return 123;
// }
// console.log(getNumber);

const a = function () {
  console.log('A');
}

const b = function (c) {
  console.log(c)
  c()
}
b(a);


const arrlike = {
  0 :'A',
  1: 'B',
  2: 'C',
  length:3 
}

Array.from(arrlike).forEach(item => console.log(item))
console.log(arrlike)
console.log(Array.isArray(arrlike))

const target = { a: 1, b: 2 }
const source1 = { b: 3, c: 4 }  
const source2 = { c: 5, d: 6 }
Object.assign(target, source1, source2)
console.log(target) // {a:1, b:3, c: 5, d: 6} 


const ob = { a: 1, b: 2, c:3 , d: 4}
console.log(Object.keys(ob)) //['a', 'b', 'c', 'd' ]
console.log(ob)

