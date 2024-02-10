// 함수와 methods에 type alias

// 함수 타입은 arrow function으로 작성
type FuncType = (a: string) => number;

// 함수 type alias 부착하려면 함수 표현식 써야함
let func6: FuncType = function (a) {
  return 10;
}

// object 안의 method

type ObjType = {
  name: string,
  plusOne: (x: number) => number,
  changeName: () => void
}
let 회원정보 = {
  name: 'kim',
  plusOne(x) {
    return x
  },
  changeName() {}
}


// 숙제
type CutZeroType = (str: string) => string
type RemoveDashType = (str: string) => number
let cutZero: CutZeroType = function (str) {
  if (str[0] === '0') {
    return str.slice(1,str.length);
  } else {
    return str;
  }
}
console.log(cutZero('0abcd'));

let removeDash: RemoveDashType = function (str) {
  return parseFloat(str.replace(/-/g, ''));
}
console.log(removeDash('010-1234-5678'))

type HwFuncType = (a: string, cutZero: CutZeroType, removeDash: RemoveDashType) => number

let HwFunc:HwFuncType = function (str, cutZero, removeDash) {
  return removeDash(cutZero(str));
}
console.log(HwFunc('010-1111-2222', cutZero, removeDash))