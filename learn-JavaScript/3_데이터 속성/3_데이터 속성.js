let h2 = document.querySelector('h2');
console.log(h2.dataset.test);

let img = document.querySelector('img');

let lilist = document.querySelectorAll('li');
let selcect = document.querySelector('selcect-item');

console.log(lilist);
lilist[0].addEventListener('click', selcectItem);

function selcectItem() {
  Selection.textcontent = event.target.textcontent;
  alert('클릭!');
  img.setAttribute('src', event.target.dataset.img);
}
