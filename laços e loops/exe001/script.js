// VALIDAÇÃO SIMPLES DE INPUT
function validate(){ 
    let nameUser = document.querySelector('#nameUser').value;
    let senhaUser = document.querySelector('#senhaUser').value;

    if (nameUser.length == 0 || senhaUser.length == 0){ 
        // Verificando se os dados estão vazios
        alert('[ERRO] Preencha os dados')
    } else if (senhaUser == nameUser){
        alert('[Erro] Por favor digite uma senha diferente do Usuário!');

    }else {
        alert('Login feito com sucesso');
    }



} 


