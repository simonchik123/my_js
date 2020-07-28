'use strict';


/* function showThis(a,b){
    console.log(this);
    function sum(){
        console.log(this);
        console.log(this === window);
        return a + b;
    }
    console.log(sum());
}

showThis(5,6);

var numbers = {  
    array: [3, 5, 10],
    getNumbers: function() {
      return this.array;    
    }
  };

var boundGetNumbers = numbers.getNumbers();  
console.log(boundGetNumbers);

let age = document.getElementById('age');
function showuser(surname, name){
  alert("Пользователь " + surname + " " + name + ", его возраст "+ age.value);
}
showuser('Байков', 'Максим'); */

let inputGrn = document.getElementById('grn'),
  inputUsd = document.getElementById('usd');

inputGrn.addEventListener('input', () => {

  function getData() {

    return new Promise(function (resolve, reject) {

      let request = new XMLHttpRequest();



      request.open('GET', 'current.json');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      request.send();


      request.addEventListener('load', function () {
        if (request.readyState === 4 && request.status === 200) {
          resolve(request);
        } else if (request.readyState === 4 && request.status !== 200){
          reject();
        }
      });
    });
  }

  getData()
          .then((request)=>{
            let data = JSON.parse(request.response);
            inputUsd.value = inputGrn.value / data.usd;
          })
          .catch(()=>inputUsd.value = " Что то пошло не так!");

  
          
});