let pswrd = document.getElementById('pswrd');
let toggle = document.getElementById('toggleBtn');

let lowercase = document.getElementById('lower');
let uppercase = document.getElementById('upper');
let digit = document.getElementById('number');
let specialChar = document.getElementById('special');
let minLength = document.getElementById('minimal');


function checkPassword(data){
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    //validaçao do lowercase
    if(lower.test(data)){
        lowercase.classList.add('valid');
    }else{
        lowercase.classList.remove('valid');
    }
    //validaçao do uppercase
    if(upper.test(data)){
        uppercase.classList.add('valid');
    }else{
        uppercase.classList.remove('valid');
    }
    //validaçao de digitos
    if(number.test(data)){
        digit.classList.add('valid');
    }else{
        digit.classList.remove('valid');
    }
    //validaçao de caracteres especiais
    if(special.test(data)){
        specialChar.classList.add('valid');
    }else{
        specialChar.classList.remove('valid');
    }
    //minimo 8 caracteres
    if(length.test(data)){
        minLength.classList.add('valid');
    }else{
        minLength.classList.remove('valid');
    }
}

//show hide password
toggleBtn.onclick = function(){
    if (pswrd.type === 'password'){
        pswrd.setAttribute('type','text');
        toggleBtn.classList.add('hide');
    }else{
        pswrd.setAttribute('type', 'password');
        toggleBtn.classList.remove('hide') ;
    }
}