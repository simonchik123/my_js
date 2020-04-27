let box = document.getElementById('title'),
    li = document.getElementsByTagName('li'),
    column = document.getElementsByClassName('column'),
    adv = document.querySelectorAll('.adv'),
    menu = document.querySelector('.menu'),
    promptDiv  = document.getElementById('prompt');


console.log(menu);


menu.insertBefore(li[2],li[1]);   //  восстановили порядок меню

let newLi = document.createElement('li');
newLi.classList.add('menu-item');
newLi.innerText = "Пятый пункт";
menu.appendChild(newLi);  // добавили 5й пункт

document.body.style.backgroundImage = 'url(img/apple_true.jpg)'; // заменили картинку
box.innerText="Мы продаем только подлинную технику Apple"; // отредактировали заголовок


column[1].removeChild(adv[0]);   // удалил рекламу

window.onload = function(){
    let q = prompt(' Ваше отношение к технике Apple ?');
    promptDiv.innerText = q;
};


//setTimeout(test(),30000);

/* document.addEventListener('DOMContentLoaded', function() {
    let q = prompt(' Ваше отношение к технике Apple ?');
    promptDiv.innerText = q;
 }, false); */