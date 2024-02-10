// 함수와 methods에 type alias
// 함수 type alias 부착하려면 함수 표현식 써야함
var func6 = function (a) {
    return 10;
};
var 회원정보 = {
    name: 'kim',
    plusOne: function (x) {
        return x;
    },
    changeName: function () { }
};
var cutZero = function (str) {
    if (str[0] === '0') {
        return str.slice(1, str.length);
    }
    else {
        return str;
    }
};
console.log(cutZero('0abcd'));
var removeDash = function (str) {
    return parseFloat(str.replace(/-/g, ''));
};
console.log(removeDash('010-1234-5678'));
var HwFunc = function (str, cutZero, removeDash) {
    return removeDash(cutZero(str));
};
console.log(HwFunc('010-1111-2222', cutZero, removeDash));
