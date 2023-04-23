const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'p7/input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let N = Number(input[0]);

for(let i =1; i<=9; i++) {
  console.log(`${N} * ${i} = ${N*i}`);
}