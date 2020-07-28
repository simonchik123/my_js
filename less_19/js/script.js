window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let infoHeader = document.querySelector('.info-header'),
        infoHeaderTab = document.querySelectorAll('.info-header-tab'),
        infoTabContent = document.querySelectorAll('.info-tabcontent');

    function hideinfoTabContent(a) {
        for (let i = a; i < infoTabContent.length; i++) {
            infoTabContent[i].classList.remove('show');
            infoTabContent[i].classList.add('hide');
        }
    }

    hideinfoTabContent(1);

    function showinfoTabContent(b) {
        if (infoTabContent[b].classList.contains('hide')) {
            infoTabContent[b].classList.add('show');
            infoTabContent[b].classList.remove('hide');
        }
    }

    infoHeader.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < infoHeaderTab.length; i++) {
                if (target == infoHeaderTab[i]) {
                    hideinfoTabContent(0);
                    showinfoTabContent(i);
                    break;
                }
            }
        }
    });



    // Timer

    let deadLine = '2020-05-29';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 3600) % 24),
            days = Math.floor(t / 1000 / 3600 / 24);

        return {
            'total': t,
            'days': ('0' + days).slice(-2),
            'hours': ('0' + hours).slice(-2),
            'minutes': ('0' + minutes).slice(-2),
            'seconds': ('0' + seconds).slice(-2)
        };
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            days.textContent = t.days;
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }
    }

    setClock('timer', deadLine);

    // modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        descriptionButton = document.querySelectorAll('.description-btn'),
        close = document.querySelector('.popup-close');

    //console.log(descriptionButton);

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.add('more-splash');
        document.body.style.overflow = '';
    });


    infoTabContent.forEach(function (item) {
        item.addEventListener('click', function (event) {
            let target = event.target;
            if (target && target.classList.contains('description-btn')) {
                for (let i = 0; i < descriptionButton.length; i++) {
                    if (target == descriptionButton[i]) {
                        overlay.style.display = 'block';
                        more.classList.add('more-splash');
                        document.body.style.overflow = 'hidden';
                        break;
                    }
                }
            }
        });
    });
    // Form


    let message = {
        loading: 'Загрузка...',
        success: ' Спасибо! Наш менеджер скоро с Вами свяжется!',
        failure: ' Что-то пошло не так !'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function sendForm(form) {

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form);

            function postData() {

                return new Promise(function (resolve, reject) {

                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    //request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    request.addEventListener('readystatechange', function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });

                    let obj = {};
                    formData.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    request.send(json);
                });
            } //end postData

            function clearInput(){
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData()
                .then(()=>statusMessage.innerHTML = message.loading)
                .then(()=>statusMessage.innerHTML = message.success)
                .catch(()=>statusMessage.innerHTML = message.failure)
                .then(clearInput);          

            
        });
    }

    sendForm(form);

    // slider

    let sliderIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
    
    showSlides(sliderIndex);


    function showSlides(n){

        if (n >= slides.length){
            sliderIndex = 0;
        }else if (n < 0){
            sliderIndex = slides.length -1;
        }
        
        slides.forEach(element => {
            element.style.display = 'none';  
        });
        dots.forEach(element => {
            element.classList.remove('dot-active');
        });
        slides[sliderIndex].style.display = 'block';
        dots[sliderIndex].classList.add('dot-active');
    }
    
    function plusSlide(n){
        showSlides(sliderIndex +=n);
    }

    function currentSlide(n){
        showSlides(sliderIndex = n);
    }

    prev.addEventListener('click', function(){
        plusSlide(-1);
    });
    next.addEventListener('click', function(){
        plusSlide(1);
    });

    dotsWrap.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('dot')) {
            for (let i = 0; i < dots.length; i++) {
                if (target == dots[i]) {
                    currentSlide(i);
                    
                }
            }
        }
    });
    
});