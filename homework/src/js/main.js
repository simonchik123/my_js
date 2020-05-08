let bStart = document.getElementById('start'),
    budget = document.querySelector('.budget-value'),
    daybudget = document.querySelector('.daybudget-value'),
    level = document.querySelector('.level-value'),
    expenses = document.querySelector('.expenses-value'),
    optionalexpenses = document.querySelector('.optionalexpenses-value'),
    income = document.querySelector('.income-value'),
    monthsavings = document.querySelector('.monthsavings-value'),
    yearsavings = document.querySelector('.yearsavings-value'),
    year = document.querySelector('.year .year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

let inputsExpenses = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.querySelectorAll('.expenses-item-btn')[0],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    optionalExpensesBtn = document.querySelector('.optionalexpenses-btn'),
    countBudgetBtn = document.querySelector('.count-budget-btn'),    
    chooseIncome = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent');
console.log(level);

let money,time;

bStart.addEventListener('click', function(){    
    appData.time = time = prompt(" Введите дату в формате YYYY-MM-DD", "");
    appData.money = money = +prompt("Ваш бюджет на месяц ?", "");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц ?", "");
    }
    /* appData.money = money;
    appData.time = time; */

    // задаем биджет и время
    budget.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth()+1;
    day.value = new Date(Date.parse(time)).getDate();    

});

expensesBtn.addEventListener('click', function(){        
    appData.addExpenses();
});

optionalExpensesBtn.addEventListener('click',function(){
    appData.chooseOptExpenses();
});

countBudgetBtn.addEventListener('click',function(){
    if (appData.money != undefined){
        appData.detectDayBudget();
        appData.detectLevel();
    } else {
        level.textContent = ' Произошла ошибка !';
    }
});

chooseIncome.addEventListener('input', function(){
    appData.chooseIncome();
});

savings.addEventListener('click', function(){
    appData.savings = appData.savings ? false : true;
});

sum.addEventListener('input', function(){
    appData.sberegeniya();
});

percent.addEventListener('input', function(){
    appData.sberegeniya();
});

let appData = {
    money,
    time: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    addExpenses: function () {

        let sum = 0;
        let i = 0;
        
        do {
            let q1 = inputsExpenses[i].value;
            let q2 = inputsExpenses[++i].value;

            if (((typeof (q1)) === 'string') && (typeof (q1)) != null && ((typeof (q2)) != null) &&
                q1 != '' && q2 != '' && q1.length < 50) {
                appData.expenses[q1] = q2;
                sum += +q2;
                ++i;
            } else {
                break;
            }            
        } while (i < inputsExpenses.length);

        expenses.textContent = sum;        
    },
    detectLevel: function () {
        if (appData.moneyForDay < 100) {
            level.textContent = " Минимальный уровень достатка";
        } else if ((100 < appData.moneyForDay) && (appData.moneyForDay< 1000)) {
            level.textContent = " Средний уровень достатка";
        } else if (appData.moneyForDay > 1000) {
            level.textContent = " Высокий уровень достатка";
        } else {
            level.textContent = " Произошла ошибка";
        }
    },
    sberegeniya: function () {
        if (appData.savings == true) {
            let save = +sum.value,
                percentv = +percent.value;

            appData.monthIncame = +(save / 100 / 12 * percentv).toFixed(2);
            appData.yearIncame = +(save / 100 * percentv).toFixed(2);
            monthsavings.textContent = appData.monthIncame;
            yearsavings.textContent = appData.yearIncame;            
        }
    },

    chooseOptExpenses: function () {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let q = optionalExpensesItem[i].value;


            if ((typeof (q) === 'string') &&
                (typeof (q) != null) &&
                q != '' &&
                q.length < 50) {
                appData.optionalExpenses[i] = q;
                optionalexpenses.textContent += appData.optionalExpenses[i]+ ' ';
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyForDay = (appData.money / 30).toFixed(2);
        daybudget.textContent = appData.moneyForDay;
    },


    chooseIncome: function () {
        let items = chooseIncome.value;
        if ((typeof (items) === 'string') && (typeof (items) != null) &&
            items != '') {
            appData.income = items.split(', ');
            appData.income.sort();
            income.textContent = appData.income;
        }
        /* let str = 'Способы доп. заработка: \n';
        appData.income.forEach(function(item,i,arr){
            str += (i+1) + ' ' + item + ' \n';
        });
        alert(str); */
    }


};