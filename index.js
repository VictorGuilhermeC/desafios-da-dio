
//Esse é o nome do nosso herói
const nomeDoHeroi = "ChrisJericho";
// Essa variável representa o número de pontos de experiência do herói
let xp = -1;
// Esse é o nível do herói, baseado em pontos de experiência
let nivel = "";

// A atribuição do valor (string) à variável nivel se submete às seguintes declaraçÕes condicionais
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp < 2000) {
    nivel = "Bronze";
} else if (xp < 5000) {
    nivel = "Prata";
} else if (xp < 7000) {
    nivel = "Ouro";
} else if (xp < 8000) {
    nivel = "Platina";
} else if (xp < 9000) {
    nivel = "Ascendente";
} else if (xp < 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
};
//A declaração console.log imprime a frase a seguir, incluindo o nome do herói e seu nível
console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel);

/*Solução alternativa:

switch (true) {
    case xp < 1000:
        nivel = "Ferro";
        break;
    case xp < 2000:
        nivel = "Bronze";
        break;
    case xp < 5000:
        nivel = "Prata";
        break;
    case xp < 7000:
        nivel = "Ouro";
        break;
    case xp < 8000:
        nivel = "Platina";
        break;
    case xp < 9000:
        nivel = "Ascendente";
        break;
    case xp < 10000:
        nivel = "Imortal";
        break;
    default:
        nivel = "Radiante"
}
*/
