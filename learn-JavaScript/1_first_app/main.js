/* 객체 , 함수 , 변수 */
console.log('HELLO WORLD!!');
console.log('아니  말도 안되는거 아님?');
console.log('heed', 'hdddd');

/*alert('hello!!!');  < (경고창) 이거는 자바스크립트 주석이무니다 */

// let num = 10;
let num = 2; /* let < 자료형 */
let str = 'Hello world';
console.log('str: ', str);
console.log('num: ', num);

//함수
function say() {
  console.log('hello 1');
  console.log('hello 2');
  console.log('hello 3');
  console.log('-----------');
}

say();
console.log('--------------------');
say();

//객체
let obj = {
  num: 30, //프로퍼티(속성)
  say: function () {
    console.log('obj>hello 1');
    console.log('obj>hello 2');
    console.log('obj>hello 3');
  },
};

console.log(obj);
obj.say();
