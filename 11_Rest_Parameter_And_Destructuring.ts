// rest paramter는 맨 뒤에 사용
function sum(...a: number[]) {
  console.log(a);
}


// 함수 파라미터에 destructuring 사용
// 오브젝트 안에 있던 자료를 파라미터로 넣고 싶다

interface ObjType2 {
  student: boolean;
  age: number;
}
function func12({ student, age }: ObjType2) {
  console.log(student, age);
}
let obj4 = { student: true, age: 20 };
func12(obj4);


// 숙제
function getMax(...rest: number[]): number {
  let max = 0;
  rest.forEach(num => {
    if (num > max) {
      max = num;
    }
  })
  return max;
}
console.log(getMax(4, 6, 3, 2));

function func7({user, comment, admin}: {user:string, comment: number[], admin: boolean}):void {
  console.log(user, comment, admin);
}
func7({ user : 'kim', comment : [3,5,4], admin : false });

function func8([a, b, c]: (number|string|boolean)[]){
  console.log(a, b, c);
}
func8([40, 'wine', false]);