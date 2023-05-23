//Prototype

const fruits = new Array('apple', 'banana') // new 로 시작 -> 생성자 함수 

console.log(fruits)  //배열 데이터 
console.log(fruits.includes('banana'))  //include 메소드  
console.log(fruits.length) // length속성 

// const mina = {
//   fristName : 'mina',
//   lastName: 'chae',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}` 
//   }
// }

// console.log(mina)    // {fristName: 'mina', lastName: 'chae', getFullName: ƒ}

// const neo = {
//   firstName: 'neo',
//   lastName :'kim'
// }

// console.log(mina.getFullName.call(neo))

// function User(first, last){ // 생성자 함수 등록 
//   this.firstName = first
//   this.lastName = last
// }  

// User.prototype.getFullName = function() { //생성자 함수의 prototype 메소드 등록 
//   return `${this.firstName} ${this.lastName}` 
// }

// const mina = new User('mina', 'chae') 

// console.log(mina)  // User {firstName: 'mina', lastName: 'chae'}
// console.log(mina.getFullName())






// //ES6

// class User2 {
//   constructor(first, last) {  // 기존의 생성자 함수 역할 !
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const neo = new User2('neo', 'kim')
// console.log(neo)
// console.log(neo.getFullName())





// //Getter, Setter

// class User3 {
//   constructor(first, last) { 
//     this.firstName = first
//     this.lastName = last
//   }
//   get fullName() {  //getter , 메소드 앞에 get 붙여 사용 -> 메소드를 속성처럼 사용할 수 있도록 함 !!
//     return `${this.firstName} ${this.lastName}`
//     //getter의 this 호출 될 때 정의
//   }
//   set fullName(value) {
//     console.log(value)
//     ;[this.firstName, this.lastName] = value.split(' ')// 배열구조분해할당, value(인수)를 띄어쓰기 기준으로 나눔
//     //setter의 this 호출 될 때 정의 
//   }
// }

// const lion = new User3('lion', 'kim') 
// console.log(lion)
// console.log(lion.fullName)

// lion.fullName = 'Chae mina'
// console.log(lion)

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  static isUser(user) {
    if (user.firstName && user.lastName) {
      return true;
    }
    return false;
  }
}

const mina = new User('chae', 'mina');
const sunny = {
  name: 'Sunny',
  age: 25,
};

console.log(User.isUser(mina)); // true
console.log(User.isUser(sunny)); // false


