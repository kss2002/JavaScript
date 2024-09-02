let rectangle = document.querySelector('#rectangle');
let body = document.querySelector('body');

rectangle.addEventListener('mousedown', function (event) {
  console.log('clientX', event.clientX, 'clientY', event.clientY);
  // 브라우저 기준 클릭한 위치를 알 수 있음
  console.log('pageX', event.pageX, 'pageY', event.pageY);
  // 웹 문서 전체 기준 클릭한 위치를 알 수 있음
});

body.addEventListener('click', function (event) {
  console.log('pageX', event.pageX, 'pageY', event.pageY);
  let div = document.createElement('div');
  div.classList.add('circle');
  div.style.left = event.pageX + 'px';
  div.style.top = event.pageY + 'px';
  body.appendChild(div);
});

/*
rectangle.addEventListener('mousedown', function (event) {
  console.log('mouseDown');
}); //누를때

rectangle.addEventListener('mouseup', function (event) {
  console.log('mouseUp');
}); //땔 때

rectangle.addEventListener('mouseenter', function (event) {
  console.log('mouseEnter');
}); //마우스 진입

rectangle.addEventListener('mouseleave', function (event) {
  console.log('mouseLeave');
}); //마우스 진입 후 탈출

rectangle.addEventListener('mousemove', function (event) {
  console.log('mouseMove');
}); //마우스 움직임 포착
*/
