/* RESPOSTA AQUI 👇 */

/* Vamos trabalhar mais desafios de programação nessa aula */

/* Questão 01 

Cria uma função para ajudar um Parque de Diversões saber se uma pessoa com determinada 
altura pode entrar em determinado brinquedo

Montanha-russa :  Acima de 1,60
Roda gidante : Acima de 1,50 
Carrinho bate-bate: Acima de 1,40
Trem fantasma : Acima de 1,30
Carrossel : Livre

Exemplo:
    Entrada : 1,55
    Saída:
        Montanha-Russa : Não pode Entrar
        Roda Gigante: Liberado
        Carrinho bate-bate: Liberado
        Trem Fantasma : Liberado
        Carrossel : Liberado
*/


function calculaAltura(altura) {
  const brinquedos = {
    "Montanha-Russa": 1.6,
    "Roda Gigante": 1.5,
    "Carrinho bate-bate": 1.4,
    "Trem fantasma": 1.3,
    Carrosel: 0,
  };
  let resp = "";
  let i = 0;

  while (i < Object.keys(brinquedos).length) {
    if (altura > brinquedos[Object.keys(brinquedos)[i]]) {
      resp = resp + `${Object.keys(brinquedos)[i]}: Liberado \n`;
    } else {
      resp = resp + `${Object.keys(brinquedos)[i]}: Não pode entrar \n`;
    }
    i++;
  }
  return resp;
}


/* Questão 02

Crie um programa para auxiliar um cinema saber se o cliente possui direito à meia entrada.
Seu programa deverá receber três variaveis:
    idade do cliente
    possuí carteira de estudande?(Aceitar apenas true ou false)
    dia da semana(As segundas-feiras todos pagam meia)

Lembrando que um cliente paga meia se for maior de 65 anos, ou menor de 21 anos, ou é estudante.
Tente prever também condições absurdas, como uma pessoa e 65 anos estudante.
*/

function meiaCinema(idade, carteira, diaSemana) {
  if (diaSemana.toLowerCase() === "segunda-feira"){
    return 'Você tem direito a meia entrada!'
  }else if (idade < 21 || idade >= 65) {
    if (idade >= 65 || carteira) {
        return "Você é um estudante idoso!"
      }
    return 'Você tem direito a meia entrada pela idade!'
    
  } else if (carteira) {
    return "Estudante com carteira paga meia entrada!"
  }

}

/* Questão 03

Crie uma função que a propria função cria um número aleatório entre 1 e 10. A função receberá
um "chute" do usuário e deverá retornar se acertou o número gerado pelo programa ou não.

Exemplo: 
Entrada = 2
Processamento = O Programa gerou o número 5
Saída = "Que pena, você chutou 2 mas o nosso número é 5"

<<<<<<< Updated upstream
Entrada = 7
Processamento = O programa gerou o número 7
Saída: "Parabéns! Vocẽ entrou com o número 7 e o programa também gerou o número 7"
=======
lista 01= [0, 2, 5, 7, 10 ,11]
lista 02= [1, 2, 6, 10]
>>>>>>> Stashed changes

Para gerar um número aleatório entre 1 e 10, utilize o seguinte código
Math.floor(Math.random() * 10) + 1
*/

function adivinha(num) {
    let numAleatorio = Math.floor(Math.random() * 10) + 1
    if (num === numAleatorio) {
      return "Você acertou, o número era: " + numAleatorio
    } else {
       return "Você errou, o número era: " + numAleatorio
    }
  
  }

/* Questão 04

Crie um programa que lê dois números, verifica se eles estão entre 40 e 60, e por
fim retorna o maior entre os dois número

Exemplo:
Entrada: 45 e 55
Saída : Os números estão entre 40 e 60, e o maior deles é 55

Entrada: 47 e 47
Saída: Os números estão entre 40 e 60, e os dois números são iguais

Entrada: 30 e 50
Saída : Os números não estão entre 40 e 60

*/

function calculaMaior(numA, numB) {
    let maior = 0;
    let string = "e o maior deles é"
  
  
    if (numA >= 40 && numA <= 60 && numB >= 40 && numB <= 60) {
      if (numA > numB) {
        maior = numA
        return `Os números estão entre 40 e 60, ${string} ${maior}`
  
      } else if (numA === numB) {
        return `Os números estão entre 40 e 60, e os dois números são iguais `
      } else {
        maior = numB
        return `Os números estão entre 40 e 60, ${string} ${maior}`
      }
    } else {
      if (numA > numB) {
        maior = numA
        return `Os números não estão entre 40 e 60, ${string} ${maior}`
  
      } else if (numA === numB) {
        return `Os números estão entre 40 e 60, e os dois números são iguais `
      } else {
        maior = numB
        return `Os números não estão entre 40 e 60`
      }
    }
  
  }

/* Desafio

Procure resolver esse exercício em grupo!

Crie um programa que recebe a idade de uma pessoas em segundos e retorne qual seria a
idade dela se ela estivesse num desses planetas:
Mecurio : Ano orbital de 0.2 anos da Terra
Venus: Ano orbital de 0.6 anos da Terra
Terra: Ano orbital de 1 ano da Terra
Marte: Ano orbital de 1.88 anos da Terra
Jupiter: Ano orbital de 11.86 anos da Terra
Saturno: Ano orbital de 29.44 anos da Terra
Urãno: Ano orbital de 84 anos da Terra
Netuno: Ano orbital de 164.79 anos da Terra

Exemplo: Se eu, com 25 anos(777.600.000 segundos de vida) estivesse vivendo em Marte,
eu teria agora 13,8 anos.

Considere cada mês com 30 dias
cada dia com 24 horas
cada hora com 60 minutos
cada minuto com 60 segundos

*/

function idadePlaneta(idadeSegundos) {
    const planetas = {
      "Mercurio": 0.2,
      "Venus": 0.6,
      "Terra": 1,
      "Marte": 1.88,
      "Jupiter": 11.86,
      "Saturno": 29.44,
      "Urãno": 84,
      "Netuno": 164.79,
    };
    // 788940000 = 25 anos
    const idadeAnos = Math.floor(idadeSegundos / 31557600)
    let resposta = "";
    let i = 0;

    while (i < Object.keys(planetas).length) {
     let idade = Object.values(planetas)[i] * idadeAnos
      resposta =  resposta + `Vocë teria ${idade} anos em ${Object.keys(planetas)[i]} \n`
     i++ } 
    
    console.log (resposta)
    return "fim"
    }
  