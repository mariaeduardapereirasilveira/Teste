
//Repetições lista 3
/*1. Elabore um programa que solicita ao usuário a nota final de 20 alunos. Sabendo que para
passar de ano o aluno precisa ter nota maior ou igual a 6, o programa deverá imprimir as
seguintes informações:
a. Quantos alunos foram aprovados.
b. Quantos alunos foram reprovados.
c. Maior nota dentre as 20 notas informadas.
d. Menor nota dentre as 20 notas informadas.

2. Elabore um programa que solicita inicialmente ao usuário quantas pessoas confirmaram
presença para ir em uma festa. Então, o programa deverá solicitar o nome e a idade de
cada pessoa que confirmou presença. Ao final o programa deverá imprimir as seguintes
informações:
a. Se tem algum convidado com mais de 70 anos.
b. Quantidade de convidados maiores de idade (ou seja, com idade >= 18).
c. Quantidade de convidados menores de idade (ou seja, com idade < 18).
d. Nome da pessoa mais nova.

3. Elabore um programa que solicita ao usuário dois valores A e B. Utilizando estruturas de
repetição, o programa deverá calcular e imprimir a soma de todos os valores entre A e B,
incluindo o A e o B.
Por exemplo, digamos que o usuário informe 5 para A e 10 para B. O programa deverá
imprimir na tela o valor 45, que é o resultado de 5 + 6 + 7 + 8 + 9 + 10. Considere que o
usuário sempre vai informar o menor valor para A e o maior valor para B.

4. Elabore um programa para um endocrinologista. Nesse programa, o endocrinologista
informa inicialmente a quantidade de pacientes que atendeu ao longo do mês. Após, para
cada paciente ele informa o nome e mais dois valores: o peso atual do paciente e o peso
ideal do paciente. O programa deverá imprimir:
a. O nome do paciente que está mais distante do peso ideal.
b. A quantidade de pacientes que estão no peso ideal (ou seja, que o peso atual está
igual ao peso ideal).*/

// exrcicio 1
function Aprovados(){
    let contAprov=0;
    let contReprov=0;
    let maxNota= -Infinity;
    let minNota= Infinity;
    for(i=1; i<=5; i++){
        let notaFinal= Number(prompt("Insira a nota dos alunos da turma"));

        if(notaFinal >= 6){
            contAprov++;
        }else if(notaFinal < 6){
         contReprov++;
        }

      if(notaFinal > maxNota){
        maxNota = notaFinal;
      }else if(notaFinal < minNota){
        minNota = notaFinal;
      }

    }
    return document.write(`Alunos aprovados: ${contAprov} \n Alunos reprovados: ${contReprov} \n
    Maior nota dentre as informadas: ${maxNota} \n Menor nota dentre as informadas: ${minNota}`);
}

// Aprovados();

// exrcicio 2
// let pessoas= Number(prompt("Insira o número de pessoas confirmaram presença"));
let flag = false;
let contMaior= 0;
let contMenor= 0;
let idadeNova= Infinity;
let nomeNova= "";
 function presenca(){
    for(i=1; i<=pessoas; i++){
        let nome= prompt("Insira o nome do convidado");
        let idade= Number(prompt("Insra a idade do convidado"));

if(idade > 70){
flag=true;
if(flag== true){
    flag= "sim";
}else if(flag==false){
    flag= "não";
}
}

if(idade >= 18){
    contMaior++;
}else if(idade < 18){
    contMenor++;
}

if(idade < idadeNova){
    idadeNova = idade;
    nomeNova= nome;
}
    }

    return document.write(`Há algum convidado com mais de 70 anos?${flag} \n Convidados maiores de idade ${contMaior}
        Convidados menores de idade: ${contMenor} \n Pessoa mais nova: ${nomeNova}`);
 }

//  presenca()
// exercicio 3
function soma(){
    // let numero1= Number(prompt("Insira o primeiro numero"));
    // let numero2= Number(prompt("Insira o segundo numero"));
let soma= 0;
    for(i= numero1; i<= numero2; i++){

         soma +=i;
    }
    return document.write(soma);
}
// soma();

