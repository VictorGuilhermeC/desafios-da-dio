# Minhas respostas aos desafios da Dio

## 1- Desafio "Classificador de Nível de Herói"

Este repositório inclui o arquivo classificadorHeroi.js, cujo código em Javascript cumpre os requisitos do [programa proposto pelo professor Felipe Aguiar, da Dio](https://web.dio.me/lab/classificador-de-nivel-de-heroi/learning/760a7dbe-0e47-49d8-a364-680a7394e947).
Resolvi a questão usando declarações `if`, `else if` e `else` e, nos comentários, coloquei uma solução alternativa usando uma declaração `switch`.

Apesar de a variável `xp` ter sido escolhida de forma arbitrária, o seu valor pode ser alterado para qualquer número pertinente, pois a saída será a esperada, conforme as condições declaradas.

Outros comentários mais específicos podem ser observados no próprio código.

## 2 - Desafio "Calculadora de Partidas Rankeadas"

O arquivo ranking.js cumpre os requisitos do [segundo desafio do programa](https://web.dio.me/project/calculadora-de-partidas-rankeadas/learning/7e8c807a-ac55-42d0-be9e-cf453c50efca?back=/track/potencia-tech-ifood-programacao-do-zero&tab=undefined&moduleId=undefined). Resolvi a questão através de uma declaração de função que determina o saldo de vitórias do personagem (recebendo como parâmetros os números de vitórias e derrotas) e, por meio de condicionais `ìf`, `else` e `else if`, também determina o nível do personagem. O programa em seu estado natural chama a função para dois números escolhidos arbitrariamente (100 e 19).

Como solução alternativa, disposta nos comentários do arquivo, declarei uma constante contendo todos os níveis possíveis do personagem em uma array, um índice a ser utilizado em uma função para determinar o índice, uma função `getBalance` a ser chamada para definir o saldo de vitórias e uma função `getRanking` para determinar o nível. Essa segunda função se utiliza de uma `switch` para alterar o índice `i` e o output `console.log` variará conforme o valor de `nivel[i]`.

## 3 - Desafio "Escrevendo as Classes de um Jogo"

O arquivo desafioClasseHeroi.js contém a resposta do [terceiro desafio do programa](https://web.dio.me/project/escrevendo-as-classes-de-um-jogo/learning/f65c74f3-2421-4fb5-a5b9-34a8d19b6e0e?back=/track/potencia-tech-ifood-programacao-do-zero&tab=undefined&moduleId=undefined). Resolvi a questão declarando uma uma `classe` chamada `heroi`, permitindo que eu instanciasse novos objetos com diferentes nome, idade e tipo. A classe inclui um método que imprime o ataque do objeto, subordinado ao tipo - para definir qual seria o ataque a aparecer no console, dentro do método mencionado, declarei uma variável `ataque` e, em seguida, uma `switch case` que atribuiria um valor `string` para `ataque` de acordo com `case`.

Nos comentários, há uma solução alternativa, no qual o `método atacar` declarado contém uma constante com um objeto (JSON) incluindo uma chave relativa ao `tipo` e um valor relativo ao ataque em si. O template literal utilizado no método `console.log()` chama a propriedade do objeto `ataques` na forma `${ataques[this.tipo]}`.
