const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'p7/input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let N = Number(input[0]);

for(let i=0; i<N; i++){
  for(let j=0; j<=i; j++){
  console.log("*");
  }
  console.log("\n");
}