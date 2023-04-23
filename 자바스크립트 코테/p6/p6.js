const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'p6/input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

//같은 눈 3개 10000+ 같은눈 *1000
//같은눈 2개 1000 + 같은눈 *100
//모두 다른 눈  가장큰눈 *100

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let money =  0;

if( a == b && b == c){
  money = 10000 + a*1000;
}
else if(a == b){
    money = 1000 + a*100;
  }
else if(b == c) {
    money = 1000 + b*100;
  }
else if(a == c){
    money = 1000 + a*100;
  }
else {
  money = Math.max(a,b,c)*10;
}

console.log(money);