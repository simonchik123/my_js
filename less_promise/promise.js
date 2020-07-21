function shoot(arrow){
    console.log(' Вы стреляете...');

    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject(console.error('вы промахнулись'));
        }, 3000);
    });

    return promise;
}
let drink = 1;

function win(){
    console.log(' Вы победили');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer(){
    console.log(' вам купили пиво');
}

function giveMoney(){
    console.log(' Вам дали деньги');
}

function loose(){
    console.log(' Вы проиграли');
}

shoot({})
        .then (mark => console.log(' Вы попали в цель!'))
        .then (win)
        .catch(loose);


/*
function(mark){
    console.log(' Вы поппали в цель');
    win();
},
function(miss){
    console.error(miss);
    loose();
}
*/