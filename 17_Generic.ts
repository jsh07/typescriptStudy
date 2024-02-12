// Generic
function func17<MyType>(x: MyType[]): MyType {
  return x[0];
}

let a = func17<number>([4,2]);
let b = func17<string>(["4", "2"]);
let c = func17(["4", "2"]); // 타입 안적어줘도 됨
console.log(c);

// 타입파라미터 제한두기
// extends : narrowing 인정해줌
function func13<MyType extends number>(x: MyType) {
  return x - 1;
}
let d = func13<number>(100); 
console.log(d);// 99

// length 속성의 타입이 number인 타입이 들어오면~~
// string, Array(string[], number[], ...) 등
interface LengthCheck {
  length: number
}
function func14<MyType extends LengthCheck> (x: MyType) {
  return x.length;
}
let e = func14<string>("hello");
let f = func14<string[]>(["a", "b", "c"]);
console.log(e);
console.log(f);

// class
class GenericClass<T> {
  x: T;
  constructor(a: T) {
    this.x = a;
  }
}

let instance = new GenericClass<string>("aaa");
console.log(instance.x);

// type
type NewType<T> = {
  name: T;
  age: T;
}

// interface 
interface NewInterface<S, N> {
  name: S;
  age: N;
}
let me:NewInterface<string, number> = { name: "jeon", age: 28 }


// 숙제
function func15<T extends string | string[]>(a: T) {
  return a.length;
}

interface Animal3 {
  name: string;
  age: number;
}
let data2 = '{"name" : "dog", "age": 1 }';
function func16<T extends Animal3>(json:string):T {
  return JSON.parse(json);
}
console.log(func16<Animal3>(data2));

class Person4<T> {
  name: T;
  constructor(a: T){
    this.name = a;
  }
}
let aaa = new Person4("어쩌구");
aaa.name;

