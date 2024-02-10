// typescript class 만들기

class Person2 {
  // 필드값을 선언해야 constructor에서 this.필드값으로 사용가능
  name: string;
  // 인스턴스는 무조건 Object이므로 return type 지정해줄 필요 없음
  constructor(name?: string) {
    this.name = name;
  }
  // Person.prototype.perentfunc
  perentFunc(a: string): string {
    return a;
  }
}

let person1 = new Person2("kim");
let person2 = new Person2("park");

// 숙제
class Car {
  model: string;
  price: number;
  constructor(model?:string, price?:number){
    this.model = model;
    this.price = price;
  }
  tax():number {
    return this.price*0.1;
  }
}
let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());

// 
class Word {
  arr: (string|number)[];
  str: string[] = [];
  num: number[] = [];
  constructor(...rest){
    this.arr = rest;
    rest.forEach(item=>{
      if (typeof item === "string") {
        this.str.push(item);
      } else if (typeof item === "number"){
        this.num.push(item);
      }
    })
  }
}
let obj2 = new Word("kim" , 3, 5, "park");
console.log(obj2.num);
console.log(obj2.str);
