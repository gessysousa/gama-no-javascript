let isValid = false;


//sem ternario
function verify (isValid){
    if(isValid){ //quando eu faço if com booleana, não precisa do == true ou == false, se eu quiser true é só botar isValid, se eu quiser false é só botar !isValid
        return true;
    }else{
        return false;
    }
}

console.log(verify(isValid));

//com ternario => quando a resposta do if forem coisas únicas, por exemplo verdadeiro ou falso
const result = isValid ? true : false; //const constante
console.log(verify(isValid));

let zero = 0;
const numeroResultado = zero > 0 ? 0 : -1;
console.log(numeroResultado);