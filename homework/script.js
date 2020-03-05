'use strict';

let money = prompt("Ваш бюджет на месяц ?",""),
    time = prompt(" Введите дату в формате YYYY-MM-DD","");



let q1  = prompt("Введите обязательную статью 1 расходов в этом месяце","");
let q2  = prompt("Во сколько обойдется?","");
let q3  = prompt("Введите обязательную статью 2 расходов в этом месяце","");
let q4  = prompt("Во сколько обойдется?","");

console.log(q1);

let appData = {
    money : money,
    time : time,
    expenses : {
        [q1] : q2,
        [q3] : q4
    },
    optionalExpenses : {},
    income :[],
    savings: false
};


for (var key in appData.expenses) {
    // этот код будет вызван для каждого свойства объекта
    // ..и выведет имя свойства и его значение
  
    console.log( "Ключ: " + key + " значение: " + appData.expenses[key] );
}

console.log(appData.expenses.еда);

alert ("Бюджет на один день - "+ money/30);