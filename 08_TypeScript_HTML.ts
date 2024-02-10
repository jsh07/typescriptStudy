// id 바꾸기
// HTML Element 찾을 때 NULL일 수 있음
// Element | null union type
let title = document.querySelector("#title");

// HTML 조작 시 narrowing 방법 
// 1. if
if (title != null) {
  title.innerHTML = '반가워요';
}

// 2. instanceof 
// 제일 좋음
if (title instanceof Element) {
  title.innerHTML = '반가워요';
}

// 3. optional chaining (?.)
// Object?.프로퍼티
// Object가 존재하면 프로퍼티 값 반환하고 Object가 존재하지 않으면 undefined 반환
if (title?.innerHTML != undefined) {
  title.innerHTML = '반가워요';
}




// <a> 태그의 속성 변경
// Element 타입을 상속한 타입들..
// Element에는 기본 HTML 태그에 대한 속성만 정의해두어서
// <a> 태그에만 있는 href같은 속성이 없다
// HTMLAnchorElement, HTMLHeadingElement, HTMLButtonElement ..
// 정확한 타입으로 narrowing 해줘야 함
let link = document.querySelector(".href");
if (link instanceof HTMLAnchorElement) {
  link.href = "https://kakao.com";
}


// 숙제
let image = document.querySelector("#image");
if (image instanceof HTMLImageElement) {
  // image.src = "new.jpg";
}

let links = document.querySelectorAll(".naver");
links?.forEach(element => {
  if (element instanceof HTMLAnchorElement) {
    element.href = "https://kakao.com";
  }
});