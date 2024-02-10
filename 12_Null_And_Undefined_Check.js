// Null, undefined check
// && 연산자
// 1. a가 undefined이면 조건식이 모두 undefined 됨
// 2. a가 string이면 && 오른쪽 조건식 실행
function func9(a) {
    if (a && typeof a === "string") {
    }
}
function func10(animal) {
    // typeof 사용 불가 => object 나옴
    if ("swim" in animal) {
        animal.swim;
    }
}
// instanceof 연산자
// 인스턴스 instanceof 부모클래스
var 날짜 = new Date();
if (날짜 instanceof Date) {
}
function func11(x) {
    if (x.wheel === "4개") {
        console.log("x는 Car 타입이에요");
    }
}