// exercicio 4
// let pacientes= Number(prompt("Insira a quantidade de pacientes do mes"));
let maisLonge= -Infinity;
let ideal=0;
let longeDoPeso= "";
function pesoIdeal(){
for(i=1; i<=pacientes; i++){
    let nome= prompt("insira o nome do paciente");
    let peso= Number(prompt("insira o peso atual do pacinte"));
    let pesoIdeal= Number(prompt("insira o peso ideal do pacinte"));
    let diferenca= (peso - pesoIdeal);

    if(diferenca < 0){
        diferenca = diferenca * -1;
    }

if(peso == pesoIdeal){
    ideal++;
}
if(diferenca > maisLonge){
    maisLonge  = diferenca;
    longeDoPeso = nome;
}

}
return document.write(`Quantidade de pessoas no peso ideal: ${ideal}
                 \n Pessoa mais longe do peso ideal: ${longeDoPeso}`);
}
// pesoIdeal();

// LISTA 2
//exercicio 1
function leituraNum(){
    let numero = Number(prompt("Insira um número"));
    
    while(numero !== 0){
        if(numero > 0){
             document.write("Número positivo");
             numero = Number(prompt("Insira um número"));
        }else{
             document.write("número negativo");
             numero = Number(prompt("Insira um número"));
        }
}

}
// leituraNum();

//exercicio 2
function contNum(){
    let numero = Number(prompt("Insira um número"));
    let cont=0;

    while(numero !== 0){
        if(numero >= 100 && numero <=200){
             cont++
            }
            numero = Number(prompt("Insira um número"));
    
}

document.write(cont);

}
// contNum();

//exercicio 3
function idades(){

    let idade= Number(prompt("Insira uma idade"));
    let contMax=0;
    let contMin= 0;
    while(idade >= 0){
    if(idade >= 18){
        contMax++;
    }else{
        contMin++;
    }
     idade = Number(prompt("Insira uma idade"));
        
    }
    document.write(`Maiores de idade: ${contMax} \n Menores de idade: ${contMin}`);
}
// idades();
//exercicio 4

function senha(){
    let senha= Number(prompt("Insira a senha"));
    while(senha !== 2008){
        if(senha != 2008){
            alert("senha incorreta");
            senha= Number(prompt("Insira a senha"));
        }
    }
    if(senha == 2008){
      return  alert("Acesso permitido");
    }
}

// senha();
//exercicio 5

function calculadora(){
    let continuar;
    do{
        let valor1= Number(prompt("Insira um valor"));
        let valor2= Number(prompt("Insira outro valor"));
    
        let operacao= Number(prompt("Insira a operação desejada: \n Subtração(1);\n  Soma(2); \n Multiplicação(3);\n Divisão(4);\n Potência(5); \n Reaiz quadrada(6)"));
        
        if(operacao == 1){
            let result = valor1 - valor2;
            alert(result);    
        }else if( operacao == 2){
             let result = valor1 + valor2;
            alert(result);
        }else if (operacao == 3){
             let result = valor1 * valor2;
            alert(result);
        }else if(operacao == 4){
             let result = valor1 / valor2;
            alert(result);
        }else if (operacao == 5){
          let result =  Math.pow(valor1, valor2);
           alert(result);

        }else if (operacao == 6){
             let result = Math.sqrt(valor1);
             let result2= Math.sqrt(valor2);
            alert(result + "\n " + result2);
        }else{
              alert("Operação inválida!");
        }
     continuar= confirm("Gostaria de continuar os calculos?");
    }while(continuar == true)
}
// calculadora();

//exercicio 6
function divisao(){
      let valor1= Number(prompt("Insira um valor"));
      let valor2= Number(prompt("Insira outro valor"));
      let continuar=true;
      while(continuar == true ){
        
            while(valor2== 0){
                 alert("Não é possível dividir por zero!");
            valor2 = Number(prompt("Insira outro valor diferente de zero"));
            }
            alert(valor1/valor2);
            continuar = confirm("Deseja continuar?");
              if (continuar == true) {
            valor1 = Number(prompt("Insira um valor"));
            valor2 = Number(prompt("Insira outro valor"));
        }

      }
    }
    // divisao();

    //exercicio 7
    
