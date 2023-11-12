
/*Chama a função getRanking com os argumentos (arbitrários) 100 e 19*/
getRanking (100, 19);

/*Declaração da função getRanking, para calcular a diferença entre o número de vitórias e derrotas, além de definir o nível*/
function getRanking(vitorias, perdas) {
    //Declaração da variável da diferença entre vitórias e derrotas
    const saldoVitorias = vitorias - perdas;
    //Declaração do nível. O valor (string) será definido adiante.
    let nivel = "";

    //Determina o nível do jogador baseado na diferença entre vitórias e derrotas*/
    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    };

    // Output: imprime no terminal a seguinte frase, conforme o saldo de vitórias e o nível    
    console.log("O Herói tem de saldo de " + saldoVitorias + " e está no nível de " + nivel);
}



/*



//Soluçao alternativa:

const nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]
let i = 0;
let balance = getBalance(100, 19);
let ranking = getRanking(balance);
console.log(`O Herói tem de saldo de ${balance} e está no nível de ${nivel[i]}`);



function getBalance(vitorias, derrotas){
    return vitorias - derrotas;
}
function getRanking(balance){
    switch (true){
        case balance <=10:
            i = 0; 
        break;
        case balance <=20:
            i = 1; 
        break;
        case balance <=50:
            i = 2; 
        break;
        case balance <=80:
            i = 3; 
        break;
        case balance <=90:
            i = 4; 
        break;
        case balance <=100:
            i = 5; 
        break;
        default:
            i = 6; 
        break;

    }
}

*/