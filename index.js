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

const idadeComprador = 28;

if(idadeComprador < 18){
  console.log("infelizmente voce é menor de idade nao podemos vender nossas passagens ")
}
if(idadeComprador >= 18){
  console.log("voce é maior de idade podemos vender nossas passagens")
}