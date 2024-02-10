// Null, undefined check
// && 연산자
// 1. a가 undefined이면 조건식이 모두 undefined 됨
// 2. a가 string이면 && 오른쪽 조건식 실행
function func9(a: string | undefined) {
  if (a && typeof a === "string") {

  }
}

// in 키워드
// 각 오브젝트의 서로 가진 프로퍼티가 다를 때 구분
// 프로퍼티 in 오브젝트
// 오브젝트 안에 그 프로퍼티가 있는지 체크
type Fish = { swim: string }
type Bird = { fly: string };
function func10(animal: Fish | Bird) {
  // typeof 사용 불가 => object 나옴
  if ("swim" in animal) {
    animal.swim
  }
}

// instanceof 연산자
// 인스턴스 instanceof 부모클래스
let 날짜 = new Date();
if (날짜 instanceof Date) {

}

// 부모클래스도 없고, 프로퍼티가 같을 때
// l.iteral type 강제로 만들기
type Car2 = {
  wheel: "4개",
  color: string
}
type Bike = {
  wheel: "2개",
  color: string
}

function func11(x: Car2 | Bike) {
  if (x.wheel === "4개") {
    console.log("x는 Car 타입이에요");
  }
}