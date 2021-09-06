/* var numeroSorteado = 10;
var tabuada = 7;

for(var i = 0; i <= 10; i++) {
    console.log("Valor de " + tabuada + " x " + i + " = " + tabuada * i);
}

for (var i = 0; i < 100; i++){
    if(numeroSorteado === i){
        console.log("Seu número foi encontrado!");
        break;//não usar com frequência
    }
} */

var numeroSorteado = 10;
var possivelValor = 0;
var achou = false; //flag

while (!achou) {
    possivelValor += 1;
    if (numeroSorteado === possivelValor){
        achou = true;
    } else {
        console.log("Possível valor não corresponde ao número sorteado " + possivelValor);
    }
}