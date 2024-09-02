// function

// 자바스크립트에서 함수는 객체입니다
// 앞에서 객체는 변수에 담을 수 있다고 했죠? 즉 함수를 변수에 담아 생성할 수 있습니다.

// 함수 선언식 < 호이스팅에 영향을 받음.
function sayHello() {
  console.log('이름과 나이를 출력.');
  console.log('name: 홍길동, age: 20세');
}
sayHello();
console.log('-----------');

// 함수 표현식 < 호이스팅에 영향을 받지 않음.
let say = function () {
  console.log('이름과 나이를 출력합니다.');
  console.log('name: 홍길동, age: 20세');
};
say();
console.log('-----------');

// 파라미터
function Hello(name, age) {
  console.log('이름과 나이');
  console.log(`name: ${name}, age: ${age}세`);
}
Hello('짐코딩', 20);
Hello('민지', 19);
console.log('-----------');

// 반환 값 (return)
function sum(number1, number2) {
  return number1 + number2;
}
let result = sum(5, 3);
console.log('result: ', result); // result: 8

// 함수 스코프
function aFunc() {
  let name = '짐코딩';
  let age = 20;
  function bFunc() {
    let job = '개발자';
    console.log('bFunc name: ', name);
    console.log('bFunc age: ', age);
    console.log('bFunc job: ', job);
  }
  bFunc();
  console.log('aFunc name: ', name);
  console.log('aFunc age: ', age);
  //console.log('job: ', job); // error
}
aFunc();

/* Arrow Function , 자주 사용되니 꼭 익혀두세요!
const f1 = function () {
  return 'hello';
};
// 또는
const f1 = () => 'hello';

const f2 = function (name) {
  return `Hello, ${name}`;
};
// 또는
const f2 = (name) => `Hello, ${name}`;

const f3 = function (a, b) {
  return a + b;
};
// 또는
const f3 = (a, b) => a + b;
*/
