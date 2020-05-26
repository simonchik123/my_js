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

    let deadLine = '2020-07-04';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            minutes = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/1000/3600)%24),
            days = Math.floor(t/1000/3600/24);
        
        return {
            'total': t,
            'days':days,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        };
    }

    function setClock(id,endTime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            days = timer.querySelector('.days');

        function updateClock(){
            let t = getTimeRemaining(endTime);
        }    
    }

    setClock('timer', deadLine);
});