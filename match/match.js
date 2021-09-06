//busca conteúdos específicos sobre uma massa de dados que vc não tem certeza se essa informação está lá ou como ela está estruturada
const textoNaoEstruturado = "Meu CPF é 012.345.678-90";


const regex = new RegExp("[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}");
console.log(textoNaoEstruturado.match(regex));