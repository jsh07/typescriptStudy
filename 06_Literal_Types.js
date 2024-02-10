// Literal Types
// 사전에 정의한 타입만 넣을 수 있도록 지정할 수 있음
// - 변수에 들어올 값 엄격하게 관리
// - 자동완성 기능
var itsMe;
itsMe = 'Woman';
// 왜 에러남?
var data = {
    name: "kim"
};
function func5(a) {
    // kim 이라는 타입만 들어올 수 있음 O
}
func5(data.name); // error, data.name은 "kim"이라는 타입이 아님
// 해결책 : as const 키워드
// 1. object value 값을 그대로 타입으로 지정
// 2. object 속성들에 모두 readonly를 붙여줌
// => object 자료 완전히 잠그기
