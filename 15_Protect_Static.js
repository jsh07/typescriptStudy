var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// protected, static
// class 복사방법 -> extends
// protected 
// class {} 안에서만 사용 가능, private 보다 조금 더 확장성 있음
// extends된 class { } 안에서 사용 가능
var User2 = /** @class */ (function () {
    function User2() {
    }
    return User2;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        // this.x // error
        this.y = 10;
    };
    return NewUser;
}(User2));
// static
// 부모클래스명으로 접근할 수 있는 필드
// 인스턴스에게 안 물려줌
// extends된 class { } 안에서 사용 가능
// private, protected, public과 함께 사용 가능
var User3 = /** @class */ (function () {
    function User3() {
        this.x = 10;
    }
    User3.y = 20;
    return User3;
}());
var john = new User3();
// console.log(john.y); // error
console.log(User3.y);
// 정리
var User4 = /** @class */ (function () {
    function User4() {
        // 자식에 물려줌
        this.a = "a";
        this.b = "b"; // extends된 클래스 안에서는 수정 가능
        this.c = "c"; // private은 무조건 선언된 클래스 안에서만
        this.c = "C" + ": User에서 수정";
        User4.g = "G" + ": User에서 수정";
    }
    // 여기서부터는 자식에 안 물려줌
    // 클래스명.필드명 으로 접근
    User4.d = "d";
    User4.e = "e";
    User4.f = "f"; // extends된 클래스 안에서는 수정 가능
    User4.g = "g"; // private은 무조건 선언된 클래스 안에서만
    return User4;
}());
var NewUser4 = /** @class */ (function (_super) {
    __extends(NewUser4, _super);
    function NewUser4() {
        var _this = _super.call(this) || this;
        _this.a = "A";
        _this.b = "B";
        // this.c = 300; error
        User4.d = "D";
        User4.e = "E";
        User4.f = "F";
        return _this;
        // User4.g = 700; error
    }
    return NewUser4;
}(User4));
var child = new User4();
var child2 = new NewUser4();
console.log(child);
console.log(child2);
// 숙제
var User5 = /** @class */ (function () {
    function User5() {
    }
    User5.addOne = function (a) {
        User5.x += a;
    };
    User5.printX = function () {
        console.log(User5.x);
    };
    User5.x = 10;
    User5.y = 20;
    return User5;
}());
User5.addOne(3);
User5.addOne(4);
User5.printX();
var Square2 = /** @class */ (function () {
    function Square2(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    Square2.prototype.draw = function () {
        var box = document.querySelector(".box");
        if (box instanceof HTMLDivElement) {
            box.style.width = "400px";
            box.style.height = "400px";
            box.style.position = "relative";
            box.style.border = "1px solid black";
        }
        var item = document.createElement("div");
        item.style.width = this.x + "px";
        item.style.height = this.y + "px";
        item.style.background = this.color;
        item.style.position = "absolute";
        item.style.top = Math.random() * 400 + "px";
        item.style.left = Math.random() * 400 + "px";
        box.appendChild(item);
    };
    return Square2;
}());
var square = new Square2(30, 30, "red");
square.draw();
square.draw();
square.draw();
square.draw();
square.draw();
