// keyof 
// key 값을 모두 가져와서 union tpye으로 만들어줌
interface Person {
  name: string;
  age : number;
}

type PersonKeys = keyof Person; // literal type
let b: PersonKeys = "name";
let a: PersonKeys = "age";


// 타입 변환기 (maaping)
interface Car {
  color: boolean,
  model: boolean,
  price: boolean | number
}

interface TypeChanger <T> {
  [key in keyof T]: string;
}

type 새로운타입 = TypeChanger<Car>;
let obj6: 새로운타입 = {
  color: "red",
  model: "kia",
  price: "300"
}
export { }

