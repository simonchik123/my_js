    let box = document.getElementById('title'),
    li = document.getElementsByTagName('li'),
    column = document.getElementsByClassName('column'),
    menuItem = document.querySelectorAll('.menu-item'),
    columnS = document.querySelector('.column');

    
console.log(box);
console.log(li);
console.log(li[0]);
console.log(column[1]);
console.log(menuItem);
console.log(columnS);

box.style.backgroundColor = 'blue';


    menuItem.forEach(function (item, i, items) {
        item.style.backgroundColor = 'brown';
    });

let div = document.createElement('div'),
    text = document.createTextNode('Всем привет !');

    div.classList.add('black');
console.log(text);