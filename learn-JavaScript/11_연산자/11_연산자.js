//문자열 병합
console.log('Hello ' + 'World!'); // "Hello World!" 출력
console.log('3' + 3); // "33" 출력
console.log('3' + 5 + 8); // "358" 출력
console.log(3 + 5 + '8'); // "88" 출력
// 참 신기한 자바스크립트 문법..
console.log('--------------');

let x = 10;
let y = 20;
console.log(x + y); //30
console.log(x - y); //-10
console.log(x * y); //200
console.log(x / y); //0.5 (나눗셈)
console.log(x % y); //10 (나머지)
console.log('--------------');

// 증감 연산자 (전위 / 후위)
let result = ++x + 20 + y--;
console.log('result: ', result);
console.log('x: ', x);
console.log('y: ', y);
// [출력]
// result:  51
// x:  11
// y:  19

console.log('--------------');
// 비교연산자
// x > y & x < y & x >= y & x <= y ....

// 비교 연산자 (타입 비교)
const stringTwo = '2';
const numberTwo = 2;

// == loose equality (타입을 변경해서 검사함)
console.log(stringTwo == numberTwo); // true
console.log(stringTwo != numberTwo); // false

// === strick equality (타입도 같은지 검사함) - 엄격한 검사(권장함)
console.log(stringTwo === numberTwo); // false
console.log(stringTwo !== numberTwo); // true

const obj1 = { name: '홀길동' };
const obj2 = { name: '홀길동' };
console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false
// obj1과 obj2 모두 레퍼런스 값이 다르기 때문에 false 출력

// 할당 연산자
console.log('--------------');
let num_1 = 10;
let num_2 = 20;

num_1 += num_2; // num_1 = num_1 + num_2 와 같은 연산자
console.log(num_1); // 30

console.log('--------------');
let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum += i; // sum = sum + i 와 같은 연산자
}
console.log(sum); //55

console.log('--------------');

// 논리 연산자
let a1 = true;
let a2 = false;
console.log(a1 && a2); //false (그리고)
console.log(a1 || a2); //true (혹은)

// 유효성 검사
let btn = document.querySelector('#btn');
let emailEL = document.querySelector('[name=email]');
let passwordEL = document.querySelector('[name=password]');

btn.addEventListener('click', function (event) {
  let email = emailEL.value;
  let password = passwordEL.value;
  console.log('email:', email);
  console.log('!password:', !password);

  if (email === '' || email.includes('@') === false) {
    alert('이메일이 유효하지 않습니다.'); // 단축 평가
  } else if ((password.length >= 8 && password.length <= 16) === false) {
    alert('비밀번호는 8~16자 이내 입니다.');
  } else {
    alert('로그인 성공');
  }
});

// 삼항 연산자 -  조건식 ? 값1 : 값2
let req = 100;
let mess = req > 100 ? 'hello' : 'bye';
console.log(mess); // bye
