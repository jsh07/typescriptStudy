// export {}

// 모든 속성은 string이다
// index signature
// object 타입 지정을 한 번에 가능


interface StringOnly {
  // 모든 string 타입의 key의 타입은 string 타입임
  // [key: string] : string
  // age: number, // error, 모든 string 타입의 key는 string타입을 가져야 하기 때문에 number 타입으로 지정할 수 없음
  // 아니면 이렇게
  [key: string]: string | number
  //age: number

  // 속성이 숫자인 경우도 문자화 되기 때문에 위에서 걸러짐
  [key: number]: string
}

let user: StringOnly = {
  name: "kim",
  age: "20",
  location: "seoul",
  0: "0",
  1: "111",
  2: "2"
}
// 숫자로 된 속성 뽑을 때
console.log(user[1]);
console.log(user["1"]);


// recursive 하게 타입 만들기
interface MyType {
  "font-size": MyType | number // {"font-size": MyType}
}

let css: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 14
    }
  }
}


interface Obj5Type {
  "font-size": number,
  [key: string]: number | Obj5Type
}

let obj5: Obj5Type = {
  "font-size": 10,
  "secondary": {
    "font-size": 12,
    "third": {
      "font-size": 14
    }
  }
}