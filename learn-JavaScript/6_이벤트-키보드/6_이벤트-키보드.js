let inputBox = document.querySelector('#inputbox');
let img = document.querySelector('img');

img.addEventListener('error', function (event) {
  console.log('error');
  event.target.src = '/assets/images/gri.jpg'; // error 이벤트 및 사진 대체
});

/*
inputBox.addEventListener('keypress', function (event) {
  console.log('keypress');
});

inputBox.addEventListener('keydown', function (event) {
  console.log('keydown');
});

inputBox.addEventListener('keyup', function (event) {
  console.log('event.key', event.key);
  console.log('event.keyCode', event.keyCode);
});

inputBox.addEventListener('focus', function (event) {
  alert('focus');
});

inputBox.addEventListener('blue', function (event) {
  alert('blue');
});

inputBox.addEventListener('change', function (event) {
  alert('change');
});
*/
