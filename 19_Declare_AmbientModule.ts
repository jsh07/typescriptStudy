// => .js파일로 만들어진 라이브러리 사용할 때
// <script src=""> 로 .js 파일 불러오기

// .js에 있는 변수를 .ts에서 이용하고 싶으면
// 변수 재정의하는 declare 키워드 사용
// 컴파일러에게 힌트를 주는 것
declare let testDeclareA: number;
console.log(testDeclareA + 1);


// .ts 파일 => .ts 파일 
// 모든 ts 파일은 ambient module (글로벌 모듈)
globalVariable = "갖다쓰기";

// ts파일을 ambient module이 아닌 local module로 만드는 방법
// import / export 중 아무거나 있으면 자동으로 로컬 모듈이 됨
export { }

// 로컬 모듈인데 글로벌 변수 만들고 싶을 때
declare global {
  // 글로벌 변수 만드는 공간
  type Dog = string;
}

// 1. import / export
