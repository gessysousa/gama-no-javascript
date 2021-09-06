var nome = "Helena";

/* if (nome === "Helena") {
    console.log("Legal! Seu nome é este mesmo.");
} else if (nome === "Gessy"){
    console.log("Tudo bem! Você também serve.");
} else{
    console.log("Que pena! Seu nome não é Gessy Helena!");
} */

switch (nome) {
    case "Gessy":
        console.log("Legal! Seu nome é este mesmo.");
        break;
    case "Helena":
        console.log("Tudo bem! Você também serve.");
        break;
    default:
        console.log("Que pena! Você não é quem eu estou procurando.");
        break;
}