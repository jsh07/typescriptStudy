// object type 선언할 때 
// => interface 키워드
// 중복선언 가능
var square1 = { color: "red", width: 100 };
var cat = { name: "cat", legs: 4 };
var cat2 = { name: "cat2", legs: 4 };
var 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
console.log(장바구니);
var 계산기 = {
    plus: function (x, y) {
        return x + y;
    },
    minus: function (x, y) {
        if (x >= y) {
            return x - y;
        }
        else {
            return y - x;
        }
    }
};
