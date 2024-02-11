// public private protected static

// public, private

// public 키워드
// 필드에 public 붙이면 모든 자식들이 이용 가능
// public 은 항상 강제로 부여됨

// private 키워드
// private 붙이면 자식들이 쓸 수 없음
// class안에서만 수정, 사용
class User {
  name: string;
  private familyName: string = "jeon"; 
  constructor(a: string) {
    this.name = a + this.familyName;
  }
  setFamilyName(a: string) {
    this.familyName = a;
  }
}

let user1 = new User("suhee");
console.log(user1.name);
console.log(user1.setFamilyName("kim"));


// class 밖에서 수정하려면?
// => class 안에 수정할 수 있는 함수 만들기 (setter)


// public 키워드 쓰면 this.어쩌구 생략 가능
class Person3 {
  constructor(public name: string){
    this.name = "kim";
  }
}

let 자식 = new Person3("kim");