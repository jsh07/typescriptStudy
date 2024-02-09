// 타입을 변수에 담을 수 있음
// 타입 변수는 대문자로 시작, 뒤에 Type 붙이면 좋음
type AnimalType = {
  name: string,
  age: number
}
let animal: AnimalType = {
  name: 'happy',
  age: 3
}

// readonly 수정 불가
// const로 구현 불가능한 프로퍼티 수정 잠그기
type BoyfriendType = {
  readonly name: string
}
const 남친: BoyfriendType = {
  name: '현우'
}
남친.name = '철수'; // 에러는 띄워주지만 컴파일한 .js에서는 동작잘됨
console.log(남친.name);

// type 변수 union type으로 합치기
type NameType = string;
type AgeType = number;
type PersonType = NameType | AgeType;

// & 로 object 타입 extend하기
type PositionXType = { x: number };
type PositionYType = { y: number };
type PositionType = PositionXType & PositionYType;

let position: PositionType = { x: 10, y: 20 };

// 같은 이름의 type 변수 재정의 불가능
type SameType = string;
// type SameType = number;


