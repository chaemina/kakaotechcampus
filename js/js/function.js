//callback 1.
const a = callback => {
  console.log('A');
  callback();
}
const b = () => {
  console.log('B')
}
a(b);

//callback 2.
const sum = (a,b,c) => {
  // setTimeout 시간 지연 함수의 인수로 함수 들어감 !
  setTimeout(() => {
    c(a+b);
  }, 1000)
}

sum(1,2,value=>{
  console.log(value)
})

// //callback 3.

// const loadImage = (url,cb) => {
//   const imgEl = document.createElement('img')
//   // img 태그를 js에서 생성
//   imgEl.src = url // src속성에 url 부여 
//   imgEl.height = 500
//   imgEl.addEventListener('load', () => {
//     setTimeout(()=>{
//     cb(imgEl)
//   },1000)
// })
// }

// const containerEl = document.querySelector('.container')
// loadImage('https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbC6PDY%2FbtsgexBeavg%2F2u1qAc2oKNoAARKIdD9540%2Fimg.jpg', (imgEl) =>{
//   containerEl.innerHTML = ''
//   containerEl.append(imgEl)
// })



const users = [ 
  { name: 'Neo', age : 85 },
  { name: 'Amy', age : 22 },
  { name: 'Mina', age : 5 } ]
 
 //나이 구하기 
 const totalAge = users.reduce((acc,cur) => acc + cur.age , 0)
 console.log(totalAge)
 console.log(` 평균 나이는 ${(totalAge/users.length).toFixed(1)} 세 입니다. `)
 
 //모든 이름 
 const names = users
     .reduce((acc,cur) => { //users 배열의 길이만큼 반복 !!
     acc.push(cur.name) // acc.push로 마지막 원소 뒤에 name값들 반복하면서 저장 
     return acc}, []) // 빈배열 = acc, cur = users의 name 값들
                      // 배열에 저장한 name을 return 함  
     .join(', ') //return한 이름들 쉼표로 연결해서 저장 
 console.log(names)