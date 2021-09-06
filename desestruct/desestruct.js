const pessoa = {
    nome: "Gessy",
    sobrenome: "Sousa",
    idade: "32",
    profissao: "Engenheira",
};

//console.log(pessoa);

//dividir o objeto em variáveis menores jeito tradicional
/* let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let profissao = pessoa.profissao; */

//com destruct 
let { nome, sobrenome, idade, profissao } = pessoa;

console.log (nome, sobrenome, idade, profissao);
console.log (nome, sobrenome);


