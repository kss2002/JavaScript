// for문
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// [출력]
// 0
// 1
// 2
// 3
// 4

console.log('-----------------');

// for ~ in & 객체(object)에 있는 키 항목들을 반복적으로 반환합니다.
//ES6 에서 추가됨.
const person = {
  name: '홍길동',
  age: 20,
  job: '개발자',
};
for (let key in person) {
  console.log(`key: ${key}, value: ${person[key]}`);
}
// [출력]
// key: name, value: 홍길동
// key: age, value: 20
// key: job, value: 개발자

console.log('-----------------');

// for ~ of & 반복 가능한 배열과 같은 객체에서 반복해서 값을 하나씩 반환한다.
//ES6 에서 추가됨.
const array = ['a', 'b', 'c', 'd', 'e'];
for (let value of array) {
  console.log('value: ', value);
}
// [출력]
// value:  a
// value:  b
// value:  c
// value:  d
// value:  e

// While loop
let count = 0;
while (count < 5) {
  console.log(count + '번째 출력');
  count++; //이거 없으면 무한 루프. 조심하자!
}

console.log('-----------------');

let count_1 = 5;
do {
  console.log(count_1 + '번째 출력');
  count_1++; //이거 없으면 무한 루프. 조심하자!
} while (count_1 < 5); // 최초 한번은 무조건 수행한다.
