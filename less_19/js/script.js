window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let infoHeader = document.querySelector('.info-header'),
        infoHeaderTab = document.querySelectorAll('.info-header-tab'),
        infoTabContent = document.querySelectorAll('.info-tabcontent');

    function hideinfoTabContent(a){
        for (let i=a;i<infoTabContent.length;i++){
            infoTabContent[i].classList.remove('show');
            infoTabContent[i].classList.add('hide');
        }
    }

    hideinfoTabContent(1);

    function showinfoTabContent(b){
        if (infoTabContent[b].classList.contains('hide')){
            infoTabContent[b].classList.add('show');
            infoTabContent[b].classList.remove('hide');
        }
    }

    infoHeader.addEventListener('click', function(event){
        let target=event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i=0;i<infoHeaderTab.length;i++){
                if (target == infoHeaderTab[i]){
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
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/1000/3600)%24),
            days = Math.floor(t/1000/3600/24);
        
        return {
            'total': t,
            'days':('0'+days).slice(-2),
            'hours':('0'+hours).slice(-2),
            'minutes':('0'+minutes).slice(-2),
            'seconds':('0'+seconds).slice(-2)
        };
    }

    function setClock(id,endTime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock,1000);

        function updateClock(){
            let t = getTimeRemaining(endTime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;
            days.textContent = t.days;
            if (t.total <=0){
                clearInterval(timeInterval);
            }

        }
    }

    setClock('timer', deadLine);
});