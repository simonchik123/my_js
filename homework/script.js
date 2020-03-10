'use strict';

let money = +prompt("Ваш бюджет на месяц ?",""),
    time = prompt(" Введите дату в формате YYYY-MM-DD","");



let appData = {
    money : money,
    time : time,
    expenses : {},
    optionalExpenses : {},
    income :[],
    savings: false
};

/* for (let i = 1;i < 3; i++){
    let q1  = prompt("Введите обязательную статью расходов в этом месяце","");
    let q2  = +prompt("Во сколько обойдется?","");

    if ((typeof(q1)==='string') && (typeof(q1)!= null) && (typeof(q2)!= null)
        && q1 != '' && q2 !='' && q1.length < 50) {
    appData.expenses[q1] = q2;
    } else {
        i--;
    }
} */

let i=1;
do {
    let q1  = prompt("Введите обязательную статью расходов в этом месяце","");
    let q2  = +prompt("Во сколько обойдется?","");

    if ((typeof(q1)==='string') && (typeof(q1)!= null) && (typeof(q2)!= null)
        && q1 != '' && q2 !='' && q1.length < 50) {
    appData.expenses[q1] = q2;    
    } else {
        --i;
    }
    i++;
} while (i < 3);

for (var key in appData.expenses) {
    // этот код будет вызван для каждого свойства объекта
    // ..и выведет имя свойства и его значение
  
    console.log( "Ключ: " + key + " значение: " + appData.expenses[key] );
}

appData.moneyForDay = appData.money / 30;


alert ("Бюджет на один день - "+ appData.moneyForDay);

if(appData.moneyForDay <100){
    console.log(" Минимальный уровень достатка");
} else if (100 < appData.moneyForDay < 2000){
    console.log(" Средний уровень достатка");
} else if (appData.moneyForDay > 2000){
    console.log(" Высокий уровень достатка");
} else { console.log(" Произошла ошибка");
}