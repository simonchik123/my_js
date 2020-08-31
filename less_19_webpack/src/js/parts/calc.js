export function calc(){
    let persons =   document.querySelectorAll('.counter-block-input')[0],
        restDays =  document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 0;

        const inputHandler = event => {
            if (!parseInt(restDays.value) || !parseInt(persons.value)){
                totalValue.innerHTML = 0;
            }else {
                personsSum = +event.target.value;
                total = (personsSum+daysSum)*450;
                totalValue.innerHTML = total;
            }
        };

        persons.addEventListener('input', inputHandler);
        restDays.addEventListener('input', inputHandler);


        place.addEventListener('change', function(){
            if (persons.value != '' || restDays.value != ''){
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            } else {
                totalValue.innerHTML = 0;
            }
        })
}