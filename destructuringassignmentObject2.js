// 기본값 할당
const {a = 10, b = 5} = {a: 3};
console.log(a, b);

// 기본값 갖는 새로운 이름의 변수에 할당
const {a:aa = 10, b:bb = 5} = {a: 3};
console.log(aa, bb); 

// 나머지 분해 할당
const {c, d, ...rest} = {c:10, d:20, e:30, f:40};
console.log(c, d);
console.log(rest);
