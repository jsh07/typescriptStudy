// tuple type
// 순서와 위치까지 고려한 타입 지정 가능
// 옵션 줄 수 있는데 맨 뒤에서부터 ? 사용
var 멍멍 = ["dog", true];
// 함수에서 쓰는 tuple
// rest parameter타입 지정시 tuple 사용
function func18() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x); // array에 담김
}
function func19(a, b, c) {
    console.log(a, b, c); // 각 파라미터 변수에 담김
}
