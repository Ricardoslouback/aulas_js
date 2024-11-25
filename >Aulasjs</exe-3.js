const nome = "Ricardo";
const sobrenome = "Louback";
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;

let indiceMassaCorporal; // IMC
let anoNasc;

// Cálculo do IMC
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);

// Cálculo do ano de nascimento
anoNasc = 2024 - idade;

// Exibindo as informações com template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KG`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNasc}`);
