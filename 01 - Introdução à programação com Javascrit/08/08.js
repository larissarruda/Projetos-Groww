/* RESPOSTA AQUI 👇 */

/* Questão 01
Crie uma função que receba 1 número e calculo a soma de todos inteiros até ele
exemplo:
adicionaNumero(3)
1 + 2 + 3 = 6
*/

function adicionaNumero(num) {
    let ar = []
    for (var i = 0; i < num; i++) {
      ar.push(i)
    }
    let soma = ar.reduce((soma, elementoAtual) => soma + elementoAtual)
    return soma
  }
  
  /* Questão 02 
  Cria uma função que checa que compara dois arrays e retorne todos os números que estão nos dois
  exemplo:
  funcaoComparaArray([2,5,6], [2,7,6]) -> [2,6]
  Não é necessário sempre receber um array na função, pode fazer com um array estatíco
  */
  function comparaArray(arrayA, arrayb) {
    let lista = [];
    if (arrayA > arrayB) {
      for (let i = 0; i < arrayA; i++) {
  
      }
    } else {
      for (let i = 0; i < arrayB; i++) {
  
      }
    }
  }
  /* Questão 03
  Crie uma função que receba duas números como argumento(numero, tamanho) e retorne um array
  com todos os multiplos do número, até o tamanho definido.
  exemplo:
  multiplosArray(7,5)
  retorno [7,14,21,28,35]
  */
  
  function multiplosArray(numA, numB) {
    let multiplos = []
    for (let i = 0; i <= numB; i++) {
      multiplos.push(numA * i)
    }
  }
  
  /* Questão 04
  Crie uma função que receba um número como parametro e retorne todos os seus divisores
  exemplo:
  divisor(12) -> [1,2,3,4,6,12]
  */
  
  function divisor(num) {
    let divisores = [];
    for (let i = 0; i <= num; i++) {
      let res = i / num
      if (res % 1 === 0) {
        divisores.push(res)
      }
    }
  }
  
  