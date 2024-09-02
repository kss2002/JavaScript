// 이벤트
// 이벤트 등록하기
let btn1 = document.querySelector('.btn1'); //변수 정의
let btn2 = document.querySelector('.btn2');

console.log(btn1);
console.log(btn2);

btn1.onclick = function () {
  alert('hello 프로퍼티 리스너');
};
btn2.addEventListener('click', helloEvent1);
btn2.addEventListener('click', helloEvent2);

function helloEvent1() {
  alert('addEventListener 1');
}
function helloEvent2() {
  alert('addEventListener 2');
}

// 이벤트 제거하기
btn2.removeEventListener('click', helloEvent1);
btn2.removeEventListener('click', helloEvent2);
