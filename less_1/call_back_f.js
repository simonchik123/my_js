'use_strict';

function first(){
    setTimeout( function(){
        console.log(1);
    },500);
}

function second(){
    console.log(2);
}

first();
second();

function foo(lang,callback){
    setTimeout(function(){
        console.log("Я учу "+ lang);
    },500);
    callback();
}

foo("Javascript", function(){
    console.log("Я прошел этот урок!");
});