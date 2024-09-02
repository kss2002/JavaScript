//배열
/*
//배열 리터럴 표기법 (array literal syntax) < 현업에서 제일 많이 흔히 씀.
const fruits = ['사과', '바나나', '딸기'];

//배열 생성자 표기법 (array constructor syntax)
const fruits_constructor = new Array('사과', '바나나', '딸기');

// 배열 접근
console.log(fruits[0]); // "사과"
console.log(fruits[1]); // "바나나"
fruits[2] = '포도'; // 배열 수정 가능
console.log(fruits[2]); // "포도"

// [*] 자주 사용하는 배열 API(프로퍼티, 메서드)
// 배열 길이 접근
console.log('fruits.length: ', fruits.length); // 3

// 배열의 마지막 항목 가져오기
console.log('last item: ', fruits[fruits.length - 1]); // last item:  포도

// 배열 끝에 항목 추가하기
fruits.push('포도');
fruits.push('오렌지');
console.log('fruits: ', fruits); // ['사과', '바나나', '포도', '포도', '오렌지']

// 배열의 항목을 순환하며 처리하기
fruits.forEach(function (item, index, array) {
  console.log(item, ':', index);
}); // 사과 0 바나나 1 포도 2 포도 3 오렌지 4

// 배열 끝에 항목 제거하기
fruits.pop();
console.log('fruits: ', fruits); // ['사과', '바나나' , '포도', '포도']

// 배열 앞에 항목 제거하기
fruits.shift();
console.log('fruits: ', fruits); // ['바나나', '포도', '포도']

// 배열 앞에 항목 추가하기
fruits.unshift('용과');
fruits.unshift('수박');
console.log('fruits: ', fruits); // ['수박', '용과', '바나나', '포도', '포도']

// 배열 안 항목의 인덱스(index) 찾기
const index = fruits.indexOf('토마토');
const apple = fruits[index];
console.log('index: ', index); // index: -1 (값이 없으면)
console.log('apple: ', apple); // apple: undefined (값이 없으면)

// 인덱스 위치에있는 항목 제거하기
const removeIndex = fruits.indexOf('용과');
fruits.splice(removeIndex, 1);
console.log('fruits: ', fruits); // ['수박', '바나나', '포도', '포도']


// [1] 구조 분해 할당 - 배열 항목을 개별 변수에 담을 때
const fruits = ['사과', '바나나', '딸기'];
const [apple, banana, strawberry] = fruits;
console.log(apple, banana, strawberry); // 사과 바나나 딸기
*/
/*
const fruits = ['사과', '바나나', '딸기', '수박'];
const [apple, ...others]  = fruits;
console.log(apple);  // 사과
console.log(others); // ['바나나', '딸기', '수박']
*/
/*
// [2] Spread syntax(전개 구문)
let arr = [1, 'two', 3, 'four'];
let numberArr = [...arr, 5, 'six'];
console.log('numberArr: ', numberArr);
// [출력]
// numberArr:  (6) [1, 'two', 3, 'four', 5, 'six']

// [3] Rest parameters
// 나머지 매개변수 구문(Rest parameters)을 사용하면
// 함수가 무한한 수의 파라미터를 배열로 받을 수 있습니다.
function printFruits(...fruits) {
  console.log('fruits: ', fruits);
}
function printTitleAndFruits(title, ...fruits) {
  console.log('title:', title);
  console.log('fruits: ', fruits);
}
printFruits('사과', '바나나', '딸기');
printFruits('사과', '바나나', '딸기', '포도');
printTitleAndFruits('과일출력', '사과', '바나나', '딸기', '포도');
*/

// [4] 배열 복사하기 & 배열은 객체이기 때문에 참조값을 갖고 있다.
const fruits = ['오렌지', '포도', '사과', '바나나', '딸기'];
const copy = [...fruits]; // 전개 구문
//const copy = Array.from(fruits); Array.from
//const copy = fruits.slice(); slice
copy.pop(); // 끝에 항목 제거
console.log('fruits: ', fruits); // ['오렌지', '포도', '사과', '바나나', '딸기']
console.log('copyFruits: ', copy); // ['오렌지', '포도', '사과', '바나나']
