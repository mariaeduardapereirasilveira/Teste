/*
A partir dos enunciados abaixo e dos conceitos estudados até o momento, elabore os algoritmos e
faça a codificação utilizando a linguagem de programação JavaScript.
1. Elabore um programa que solicita ao usuário 10 números. O programa deverá imprimir na
tela quantos dos números informados são inteiros e quantos não são. Por exemplo, o
número 123 é inteiro. Já o número 0.5 não é inteiro. Para desenvolver essa questão,
consulte a função isInteger().

2. Elabore um programa que solicita as duas notas (nota no primeiro semestre e nota no
segundo semestre) de 10 alunos. O programa deve calcular a média das duas notas e
mostrar na tela:
a. A média com duas casas após a vírgula (usar a função toFixed()).
b. A média arredondada para cima. Por exemplo, a média calculada foi 7.6, então vai
mostrar 8 (usar a função ceil()).
c. A média arredondada para baixo. Por exemplo, a média calculada foi 7.6, então vai
mostrar 7 (usar a função floor()).
d. A média arrendada para o valor inteiro mais próximo. Por exemplo, a média
calculada foi 7.6, então vai mostrar 8. Caso a média seja 7.4, então vai mostrar 7
(usar a função round()).
e. A maior média da turma, considerando apenas as médias arredondadas para o
valor inteiro mais próximo.

3. Elabore um programa que solicita ao usuário dois números. Esses dois números irão
representar o intervalo de valores que deverá ser utilizado para sortear 20 números
aleatórios (usar a função random()). Por exemplo, suponha que o usuário informou 100 e
999. Então deverão ser sorteados 20 números aleatórios entre 100 e 999 e mostrados na
tela. IMPORTANTE: o usuário poderá informar os valores em qualquer ordem. Por
exemplo, o usuário pode informar 100 e 999, mas também pode informar 999 e 100. O
programa deverá prever isso.

4. Vamos elaborar um joguinho!  Basicamente, é um programa que sorteia um valor
aleatório entre 1 e 50 (usar a função random()) e o jogador tem 5 chances para tentar
acertar o número sorteado. O programa deverá imprimir na tela as seguintes mensagens,
de acordo com o resultado do jogador.
a. PARABÉNS! Você tem muita sorte! => se o jogador acertar na primeira tentativa.
b. Ótimo! Foi por pouco! => se o jogador acertar na segunda tentativa.
c. Muito bom! => se o jogador acertar na terceira tentativa.
d. Beleza! Eu já estava tenso! => se o jogador acertar na quarta tentativa.
e. Nos acréscimos!!!!! => se o jogador acertar na quinta tentativa.
f. Azar no jogo, sorte no amor! => se o jogador não acertar.
5. Elabore um programa que solicita o nome de 10 pessoas. O programa deverá imprimir o
nome da pessoa que tem o maior nome e o nome da pessoa que tem menor nome,
considerando a quantidade de caracteres dos nomes (usar a propriedade length). Para
imprimir os nomes, utilize a seguinte regra: o maior nome com todas as letras maiúsculas e
o menor nome com todas as letras minúsculas.

6. Elabore um programa que solicita ao usuário 10 frases. O programa deverá informar qual a
frase que possui mais palavras (usar a propriedade length e a função split()).
Considere que uma palavra é qualquer sequência de caracteres seguida por um espaço
em branco.
7. Agora vamos criar uma senha a partir do código ASCII.  Elabora um programa em que o
usuário informa o seu nome (considere que o usuário vai informar o nome sem acento ou
qualquer outro sinal gráfico). A partir do nome do usuário vamos criar uma senha numérica
que é constituída pela soma dos códigos ASCII das letras do nome do usuário. Por
exemplo, meu nome é Vinicius. Como seria a minha senha:
86 + 105 + 110 + 105 + 99 + 105 + 117 + 115 = 842

Para esse algoritmo, vamos ter que utilizar a função charCodeAt(). Lembrem também
sobre a tabela ASCII consultando esse link ou esse vídeo.*/