// typescript class 만들기
var Person2 = /** @class */ (function () {
    // 인스턴스는 무조건 Object이므로 return type 지정해줄 필요 없음
    function Person2(name) {
        this.name = name;
    }
    // Person.prototype.perentfunc
    Person2.prototype.perentFunc = function (a) {
        return a;
    };
    return Person2;
}());
var person1 = new Person2("kim");
var person2 = new Person2("park");
// 숙제
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
// 
var Word = /** @class */ (function () {
    function Word() {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        var _this = this;
        this.str = [];
        this.num = [];
        this.arr = rest;
        rest.forEach(function (item) {
            if (typeof item === "string") {
                _this.str.push(item);
            }
            else if (typeof item === "number") {
                _this.num.push(item);
            }
        });
    }
    return Word;
}());
var obj2 = new Word("kim", 3, 5, "park");
console.log(obj2.num);
console.log(obj2.str);
