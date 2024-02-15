"use strict";
// ~.d.ts 파일
// 1. 타입 정의 보관용 파일
// import / export
Object.defineProperty(exports, "__esModule", { value: true });
// 원래 ts 파일은 기본적으로 글로벌 모듈인데, 
// d.ts 파일은 자동으로 글로벌 모듈이 되지 않음
// 글로벌 모듈 만드는 법
// typeRoots : ["폴더주소"]
// 해당 폴더에 있는 타입들은 글로벌하게 이용가능
// 유명한 자바스크립트 외부 라이브러리들은 사람들이 d.ts를 만들어놓은 게 있음
// definitely typed github repository 
// or 타입스크립트 공홈 검색
// npm 설치 시엔 대부분 타입도 들어옴
// 설치하면 node_modules/@types 폴더에 생김 (라이브러리의 타입 보관함), 이 폴더 안에 있는 타입들은 글로벌 모듈
// typeRoots를 설정하지 않았으면 이 폴더를 참조하지만,
// 설정한게 있으면 typeRoots 설정 폴더를 사용
