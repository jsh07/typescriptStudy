// object type 선언할 때 
// => interface 키워드
// 중복선언 가능

// class 만들때와 유사
interface Square {
  width: number;
}
let square1: Square = { color: "red", width: 100 };

// 중복선언 가능
// 위에서 선언한 프로퍼티를 합쳐줌 (자동 extends)
// name과 score 프로퍼티 타입이 모두 들어가있음
interface Square {
  // 중복속성의 타입이 다르면 에러
  // width: string; // error
  color: string;
}

// extends로 확장 가능
interface Rectangle extends Square {
  height: number;
  // extends 쓸 때 중복속성의 타입이 다르면 에러
  // color: number; // error
}

// type은?
// 중복선언 불가

// extends로 확장 불가 
// => intersection type (& 기호)
// 두 타입을 모두 만족하는 타입이라는 뜻
type Animal = {
  name: string
}
type Cat = Animal & { legs: number };
let cat: Cat = { name: "cat", legs: 4 };

// interface도 & 기호 사용 가능
interface Animal2 {
  name: string;
}
interface Cat2 {
  legs: number
}
let cat2: Animal2 & Cat2 = { name: "cat2", legs: 4 };


// 숙제
interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }]
console.log(장바구니);

interface NewCart extends Cart {
  card: boolean;
}

interface MathObj {
  plus: (x: number, y: number) => number
  minus: (x: number, y: number) => number
}

let 계산기: MathObj = {
  plus: (x, y) => {
    return x + y
  },
  minus: (x, y) => {
    if (x >= y) {
      return x - y;
    } else {
      return y - x;
    }
  }
}