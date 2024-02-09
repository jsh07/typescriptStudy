// 함수에 타입 지정하기
// 파라미터, return값 타입 지정 가능
function func(x: number): number {
  return x * 2;
}

// void 타입
// return 없을 경우 return 타입에 void 타입
function func2(x: number): void {
  console.log(x);
}

// 자바스크립트와 다른 점
// 타입 지정된 파라미터는 필수
// func2(); // error


// ? 연산자
// 파라미터가 옵션일 경우 파라미터변수?: 타입
// => 파라미터변수: 타입 | undefined와 같음
function func3(x?: number): void {
}
func3(); // 에러 안 남

// object의 프로퍼티에도 가능
// let obj2: {
//   a: string,
//   b: number,
// } = {
//   a: "123"
// } // error

let obj3: {
  a: string,
  b?: number
} = {
  a: "123"
}


