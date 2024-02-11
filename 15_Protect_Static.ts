// protected, static
// class 복사방법 -> extends
// protected 
// class {} 안에서만 사용 가능, private 보다 조금 더 확장성 있음
// extends된 class { } 안에서 사용 가능
class User2 {
  private x: number;
  protected y: number;
}

class NewUser extends User2 {
  doThis() {
    // this.x // error
    this.y = 10;
  }
}

// static
// 부모클래스명으로 접근할 수 있는 필드
// 인스턴스에게 안 물려줌
// extends된 class { } 안에서 사용 가능
// private, protected, public과 함께 사용 가능
class User3 {
  x: number = 10;
  static y: number = 20;
}

let john = new User3();
// console.log(john.y); // error
console.log(User3.y);



// 정리
class User4 {
  // 자식에 물려줌
  public a = "a";
  protected b = "b"; // extends된 클래스 안에서는 수정 가능
  private c = "c"; // private은 무조건 선언된 클래스 안에서만

  // 여기서부터는 자식에 안 물려줌
  // 클래스명.필드명 으로 접근
  static d = "d";
  
  public static e = "e";
  protected static f = "f"; // extends된 클래스 안에서는 수정 가능
  private static g = "g"; // private은 무조건 선언된 클래스 안에서만
  constructor() {
    this.c = "C" + ": User에서 수정";
    User4.g = "G" + ": User에서 수정"
  }
}

class NewUser4 extends User4 {
  constructor() {
    super();
    this.a = "A";
    this.b = "B";
    // this.c = 300; error
    User4.d = "D";
    User4.e = "E";
    User4.f = "F";
    // User4.g = 700; error
  }
}

let child = new User4();
let child2 = new NewUser4();
console.log(child);
console.log(child2);


// 숙제
class User5 {
  private static x = 10;
  public static y = 20;
  static addOne(a:number) {
    User5.x += a;
  }
  static printX() {
    console.log(User5.x);
  }
}
User5.addOne(3);
User5.addOne(4);
User5.printX();

class Square2 {
  x: number;
  y: number;
  color: string;
  constructor(x:number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  draw() {
    let box = document.querySelector(".box");
    if (box instanceof HTMLDivElement) {
      box.style.width = "400px";
      box.style.height = "400px";
      box.style.position = "relative";
      box.style.border = "1px solid black"
    }
    let item = document.createElement("div");
    item.style.width = this.x + "px";
    item.style.height = this.y + "px";
    item.style.background = this.color;
    item.style.position = "absolute";
    item.style.top = Math.random()*400 + "px";
    item.style.left = Math.random()*400 + "px";
    box.appendChild(item);
  }

}

let square = new Square2(30, 30, "red");
square.draw();
square.draw();
square.draw();
square.draw();
square.draw();