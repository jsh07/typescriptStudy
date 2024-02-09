// 변수에 타입 지정 가능 (자료형 제한)
// 타입이 실수로 변경될 때 에러 내줌
var 이름 = "kim";
var 나이 = 50;
var 개발잘하니 = true;
// undefined, null 도 있음
// Array
// Array 안에 들어갈 자료의 타입 지정
var 회원들 = ["kim", "park"];
// 다른 타입을 동시에 집어넣고 싶으면 ? Union type
// Object
// 프로퍼티마다 타입 지정 가능
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true
};
// 타입 지정은 자동으로 해줌
// 이름2 변수의 타입은 string
var 이름2 = "park";
