const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
})

scrollReveal.reveal(
    `.appie-single-service,
    .nav .tab-content, .appie-service-area .media,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social, .appie-service-area .socials a img
    `,

    { interval: 150 })


    
/*    CONTAGEM REGRESSIVA   


const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizar = (tempo) => {
    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));

    segundos.textContent = formatarDigito(qtdSegundos);
    minutos.textContent = formatarDigito(qtdMinutos);
    horas.textContent = formatarDigito(qtdHoras);
    dias.textContent = formatarDigito(qtdDias)
}

const contagemRegressiva =  (tempo) => {
    const pararContagem = () => clearInterval(id);

    const contar = () => {
        if(tempo === 0){
            pararContagem()
        }
        atualizar (tempo);
        tempo--;
    }
    const id = setInterval(contar,1000)
    
}

const tempoRestante = () => {
    const dataEvento  = new Date ('2023-04-4 10:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegressiva(tempoRestante())
*/

/*SWIPEER*/

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      
    }
    ,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

let swiperCard = new Swiper(".swiperCard", {
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "cards",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
    ,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});





const form = document.querySelector('#form');
const username = document.querySelector('#nome');
const email = document.querySelector('#email');
const phone = document.querySelector('#telefone');
const text = document.querySelector('#mensagem');
console.log(username)

form.addEventListener('submit', function(event) {
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const textValue = text.value.trim();

    /*NOME*/
    if (nameValue === ''){
        //mostrar o erro
        // adionar a classe error
        setErrorValidation(username, 'Preencha esse campo');
        event.preventDefault(); // impede o envio do formulário
    }

    /*EMAIL*/
    if (emailValue === ''){
        event.preventDefault(); // impede o envio do formulário
    }else if(!validateEmail(emailValue)) {
        event.preventDefault(); // impede o envio do formulário
    }

    /*PHONE*/
    if (phoneValue === ''){
        event.preventDefault(); // impede o envio do formulário
    }else if(phoneValue.length > 11){
        event.preventDefault(); // impede o envio do formulário
    }else if(phoneValue.length < 9){
        event.preventDefault(); // impede o envio do formulário
    }

    /*TEXT*/
    if (textValue === ''){
        event.preventDefault(); // impede o envio do formulário
    }
});



function checkInputs() {
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const textValue = text.value.trim();

    /*NOME*/
    if (nameValue === ''){
        //mostrar o erro
        // adionar a classe error
        setErrorValidation(username, 'Preencha esse campo')
    }else{
        //adicionar o classe success
        setSuccessValidation(username)
    }

    /*EMAIL*/
    if (emailValue === ''){
        //mostrar o erro
        // adionar a classe error
        setErrorValidation(email, 'Preencha esse campo')
    }else if(!validateEmail(emailValue)) {
        setErrorValidation(email, 'Email Invalido')
    }else{
        //adicionar o classe success
        setSuccessValidation(email)
    }

    /*PHONE*/
    if (phoneValue === ''){
        //mostrar o erro
        // adionar a classe error
        setErrorValidation(phone, 'Preencha esse campo')
    }else if(phoneValue.length > 11){
        setErrorValidation(phone, 'O número deve conter menos de 11 caracteres')
    }else if(phoneValue.length < 9){
        setErrorValidation(phone, 'O número deve conter o DDD e pelo menos 8 caracteres')
    }else{
        //adicionar o classe success
        setSuccessValidation(phone)
    }

    /*TEXT*/
    if (textValue === ''){
        //mostrar o erro
        // adionar a classe error
        setErrorValidation(text, 'Preencha esse campo')
    }else{
        //adicionar o classe success
        setSuccessValidation(text)
    }
}


function setErrorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    formControl.className = 'form-control-mine error'
    small.innerText = message
}

function setSuccessValidation(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control-mine success'
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}