console.log("Bem vindo ao JS");
console.log("Ricardo");//string
console.log("41");// numerom inteiro
console.log("1.84");//número decimal 
console.log("Louback",41,1.85);//Misto

/* comentarios */

{
    let mensagem = "Ola mundo!";
    console.log(mensagem);// funciona, exibe "Ola mundo!"
}
/*comsole.log(mensagem); // erro!  FORA DAS CHABVETAS VAI DAR ERRO  esta fora do escopo */
 

/* NAO ACEITA DECLARAÇÃO DE VARIAVEL COM O MESMO NOME */
let nome = " Ricardo";
/*let nome = "Maria";*/
console.log(nome);
let idade= 41;
idade  = 30;// ok reatribuição permitida 
console.log(idade);// 


/* declarar uma variavel sem valor definido */

let CorFavorita;

console.log(CorFavorita);// undefiend 
CorFavorita = "Azul";

console.log(CorFavorita);


/* DECLARAÇÃO DE VARIAVEL DENTRO DO BLOCO COMO LET QUE NAO SEJA DECLARADA COMO VAR VAI DER ERRO */

if(true) {
    var x = 10;// corre so o var pois e uma variavel global 
    let y = 20;
    console.log(y); // so consigo chamar ela dentro do bloco 
}
console.log(x);
/*console.log(y); ERRO POPIS O Y E LOCAL  */


console.log("joão nasceu em 1984");
console.log("Em 2000 joão conhece Maria ");
console.log(" Maria teve um filho com joão em 2015");
console.log("O filho de joão chama-se Eduardo");

let nome2 = "joão";

console.log( nome2," nasceu em 1984");
console.log("Em 2000"+ nome2 + " conhece Maria ");
console.log("Maria teve um filho com", nome2 ,"em 2015");
console.log("O filho de ", nome2,"chama-se Eduardo");



const numero = 42;
//numero =100 ;// erro ! NÃO E POSSIVEL REATRIBUIR UMA CONSTANTE


const pessoa = {nome : "Ana ", idade: 30};
pessoa.idade = 31 ; // ok estamos a modificar uma propriedade, não a referencia 
console.log(pessoa);

const numeros = [1,2,3];
numeros.push(4);//ok estamos a alterar o conteudo do array 
console.log(numeros);//[1,2,3,4]

//const cor ; // Erro constante precisamos de ium valor inicial 

const cor = "Azul ";//ok

{
    const saudacao = "Ola, mundo !"
    console.log(saudacao); // Funcionario
}

let numero3 = 56  ;
let texto = "Ola mundo!";
let booleano = true;
console.log(typeof numero3);
console.log(typeof texto);
console.log(typeof booleano);


