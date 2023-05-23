//상속

//운송수단 
class Vehicle {
  constructor(acceleration = 1) { 
    this.speed =0
    this.acceleration = acceleration
  }
  accelerate() { //accelerate 메소드 호출 시 속도에 가속을 더해줌 
    this.speed += this.acceleration
  }
  decelerate() { //decelerate 메소드 호출 시 속도 <=0 이면 정지 , 아니면 가속만큼 빼줌
    if(this.speed <=0) {
      console.log('정지')
      return
    }
    this.speed -= this.acceleration
  }
}

//자전거 
class Bicycle extends Vehicle { //운송수단을 상속받음
  constructor(price = 100, acceleration){
    super(acceleration) 
    this.price = price
    this.wheel =2
  }
}

const bicycle = new Bicycle(300, 2)
bicycle.accelerate()  //speed 2 
bicycle.accelerate()  //speed 4
console.log(bicycle)
console.log(bicycle instanceof Bicycle)  //true
console.log(bicycle instanceof Vehicle)  //true 

//자동차 
class Car extends Bicycle {
  constructor(license, price, acceleration){
    super(price, acceleration)
    this.license = license
    this.wheel =4
  }
  accelerate() { //오버라이딩 
    if(!this.license){
      console.error('무면허')
      return
    }
    this.speed += this.acceleration
    console.log('가속!', this.speed)
  }
}

const car = new Car(true, 7000, 10)
const car2 = new Car(false, 4000, 6)
car.accelerate()  // speed 10 
console.log(car) 

car2.accelerate() // 무면허 error, speed 0
console.log(car2)

console.log(car instanceof Bicycle)  //true
console.log(car instanceof Vehicle)  //true 

//보트 
class Boat extends Vehicle {
  constructor(price, acceleration) {
    super(acceleration)
    this.price = price
    this.motor =1
  }
}
const boat = new Boat(10000, 5)
console.log(boat)

console.log(boat instanceof Bicycle)  //false
console.log(boat instanceof Vehicle)  //true 



