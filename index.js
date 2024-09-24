const prompt = require('prompt-sync');
const entrada = prompt();

const nomeCompleto = "Érica Celestino de Lara";
const anoNascimento = 2004; 
let anoAtual = 2024
let idade = 19; 

console.log("Olá eu sou " + nomeCompleto + " estamos no ano " + anoAtual  + " minha idade é " + idade + " e sou nascido no ano " + anoNascimento);

anoAtual = anoAtual + 1;
idade = idade + 1;
console.log("Olá eu sou " + nomeCompleto + " este ano vou estar fazendo curso " + anoAtual + " minha idade é " + idade + " e sou nascido no ano " + anoNascimento);

console.log(`oi eu sou ${nomeCompleto} meu ano de nacimento é ${anoNascimento} meu ano atual ${anoAtual} minha idade é ${idade}`);

const listaDeViagens = new Array(
  `Mexico`,
  `Canada`,
  `Estado unidos`,
  `Alemanha`,
  `Italia`,
);

console.log(listaDeViagens);

console.log(listaDeViagens[4]);
listaDeViagens.push("Coronel Vivida");
console.log(listaDeViagens);

listaDeViagens.splice(1,2);
console.log(listaDeViagens)

var nomeComprador = entrada("Qual e seu nome?");

var idadeComprador = entrada("Qual e a sua idade?");

if(idadeComprador < 18){
  
  console.log(`ola senhor(a) ${nomeComprador} por ter ${idadeComprador} anos a sua idade nao corresponde com a nossa politica de segurança `);
}
if(idadeComprador >= 18){
  console.log(`ola senhor(a) ${nomeComprador} qual destes paises voce gostaria de viajar?`);
}