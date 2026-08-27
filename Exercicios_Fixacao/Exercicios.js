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
let pacientes= Number(prompt("Insira a quantidade de pacientes do mes"));
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
pesoIdeal();