// 타입 조건식 만들기
// extends + 삼항연산자
// extends: 왼쪽이 오른쪽의 성질을 가지고 있는지
type Age<T> = T extends string? string : unknown;
let age: Age<string> = "aaa";
let age2: Age<string | number> = 10;
let age3: Age<number> = 30;


type Age2<T> = T extends [string, ...any]? T[0]: unknown;
let age4: Age2<[string, number]>;
let age5: Age2<[boolean, number]>;

// 2
type 타입뽑기<T> = T extends (x: infer R) => any? R: any;
let 타입1: 타입뽑기<(x: number) => void>
let 타입2: 타입뽑기<(x: string) => void>

export {}