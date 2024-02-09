// Type이 하나로 확정되지 않았을 경우
// Type Narrowing 써야 함
// 변수의 타입을 특정시켜서 코드 작성
// if문 쓸 땐 else문도 확실하게 써주기
function narrowing1(x) {
    if (typeof x === "number") {
        return x + 1;
    }
    else if (typeof x === "string") {
        return x + 1;
    }
    else {
        return 0;
    }
}
// Narrowing으로 판정해주는 문법들
// typeof 변수
// 프로퍼티 in 오브젝트
// 인스턴스 instanceof 부모
// Assertion
// 타입 덮어쓰기
// 변수 as 타입
// 1. Narrwing할 때 씀
// 2. 어떤 타입이 들어올지 100% 확실할 때 쓰기
// 그냥 if문 쓰셈
function assertion1(x) {
    //return (x as number) + 1 //현재 문법
    return x + 1; //옛날 문법
}
console.log(assertion1(123)); // 124 (number)
console.log(assertion1('123')); // 1231 (string)
function 변환기(data) {
    return JSON.parse(data);
}
var jake = 변환기('{"name":"kim"}');
// 숙제
// 1. 숫자와 문자(숫자인데 문자로되어있는거) 섞인 배열을 넣으면 숫자만 있는 배열 반환
function getNumArr(arr) {
    var result = new Array();
    arr.forEach(function (item) {
        if (typeof item === "string") {
            result.push(parseInt(item));
        }
        else if (typeof item === "number") {
            result.push(item);
        }
    });
    return result;
}
console.log(getNumArr(["1", 2, "3"]));
// 2. object를 집어넣으면 프로퍼티의 맨 뒤에 있는 자료 반환
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function getLastSubject(obj) {
    if (typeof obj.subject === "string") {
        return obj.subject;
    }
    else {
        return obj.subject.pop();
    }
}
console.log(getLastSubject(철수쌤));
console.log(getLastSubject(영희쌤));
console.log(getLastSubject(민수쌤));
