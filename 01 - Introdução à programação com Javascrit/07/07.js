/* RESPOSTA AQUI 👇 */

/* Questão 01 

Crie uma função que receba um array, some todos os valores do array e retorne se é par ou impar

Exemplo:
calculaPar([1])
retorno: impar

calculaPar([0,1,5,])
retorno: par
*/
// Essa funciona?
function calculaPar(array) {
  let soma = array.reduce((soma, elementoAtual) => soma + elementoAtual);
  if (soma % 2 === 0) {
    return "par";
  } else {
    return "impar";
  }
}

/* Questão 02
  Crie uma função que receba dois números e calcule o primeiro elevado ao segundo
  exemplo:
  CalculaExpoente(2,2)
  saída: 4
  CalculaExpoente(5,5)
  Saída: 3125
  */
function eleva(num, exp) {
  return num ** exp;
}
/* Questão 03
  Crie uma função que receba um numero e calcule todos os quadrados de todos os números inteiros até ele.
  exemplo:
  CalculeSomaQuadrado(3) -> 14
  Processamento: 1² + 2² + 3² = 14
  */
function quadrado(num) {
  let listaNum = [];
  for (let i = 1; i <= num; i++) {
    listaNum.push(i ** 2);
  }
  let soma = listaNum.reduce((soma, elementoAtual) => soma + elementoAtual);
  return soma;
}
/* Questão 04
  Cria uma função que receba um array e calcule qual a maior sequencia de inteiros que existe nele.
  Exemplo:
  calculaSequencia([3,4,1,2]) ->2
  (3->4) e (1->2)
  calculaSequencia([10,11,12,9,10]) -> 3
  (10->11->12)
  */
function calculaSequencia(array) {
  let resultado = [];

  for (let i = 0; i < array.length; i++) {
    let sequencia = [array[i]];
    let j = i + 1;

    for (; array[j] == sequencia[sequencia.length - 1] + 1; j++)
      sequencia.push(array[j]);
    if (sequencia.length > 1) resultado.push(sequencia);
     i = j - 1;
    console.log(sequencia)
  }
  return resultado
}