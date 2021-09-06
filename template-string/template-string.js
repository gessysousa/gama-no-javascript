let meuNome = "Gessy"; //let: declaração de variável ao invés de var, ocupa menos espaço na memória
let meuSobrenome = "Sousa";
let minhaProfissao = "Engenheira eletricista";

//sem template string
console.log(
    "Olá, eu sou " + meuNome +
    " " + meuSobrenome + 
    " e minha profissão é: " +
    minhaProfissao
);

//com template string
console.log(`Olá, eu sou ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProfissao}`); //entre crases e variáveis entre ${}

console.log(`O resultado da soma de 1 + 1 = ${1 + 1}`);

console.log(`O objeto json ${{chave: "valor"}}`);