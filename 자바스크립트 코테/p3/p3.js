//시험점수

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'p3/input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let score = Number(input);

if(90<=score && score == 100){
  console.log("A");
}
else if(80<= score){
  console.log("B");
}
else if(70<= score){
  console.log("C");
}
else if(60<= score){
  console.log("D");
}
else{
  console.log("F");
}