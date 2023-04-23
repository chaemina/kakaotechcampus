const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'p8/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = Number(input[0]);
let sum = '';
for(let i =1; i<= n; i++){ //input의 0은 테스트케이스 값이니까, i=1 부터 
  let num = input[i].split(' '); //input의 i번째 줄 띄어쓰기로 나눠주고
  let a = Number(num[0]); //num의 0번째값
  let b = Number(num[1]); //num의 1번째값
  sum += a+b+'\n';  //a+b값과 줄바꿈을 sum에 저장
}

console.log(sum); 