const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'p5/input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


let H = Number(input[0].split(' ')[0]); //input 첫번째 줄
let M = Number(input[0].split(' ')[1]);
let C = Number(input[1].split(' ')[0]); //input 두번째 줄 

let time = (H*60) + M;
if(M+C <60){
  M +=C;
}
else{
  time += C;
  H = parseInt(time/60);
  M = time%60;
}

console.log(H +" " + M);