// 구조 분해 할당 
// const arr =[1, 2, 3];
// const [a, b, c] = arr;
// [, e, f] = arr;
// [g, ...rest] = arr; // 1 [2, 3] 
// console.log(a,b,c);
// console.log(e,f);
// console.log(a,rest);

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5 }
const {b, c} = obj; // 2 3 
const {a: mina} = obj; // 1 변수 이름 변경 
const {d, ...rest} = obj; // 4 {a:1, b:2,c:3 e:5}
console.log(b, c);
console.log(mina);
console.log(d, rest);

// 선택적 체이닝

const userA = {
  name: 'MINA',
  address: {
    country: 'korea',
    city: 'Seoul'
  }
}
const userB = {
  name: 'Neo'}

function getCity(user) {
  return user.address?.city || '주소없음';
}
// 가장 먼저 만난 참 값 반환 
console.log(getCity(userA)); //참 
console.log(getCity(userB)); //거짓 참 

//for of
const fruits = ['apple', 'banana', 'cherry']
for (const element of fruits){  //fruits의 요소를 저장할 변수 element를 만들어서 사용
  console.log(element);
}

//fot in
const user ={
  name:'mina',
  age: 22
}

for(const key in user) {
  console.log(key)
  console.log(user[key])
}

