'use strict';

//console.log(second);

var first = 1;
let second = 2;
const pi = 3.14;

console.log(second);
console.log('string'*4);

let persone = {
    name : "John",
    age : 16,
    married : false
};

/* 
console.log(persone["name"]);

let answer = prompt("Ты здесь?","Да");
console.log(typeof(answer)); */


let incr = 10,
    decr = 10;

console.log(++incr);
console.log(--decr);

let a,b;
a = [1, 2, 3]; b = [1, 2, 3];

if ("ёжик" > "яблоко"){
    console.log('wow');
} else {
    console.log('no');
}

console.log( 0 || "" || 2 || undefined || true || false );

function get_arr(arr=[]){
    arr.push(arr.length);
    if(arr.length < 3) get_arr(arr);
    return arr;
  }

  console.log(get_arr());