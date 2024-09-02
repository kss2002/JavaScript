// 객체 지향 프로그램에서 제일 어려운 건 당연히 객체이다.

// 객체 생성

/*
const person = {
  name: '민지',
  age: 19,
};

console.log(person);
*/

/*
// 객체 프로퍼티 접근
const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'health'],
  hello: function () {
    alert('Hello!');
  },
  greeting: function () {
    alert('Hi!');
  },
  hobby: {
    name: 'programing',
    alert: function () {
      alert('programing');
    },
  },
};
console.log(person.name);
console.log(person.age);
//person.hello();
console.log(person.hobby.name);

console.log(person['name']);
person['age'];
person['hello']();
person['hobby']['name'];
person['hobby']['alert']();

// 객체 제거
delete person.name;
console.log(person.name); //undefined
*/

/*
// 함수 파라미터로 객체 전달하기 / 구조 분해 할당 - 함수에서 객체 개별 속성을 받을 때
// 실무에서 자주 쓰임.
function printPerson({ name, age, hobby }) {
  console.log(
    `제 이름은 ${name}이며, 나이는 ${age}살 입니다.그리고 취미는 ${hobby} 입니다.`
  );
}

const person = {
  name: '짐코딩', // 프로퍼티
  age: 10,
  hobby: '헬스',
};
printPerson(person);
// 위에 처럼 함수 정의하고 객체를 정의. 객체를 불러오는게 코드가 깔끔하다.

// 구조 분해 할당 - 객체 속성을 개별 변수에 담을 때 < 실무에서 자주 쓰임.
const { name, age, hobby } = person;
*/

/*
// 팩토리 함수 사용 - 같은 유형의 객체를 반복해서 생성할 때
function createPerson(name, age, hobby) {
  return {
    name: name,
    age: age,
    hobby: hobby,
  };
}

const person1 = createPerson('짐코딩', 10, '헬스');
const person2 = createPerson('홍길동', 20, '헬스');
const person3 = createPerson('김길동', 30, '헬스');
const person4 = createPerson('고길동', 40, '헬스');
const person5 = createPerson('한길동', 50, '헬스');
const person6 = createPerson('최길동', 60, '헬스');
console.log(person1);
// ...

*/

// 클래스를 사용한 객체 생성 (ES6) - 객체지향
class Person {
  constructor(name, age, hobby) {
    this.name = name; // this 연산자
    this.age = age;
    this.hobby = hobby;
  }
}
const person_class = new Person('짐코딩', 20, '헬스');
console.log(person_class);

// 참조 타입 (Reference type) - 참조값이냐 그냥 값이냐
let username = '민지';
console.log(username);
changeName(username); // Call By Value (값에 의한 호출)
console.log(username);

function changeName(name) {
  name = '김성수';
  console.log(name);
}
console.log('-----------');

let person = {
  name: '다니엘',
  age: 18,
};

console.log(person);
changePersonName(person); // Call By Reference (참조에 의한 호출)
console.log(person);

function changePersonName(person) {
  (person.name = '정몽규'), (person.age = 60);
}

// 객체 복사

const obj1 = { name: 'GYMCODING', age: 10 };
const obj2 = Object.assign({}, obj1);

obj2.name = '홍길동';
obj2.age = 100;
console.log('obj1: ', obj1);
console.log('obj2: ', obj2);

// 키 존재 여부 확인
const person_key = {
  name: '짐코딩',
  name2: 'hello',
};
if (person_key.name3) {
  console.log('이름이 정의되어 있습니다.');
} else {
  console.log('이름이 정의되어 있지 않습니다.');
}
