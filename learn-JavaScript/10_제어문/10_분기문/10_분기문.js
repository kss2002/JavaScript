/*for문이나 while문의 코드블럭{} 안에서 
continue 문장을 만난 순간 continue문 아래에 있는 실행해야 하는 문장들을 건너 뛰고, 
다음 반복을 시작한다.*/

let text = '';

for (let i = 0; i <= 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// expected output: "01245678910"

console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');

// break는 현재 진행하고 있는 제어문(for, while, switch)의 흐름을 종료합니다.
let text_1 = '';

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text_1 = text_1 + i;
}

console.log(text_1);
// expected output: "012"
