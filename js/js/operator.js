
// && 연산자 , false 값 반환
console.log(1 && false &&  0);
console.log('A' && 'B'); // 없으면 마지막 true값

// || 연산자, true 값 반환
console.log(0 || [] || true);
console.log(0 || false); // 없으면 마지막 false값 


// 삼항 
function getAlert(message){
  return message ? message : "메세지가 존재하지 않습니다. ";
}

console.log(getAlert('안녕하세요 ~'));
console.log(getAlert('')); // falsy 값이 모두 메세지 존재 하지 않다고 해석됨...

//전개 
// const a = [1, 2, 3];
// const b = [4, 5, 6];

// const c = a.concat(b);
// console.log(c); // [1, 2, 3, 4, 5, 6]

// const d = [...a, ...b];
// console.log(d); // [1, 2, 3, 4, 5, 6]

// const a = {x :1, y:2};
// const b = {y:3, z:4};

// const c = {...a, ...b};
// console.log(c); //{x:1, y:3, z:4}

function fn(x,y,z) {
  console.log(x,y,z)
}

const a = [1, 2, 3];
fn(a) //매개변수 x에 배열 a가 인수로 들어감, y z 는 undefined됨
fn(...a); // 1 2 3 


