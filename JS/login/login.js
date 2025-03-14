function validar(){
    let login = document.getElementById('usuário').value;
    //aqui a variavel login recebe o valor do campo com id login
    //o value irá pegar exatemente o que o usuário digitar no campo, caso deixe sem, irá selecionar o input em si
    let senha = document.getElementById('senha').value;
    //a mesma coisa com a variável login

    if(login == "" || senha == ""){
        alert("Preencha todos os campos!");
        return false;
    }
    //um codigo simples para verificar se todos os campos foram preenchidos

    if(login == "admin" && senha == "admin"){
        alert("Bem vindo ADM!");
        location.href = "/HTML/menu/menu.html";//somente isso não é funcional, é necessário uma validação do formulário para proseeguir
    }else{
        alert("Login ou senha incorretos!");
        return false;
    }
    //código para que seja liberado o login do adm, e caso senha ou usuário incorreto, notifica isso ao usuário

}