const user = {
  firstName: 'mina', 
  lastName : 'Chae',
  age :22,
  getFullName : function() {
    return `${this.firstName}`
  }
}

const user2 ={
  firstName: 'yusun',
  age :5
}

console.log(user.getFullName.call(user2))



// function user() {
//   this.firstName = 'Neo'
//   this.lastName = 'kim'

//   return  {
//   firstName: 'mina', 
//   lastName : 'Chae',
//   age :22,
//   getFullName : ()=> {
//     return `${this.firstName}`
//   }
// }
// }
// const u = user() // 변수 u는 user이 리턴된 값 !! 하나의 객체 데이터 
// console.log(u.getFullName())

const timer = {
  title : 'TIMER!', 
  timeout() { //일반 함수 일 때 콜론과 function 생략 가능 
    console.log(this.title)
    setTimeout(()=>{ // 호출하는 함수(setTimeout)내에 title 정의 x, 화살표 함수로 밖의 timeout 함수(메소드)에 접근해야함 
      console.log(this.title) 
    },1000)
  }
}
timer.timeout()