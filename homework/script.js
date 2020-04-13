'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц ?", "");
    time = prompt(" Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц ?", "");
    }
}

start();



let appData = {
    money: money,
    time: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    addExpenses: function () {
        let i = 1;
        do {
            let q1 = prompt("Введите обязательную статью расходов в этом месяце", "");
            let q2 = +prompt("Во сколько обойдется?", "");

            if ((typeof (q1) === 'string') && (typeof (q1) != null) && (typeof (q2) != null) &&
                q1 != '' && q2 != '' && q1.length < 50) {
                appData.expenses[q1] = q2;
            } else {
                --i;
            }
            i++;
        } while (i < 3);
    },
    detectLevel: function () {
        if (appData.moneyForDay < 100) {
            console.log(" Минимальный уровень достатка");
        } else if (100 < appData.moneyForDay < 2000) {
            console.log(" Средний уровень достатка");
        } else if (appData.moneyForDay > 2000) {
            console.log(" Высокий уровень достатка");
        } else {
            console.log(" Произошла ошибка");
        }
    },
    sberegeniya: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений ?"),
                percent = +prompt("Каков процент по кредиту ?");

            appData.monthIncame = +(save / 100 / 12 * percent).toFixed(2);
            alert("Доход в месяц с вашего депозита " + appData.monthIncame);
        }
    },

    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let q = prompt("Введите статью необязательных расходов", "");


            if ((typeof (q) === 'string') &&
                (typeof (q) != null) &&
                q != '' &&
                q.length < 50) {
                appData.optionalExpenses[i] = q;
            } else {
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyForDay = +(appData.money / 30).toFixed(2);
        alert("Бюджет на один день - " + appData.moneyForDay);
    },


    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (через запятую)", "");
        if ((typeof (items) === 'string') && (typeof (items) != null) &&
            items != '') {
            appData.income = items.split(', ');
            appData.income.sort();
        }
        let str = 'Способы доп. заработка: \n';
        appData.income.forEach(function(item,i,arr){
            str += (i+1) + ' ' + item + ' \n';
        });
        alert(str);
    }


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





for (var key in appData) {
    // этот код будет вызван для каждого свойства объекта
    // ..и выведет имя свойства и его значение

    console.log("Наша программа включает в себя данные: " + key + " значение: " + appData[key]);
}