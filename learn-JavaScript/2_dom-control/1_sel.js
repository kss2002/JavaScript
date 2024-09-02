// 1. get 메서드(함수)
let title = document.getElementById('title');
console.log(title);
title.textContent = '짬뽕이 형';

let item = document.getElementsByClassName('item');
console.log(item);
console.log(item[0]);
console.log(item[1]);
console.log(item[2]);

let li = document.getElementsByTagName('li');
console.log(li);

// 2. HTML 요소 쿼리
let h2 = document.querySelector('#title');
console.log('h2: ', h2);

let items = document.querySelectorAll('.item');
console.log(items);

/*
h2.textContent = '<span>didididi</span>';
h2.innerHTML = '<span>dododo@@</span)';
*/

let input = document.querySelector('input');
input.setAttribute('placeholder', '입력해주세여');
//input.removeAttribute('placeholder'); //제거
//input

let helloitem = document.querySelector('.hello');
console.log('helloitem: ', helloitem);
helloitem.style.color = 'blue';
