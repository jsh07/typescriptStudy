// 변수에 타입 지정 가능 (자료형 제한)
// 타입이 실수로 변경될 때 에러 내줌
let 이름: string = "kim";
let 나이: number = 50;
let 개발잘하니: boolean = true;
// undefined, null 도 있음

// Array
// Array 안에 들어갈 자료의 타입 지정
let 회원들: string[] = ["kim", "park"];

// 다른 타입을 동시에 집어넣고 싶으면 ? Union type

// Object
// 프로퍼티마다 타입 지정 가능
let project: {
  member: string[],
  days: number,
  started: boolean
} = {
  member : ["kim", "park"],
  days: 30,
  started: true
};

// 타입 지정은 자동으로 해줌
// 이름2 변수의 타입은 string
let 이름2 = "park";



