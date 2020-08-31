export function modal(){
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        descriptionButton = document.querySelectorAll('.description-btn'),
        infoTabContent = document.querySelectorAll('.info-tabcontent'),
        close = document.querySelector('.popup-close');


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
}