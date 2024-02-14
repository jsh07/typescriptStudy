// tuple type
// 순서와 위치까지 고려한 타입 지정 가능
// 옵션 줄 수 있는데 맨 뒤에서부터 ? 사용
let 멍멍: [string, boolean, number?] = ["dog", true];

// 함수에서 쓰는 tuple
// rest parameter타입 지정시 tuple 사용
function func18(...x: [number, number, string?]) {
    console.log(x); // array에 담김
}

function func19(a: number, b: number, c?: string) {
    console.log(a, b, c); // 각 파라미터 변수에 담김
}
