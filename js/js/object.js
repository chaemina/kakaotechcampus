// //1. 생성자 함수로 Object(객체) 데이터 생성 
// const user = new Object();
// user.name = 'mina';
// user.age = 22;
// console.log(user);

// //2. 함수 내부에서 Object(객체) 데이터 생성
// function User() {
//   this.name = 'mina'
//   this.age = 22
// }

// const user = new User()
// console.log(user);

// //3. 리터럴 방식으로 Object(객체) 데이터 생성
// const user = {
//   name: 'mina',
//   age :22
// }
// console.log(user);
// console.log(user.name); //1. 점 표기법
// console.log(user['age']); //2. 대괄호 표기법


const userA = {
  name: 'mina',
  age :22
}
const userB = {
  name: 'neo',
  age : 21,
  parent: userA
}
console.log(userB);
console.log(userB['parent'].name);
console.log(userB['parent']['age']);

const users = [userA, userB];

console.log(users[0].name); //userA의 name
console.log(users[1]['age']); //userB의 age