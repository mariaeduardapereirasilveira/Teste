/*A partir dos enunciados abaixo e dos conceitos estudados até o momento, elabore os algoritmos e
faça a codificação utilizando a linguagem de programação JavaScript.
1. Elabore um programa que solicite um valor numérico que represente raio de um círculo. A
partir do valor informado o programa deverá calcular e imprimir na tela a área do círculo e
o seu perímetro. Para estes cálculos deverão se elaboradas as seguintes funções:

Nome: AreaCirculo
Descrição: Retorna a área do círculo.
Entrada: Um valor que indica o raio do círculo.
Retorno: O valor contendo a área do círculo.

Nome: CompCircunferencia
Descrição: Retorna o comprimento da circunferência (perímetro).
Entrada: Um valor que indica o raio do círculo.
Retorno: O valor contendo o comprimento do círculo (perímetro).
2. Elabore um programa que solicite 10 valores inteiros (validar para aceitar apenas valores
positivos). Para cada valor deverá ser impresso na tela a soma dos valores de 1 até o
valor. Por exemplo: se o valor informado for 10, deverá imprimir a soma dos números
inteiros entre 1 e 10 (1+2+3+4+5+6+7+8+9+10). Este somatório deverá ser calculado
utilizando a função “somatorio”:

Nome: somatorio
Descrição: Calcula o somatório dos inteiros de 1 ao número fornecido como entrada.
Entrada: Número limite do somatório.
Retorno: O valor do somatório.

3. Escreva um programa para ler 10 valores inteiros (validar para aceitar apenas valores
positivos). Para cada valor informado o programa deverá responder se o valor é um
número primo ou não. Para saber se um número primo ou não, deverá ser desenvolvida a
função “ehPrimo”:

Nome: EhPrimo
Descrição: Verifica se um número é o ou não primo.
Entrada: Um número inteiro.
Retorno: Se o número de entrada for primo retorna true e false caso contrário.
Um número primo é aquele que é divisível apenas por 1 e por ele mesmo. Exemplos de
número primos: 1, 2, 3, 5, 7, 11, etc.
4. Temos que desenvolver um programa que solicita os seguintes dados para um número
indeterminado de alunos: código de matrícula, nota final e freqüência. O valor da nota final
deverá estar no intervalo entre 0 e 10 e a frequência deverá estar no intervalo entre 0 e
100, ou seja, estas informações deverão ser validadas, solicitando novamente os valores
caso não atendam a estes critérios. Para cada dado de aluno informado, deverá ser
chamada a função “situacao”, a qual possuirá as seguintes características:

Nome: situacao
Descrição: Retorna a situação do aluno a partir da sua nota final e sua frequência.
Entrada: A nota final e a frequência do aluno.
Retorno: Um código conforme a convenção abaixo:

1 – Aluno aprovado por nota e frequência
2 – Aluno aprovado por nota e reprovado por frequência
3 – Aluno reprovado por nota e aprovado por frequência
4 – Aluno reprovado por nota e frequência

Para cada aluno deverá ser impressa sua situação, segundo a convenção apresentada
acima. A solicitação de alunos deverá ser encerrada quando o usuário desejar, ou seja,
deverá ser efetuado questionamento ao usuário após cada informação de aluno solicitada.

5. Elabore duas funções conforme abaixo:

Nome: ContaConsoantes
Descrição: Conta a quantidade consoantes de uma palavra.
Entrada: Uma string contendo uma palavra.

Saída: Um número contendo a quantidade de consoantes da palavra.
Nome: ContaVogais
Descrição: Conta a quantidade vogais de uma palavra.
Entrada: Uma string contendo uma palavra.
Saída: Um número contendo a quantidade de vogais da palavra.
Dica: Pesquise as funções auxiliares para string que o Javascript possui.
6. Utilizando as duas funções elaboradas no exercício anterior, construa um programa que
solicita ao usuário 10 palavras e imprime na tela:
a. A palavra que tem maior quantidade de consoantes.
b. A palavra que tem maior quantidade de vogais.*/