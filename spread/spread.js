/* let lista = [1, 2, 5];
let listaIncluir =[3, 4];

for(let i = 0; i < listaIncluir.length; i++){
    for(let j = 0; j < lista.length; j++){
        if(lista[j] >= listaIncluir[i]){
            lista.splice(j, 0, listaIncluir[i]);//splice função insere novos valores em posições estratégicas (posição atual, 0(remover nada), o que eu quero inclluir)
            j++;
        }
    }
}
//console.log(lista);

const listResult = [1, 2, ...listaIncluir ,5]; //spread operator 

console.log(listResult); */

let arr = ['a', 'b', 'c'];

let arr2 = [...arr];
arr2.push("d"); //push adiciona valores

console.log(`Arr = ${arr}`);
console.log(`Arr2 = ${arr2}`);
