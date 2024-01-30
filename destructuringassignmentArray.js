// 배열 구조 분해 할당
const foo = ["one", "two", "three"];
const [one, two, three] = foo;
console.log(one, two, three);

// 선언에서 분리한 할당
let a, b;
[a, b] = [1, 2];
console.log(a, b);

// 할당값이 undefined일 경우
const [A = 5, B = 7, C = 9] = [1, null];
console.log(A, B, C);

// 변수교환
let d = 1;
let e = 3;
[d, e] = [e, d];
console.log(d, e);

// 일부 반환 값 무시
function f(){
    return [1, 2, 3];
}
const [j, , g] = f();
console.log(j, g);

//나머지를 할당하기
//const h, i, rest;
const [h, i, ...rest] = [10, 20, 30, 40, 50];
console.log(h, i, rest);

