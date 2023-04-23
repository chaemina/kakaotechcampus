const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'p4/input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let H = Number(input[0]);
let M = Number(input[1]);

//45분 일찍 설정하기 
// 1. M에서 45 빼기 
// 2. M이 45보다 작을 때 H에서 빼주기 
if(M<45){
  //시간을 60분으로 환산해서 
  H -= 1;
  M += 15;
  if(H < 0){
    H = 23;
  }
}
else{
  M -= 45;
}

console.log(H +" "+M);