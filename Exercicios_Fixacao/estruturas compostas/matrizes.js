/*1. Elabore um programa para ler valores numéricos e armazená-los em uma matriz D 3 x 3 (considere
que não serão informados valores duplicados). A seguir o programa deverá solicitar um número X e
escrever uma mensagem indicando se o valor de X existe ou NÃO na matriz.
2. Elabore um programa que solicite valores numéricos para preencher uma matriz de 5 x 5. Após o
preenchimento da matriz, o programa deverá imprimir na tela:
a. A soma dos valores contidos na linha 4.
b. A soma dos valores contidos na coluna 2.
c. A soma dos valores da diagonal principal.
d. A soma de todos os valores da matriz.
OBS: Para obter os valores solicitados nos itens a, b, c e d, deverá ser utilizada apenas uma
varredura na matriz. Para não precisar preencher manualmente a matriz, investigue o uso da função
Math.random() para preencher a matriz com valores aleatórios.
3. Elabore um programa que leia valores numéricos para preencher uma matriz A 5 x 5. Você deverá
criar adicionalmente dois vetores de 5 elementos: SL e SC. Em cada posição do vetor SL deverá
ser armazenada a soma da linha correspondente na matriz A. Da mesma forma, em cada posição
do vetor SC deverá ser armazenada a soma da coluna correspondente na matriz A.
4. Elabore um programa que preencha uma matriz de dimensão 10 x 3. Cada linha da matriz
representa um aluno e cada coluna da matriz representa, respectivamente, a nota que cada aluno
obteve em três provas. Para cada aluno, o programa deverá imprimir:
• A média aritmética das três notas (soma as 3 notas e divide 3).
• Indicar se o aluno foi aprovado ou reprovado com base na média aritmética (média >= 6.0 é
aprovado; média < 6.0 é reprovado).
• A maior e a menor nota entre as três notas de cada aluno.
• A maior e a menor nota dentre todas as notas informadas.
Abaixo temos um exemplo de matriz preenchida e os resultados esperados.

Entrada Saída
9.0 7.0 4.1
4.1 9.8 8.6
6.5 5.5 8.9
5.0 3.9 4.3
5.9 9.3 5.7
1.5 7.7 1.4
4.4 1.5 1.1
3.7 2.2 4.2
1.0 5.1 0.7
4.3 4.0 2.3

Média do aluno 1 = 6.70
APROVADO!
Maior nota entre as três = 9.00
Menor nota entre as três = 4.10
Média do aluno 2 = 7.50
APROVADO!
Maior nota entre as três = 9.80
Menor nota entre as três = 4.10
Média do aluno 3 = 7.00
APROVADO!
Maior nota entre as três = 8.90
Menor nota entre as três = 5.50
Média do aluno 4 = 4.40
REPROVADO!
Maior nota entre as três = 5.00
Menor nota entre as três = 3.90
Média do aluno 5 = 7.00
APROVADO!
Maior nota entre as três = 9.30
Menor nota entre as três = 5.70
Média do aluno 6 = 3.50
REPROVADO!
Maior nota entre as três = 7.70
Menor nota entre as três = 1.40
Média do aluno 7 = 2.30
REPROVADO!
Maior nota entre as três = 4.40
Menor nota entre as três = 1.10
Média do aluno 8 = 3.40
REPROVADO!
Maior nota entre as três = 4.20
Menor nota entre as três = 2.20
Média do aluno 9 = 2.30
REPROVADO!
Maior nota entre as três = 5.10
Menor nota entre as três = 0.70
Média do aluno 10 = 3.50
REPROVADO!
Maior nota entre as três = 4.30
Menor nota entre as três = 2.30
Maior nota entre todos = 9.80
Menor nota entre todos = 0.70

5. Na teoria dos sistemas, define-se o elemento MINMAX de uma matriz como o maior elemento da
linha em que se encontra o menor elemento da matriz. Elabore um programa que preenche uma
matriz 5 x 5 de valores numéricos, como valores informados pelo usuário. Após, o programa deverá
imprimir o elemento MINMAX da matriz e indicar a linha e coluna na qual o elemento aparece.
Observe o exemplo da matriz abaixo. O menor valor contigo na matriz é o número 8 (linha 3 e
coluna 4). Desse modo, o elemento MINMAX é o 97 (linha 3 e coluna 1), pois é o maior valor
contido na linha 3, linha na qual está o menor valor da matriz.
40 82 16 34 37
78 14 21 94 79
82 93 71 76 18
67 97 95 63 8
55 16 44 64 75

Menor valor
na matriz.

Elemento
MINMAX.

DESAFIO
Elabore um programa para preencher uma matriz com dimensões 5 x 5 (5 linhas por 5 colunas),
com valores aleatórios (pesquisar a função Math.random() ) entre 0 e 99. Após, você deverá
proporcionar 3 tentativas ao usuário, nas quais ele irá informar um número, tentando encontrar um
dos valores contidos na matriz. As regras são as seguintes:
• Caso o usuário encontre o número na primeira tentativa, você deverá apresentar a
mensagem “PARABÉNS, jogue na MEGA-SENNA!”.
• Caso o usuário acerte na segunda tentativa, apresente a mensagem: “BOA! Você pode até
concorrer com a mãe Diná!”.
• Caso o usuário acerte na terceira tentativa, apresente a mensagem: “UFA! Aos 45 do
segundo tempo!”.
• Caso o usuário não acerte nas três tentativas, apresente a mensagem: “Azar no jogo, sorte
no Amor. Tente conquistar a pessoa amada!”.*/