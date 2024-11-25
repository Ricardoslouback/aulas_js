// aleatiorio ente 1 e 10 
/*let aleatorio = Math.floor(Math.random()*10) +1;
console.log(aleatorio);


let perimetro;
let raio = 2;


perimetro = Math.PI  * 2 * raio;
console.log(Math.round(perimetro))
*/


/*let numeros =[4,1,7,2,9];
let maior = Math.max( ...numeros); // colocandom os pontos junto a variavel que esta sendo chamada na biblioteca ele busca 
let menor = Math.min( ...numeros);

console.log(`O maior : ${maior} e o menor: ${menor}`)


let aleatiorio = Math.floor(Math.random()* (100 -50 +1))+50;
console.log(`Numero aleatorio entre 50 e 100 : ${aleatiorio}`);*/

//const numero = Number(prompt("Escrver um numero:"));

/*const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

/*passar o numero para o  = html 

texto.innerHTML="";
texto.innerHTML += `<p> Raiz quadrada :${numero **0.5}.<p>`;
texto.innerHTML +=`<p>${numero} é inteiro :${Number.isInteger(numero)}.<p>`;
texto.innerHTML+=`<p> Arredondamento para baixo :${Math.floor(numero)}.<p>`;
texto.innerHTML+=`<p> Arredondamento cima :${Math.ceil(numero)}.<p>`;
texto.innerHTML+=`<p> Com duas casas decimais  :${numero.toFixed(2)}.<p>`;

*/
//ver o tamnho do meu arry 
const frutas =["maçã","Bananas","Laranja"];
console.log(frutas.length);//3 devolve o tamanho do array
// adicionar um elemento aoi meu array 
const frutas2 =["maçã","Bananas","Laranja"];
frutas2.push("pera")
frutas2.unshift("Manga")// adiciona como primeiro elemento do meu array 
console.log(frutas2);
console.log(frutas2.length);

// remove o ultimo elemento do meu array 

frutas2.pop();
console.log(frutas2);

// remove o primeiro elemento do array 
frutas2.shift();
console.log(frutas2);


// procurar elementos 
console.log(frutas2.indexOf("Bananas"));// 1 por o elemento esta na posição 1 
console.log(frutas2.indexOf("uva"));//1

// verificar se o elemento esta presente 

console.log(frutas2.includes("Bananas"));//true
console.log(frutas2.includes("limão"));//False

// sorte ordena os elementos 
const numero = [10,5,8,1];
numero.sort();
console.log(numero)// retorna por ordem alfabetica 

// inverte a ordem dos elementos 

numero.reverse();
console.log(numero); 


const numeros2 =[1,2,3,4,5];

// soma usando reduce

const soma = numeros2.reduce((acumulador,numeros) => acumulador+numeros,0);
console.log(`A sua soma dos numeros e:${soma}`);



console.log("arrays")
const n = [12,23,34,56,67,78];
const arrayoriginal=[...n];
console.log(`Array original:${arrayoriginal}`);
const arrayInvertido=n.reverse();
console.log(`Array Invertido:${n}`);


console.log(" contar valores ");


const n3 = [2,3,4,5,12,89]; // Array de valores 
valores = n3.filter(num  => num > 10); // este metodo filtra os valores maior q xs

console.log(valores);// print 

console.log(" soma e media dos elementos");

const n7 = [12,23,45,67,78,9,32];
const soma3 = n7.reduce((i,numeros) => i+numeros,0);
console.log(`A sua soma dos numeros e:${soma3}`);
const media = soma / n7.length;
console.log(`A media:${media}`);

console.log(" Encontrar o maior e o menor valor ")


const array =[1,2,3,4,5,6,];
let menor = Math.min(...array);  // erncontrar o maior  valor 
let maior = Math.max(...array); // 

console.log(`Os menores são: ${min}`);
console.log(`Os maiores são: ${max}`);