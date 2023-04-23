//문자열로 입력 받고 정수로 변환
//fs 모듈로 입력받기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let line = input[0].split(' '); //입력받은 문자열 공백을 기준으로 저장
//["1", "2"]
let a = parseInt(line[0]); //1
let b = parseInt(line[1]); //2

//let a = Number(input[0].split(' ')[0]);
console.log(a+b);