// Generic
function func17(x) {
    return x[0];
}
var a = func17([4, 2]);
var b = func17(["4", "2"]);
var c = func17(["4", "2"]); // 타입 안적어줘도 됨
console.log(c);
// 타입파라미터 제한두기
// extends : narrowing 인정해줌
function func13(x) {
    return x - 1;
}
var d = func13(100);
console.log(d); // 99
function func14(x) {
    return x.length;
}
var e = func14("hello");
var f = func14(["a", "b", "c"]);
console.log(e);
console.log(f);
// class
var GenericClass = /** @class */ (function () {
    function GenericClass(a) {
        this.x = a;
    }
    return GenericClass;
}());
var instance = new GenericClass("aaa");
console.log(instance.x);
var me = { name: "jeon", age: 28 };
// 숙제
function func15(a) {
    return a.length;
}
var data2 = '{"name" : "dog", "age": 1 }';
function func16(json) {
    return JSON.parse(json);
}
console.log(func16(data2));
var Person4 = /** @class */ (function () {
    function Person4(a) {
        this.name = a;
    }
    return Person4;
}());
var aaa = new Person4("어쩌구");
aaa.name;
