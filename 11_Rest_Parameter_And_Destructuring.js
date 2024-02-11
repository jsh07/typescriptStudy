// rest paramter는 맨 뒤에 사용
function sum() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
function func12(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
var obj4 = { student: true, age: 20 };
func12(obj4);
// 숙제
function getMax() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var max = 0;
    rest.forEach(function (num) {
        if (num > max) {
            max = num;
        }
    });
    return max;
}
console.log(getMax(4, 6, 3, 2));
function func7(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
func7({ user: 'kim', comment: [3, 5, 4], admin: false });
function func8(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
func8([40, 'wine', false]);
