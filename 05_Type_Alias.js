var animal = {
    name: 'happy',
    age: 3
};
var 남친 = {
    name: '현우'
};
남친.name = '철수'; // 에러는 띄워주지만 컴파일한 .js에서는 동작잘됨
console.log(남친.name);
var position = { x: 10, y: 20 };
// type SameType = number;
