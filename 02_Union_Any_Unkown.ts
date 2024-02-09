// 여러 타입을 받고 싶을 때
// Union Type
let 회원: (number | string) = 123;

// 할당이 되면 변수의 타입은 그 값의 타입으로 변한다
console.log(typeof 회원); // number

// 숫자 or 문자가 가능한 array 타입 지정
let arr: (string | number)[] = [1, '2', 3];

// 숫자 or 문자가 가능한 Object 프로퍼티 타입 지정
let obj: {
  a: string | number
} = {
  a: '123'
};


// any 타입
// 모든 자료형 허용
// 타입이라는 실드를 해제 문법 (일반 자바스크립트 변수로 만들기)
// 타입이 없어짐
let any1 : any;
any1 = 123;
any1 = [];
let string1: string = any1; // 타입이 없어져서 넣을 수 있다

// unknown 타입
// 모든 자료형 허용
// 자료를 넣어도 unknown 타입
// any랑 다른 점
let unknown1: unknown;
unknown1 = 1;
// let string2: string = unknown1; // error, 여전히 unknown 타입이라서 string 타입 변수에 넣을 수 없음
console.log(any1 + unknown1); // 1

// 타입스크립트는 타입에 매우 엄격
// unknown1 - 1 // error
// number 관련 타입만 수학 연산 시켜줌 : any, number, bigint
// Narrowing / Assertion 
// unknown 타입의 변수를 조작하려면 조작할 변수의 타입이 무엇인지 체크하는 Narrowing / Assertion 스킬을 사용해야 함
// 
let age: string|number;
// 
// age + 1; // error