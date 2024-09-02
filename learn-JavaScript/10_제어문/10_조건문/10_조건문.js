/*
let con = 4;
if (con >= 5) {
  console.log('참입니다');
} else {
  console.log('거짓입니다');
} */
// if문과 switct문은 각각 사용할만한 상황이 다를 수 있다
let score = prompt('점수를 입력해주세요'); // 입력을 받는 폼(경고창)
console.log('score:', score);
if (score >= 90) {
  console.log('등급은 A입니다.');
} else if (score >= 80) {
  console.log('등급은 B입니다.');
} else if (score >= 70) {
  console.log('등급은 C입니다.');
} else if (score >= 60) {
  console.log('등급은 D입니다.');
} else {
  console.log('등급은 F입니다.');
}

const subject = 'javascript';
switch (subject) {
  case ('java', 'html'):
    console.log('Good!');
    break;
  case 'css':
    console.log('live!');
    break;
  case 'javascript':
    console.log('Love!');
    break;
  default:
    console.log('모든 case 절과 일치하지 않다면 해당 명령문 수행');
} // 일치하는 case절이 없다면 default절의 명령문을 수행한다.

/*
거짓 같은 값
- `false` - 거짓
- `0` - 숫자 zero
- `-0` - 음수 zero
- `0n` - BigInt zero
- `""` - 빈 문자열
- `null` - 아무런 값도 없음
- `undefined` - 할당 되지 않은 빈값
- `NaN` - 숫자가 아님
*/
