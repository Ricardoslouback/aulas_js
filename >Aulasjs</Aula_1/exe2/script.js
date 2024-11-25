




let nome = prompt("Qual seu nome: "); // pedir o nome ao utilizador 


// verifcar se o utilizador escreveu algo 

if (nome){
    let desejaMensagem= confirm (`Ola  ,${nome}! Gostaria de ver a mensagem de boas vindas `);
if (desejaMensagem){
    alert(`Bem Vindo,${nome} !`);
}else{
    alert(`Mensagem de Boas Vindas Cancelada`);
}
}else{

    alert(`Não inseriu nem um nome `);

}


// criar uma interaçaõ na minha pagina em html com um script.js 
//e verificar se  o utilizador inseriu algo e se unseriu mandar uma mensagem 