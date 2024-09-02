'use strict'; //엄격 모드. 가장 최상단에 올라올 때 적용됨.

/*
let tent = 'kim sung su';
console.log(tent);

const user = 'suns';
console.log(user);

user = 'error'; // 에러가 뜸. const는 상수 키워드

// var는 옛날 것이 되어버렸다! <- var로 선언된 것만 호이스팅 가능.
호이스팅 (hoisting) >면접 질문에서 튀어날 수 있는 "개념"
호이스팅은 코드가 실행되기전 
변수나 함수의 선언이 자바스크립트 파일의 최상단으로 끌어 올려지는 것을 말한다.
*/

/* 스코프 = 변수 유효범위 */
let name = '홍길동'; // 전역변수
let age = 45; // 전역변수

function printPerson() {
  console.log(`name: ${name}, age: ${age}`);
}
//
{
  let a = '부모변수';
  {
    let a = '다시선언';
    let b = '자식변수';
    console.log('a: ', a);
    console.log('c: ', a);
  }
  console.log('c: ', a);
  console.log('c: ', c); //에러
}
//네이밍 규칙
//let 2number = 2;    // [X] 식별자 맨 앞에 숫자가 올 수 없음
let $number = 2; // [O]
let _number = 2; // [O]
let number2 = 2; // [O]
//대문자와 스네일을 잘 쓰자.
