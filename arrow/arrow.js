function soma(x , y){
    return x + y;
}
console.log(soma(3, 7));

const multiplicacao = function(x , y){ //constante armazenando uma função, evitando que a função seja sobrescrita
    return x * y;
};
console.log(multiplicacao(5,5));

//arrow

const dividir = (x , y) => {
    return x / y;
};
console.log(dividir(10 , 2));

const objeto = () => ({nome: "Gessy" , sobrenome: "Sousa" });
 