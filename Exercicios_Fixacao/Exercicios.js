
//LISTA 1
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
    
