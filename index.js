const main = document.querySelector('.search');
const btn = document.querySelector('button')
const input = document.querySelector('input')

//Event listener on toggling
btn.addEventListener('click', () => {
    main.classList.toggle('active')
    input.focus();
})


$(window).scroll(function(){
    if ($ (window).scrollTop()){
        $('nav').addClass('sticky')
    } else {
        $('nav').removeClass('sticky')
    }
    
})