export function slider(){
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
}