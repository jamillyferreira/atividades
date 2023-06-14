const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInpunt = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTextarea = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

//Verifica se o nome está vazio
    if(nameInput.value === ''){
        alert('por favor, preencha o seu nome');
        return;
    }

// verifica se o email esta preenchido && if é valido
    if(emailInput.value === '' || !isEmailValid(emailInput.value)){
        alert('Por favor, preencha corretamente o seu email');
        return;
    }

// verifica se a senha está preenchida
    if(!validatePassword(passwordInpunt.value, 8)){
        alert('A senha precisa ter no mínimo 8 Digitos');
        return;
    }

// verifica se a situação foi selecionada
    if(jobSelect.value === ''){
        alert('Por favor, selecione a sua situação');
        return;
    }

// verifica se a mensagem está preenchida
    if(messageTextarea.value === ''){
        alert('Por favor, escreva uma mensagem');
        return;
    }

// Se todos os campos estiverem preenchido, eveie o form
    form.submit()
})


// função que valida e-mail
function isEmailValid(email){
    //cria uma regex para validar email
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
// testa a validação
        if(emailRegex.test(email)){
            return true;
        } else {
            return false;
        }
}

// função que valida a senha
function validatePassword(password, minDigits){
    if(password.length >= minDigits){
        //senha válida
        return true; 
    } else {
        //senha inválida
        return false;
    }
}