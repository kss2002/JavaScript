// 1] 숫자
const num = -11;
let num_1 = 2;
let num_2 = 0.2;
console.log(num_2);
console.log(5 / 0); // Infinity
console.log('NaN' / 0); // NaN
// typeof < 데이터 타입 변환
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"

// 2] 문자
// 이스케이프 문자도 존재함.
const name_1 = '민지';
const name_3 = `혜인`; //백틱 표현 - ES6에서 새로 생김
const age = 25;
const name = '홍길동';
console.log(name_1);
console.log(name_3);
console.log(
  '내 이름은 ' + name + ' 입니다. 그리고 나이는 ' + age + '살 입니다.'
);
// 결과 => 내 이름은 홍길동 입니다. 그리고 나이는 25살 입니다.
console.log(`내 이름은 ${name} 입니다. 그리고 나이는 ${age}살 입니다.`);
// 결과 => 내 이름은 홍길동 입니다. 그리고 나이는 25살 입니다.

// 3] 불리언
const isProgramer = true;
const idDesigner = false;

// 4] Null / Underfind
const username = null; //빈 값
let message; // 값이 할당되어있지 않음.
console.log(username);
console.log(message);
