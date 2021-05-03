/* Questão 01
Cria uma função que leia o mês do aniversário da pessoa(01 ~ 12) e retorne seu signo:
01 - Capricornio
02 - Aquario
03 - Peixes
04 - Aries
05 - Touro
06 - Gêmeos
07 - Cancer
08 - Leão
09 - Virgem
10 - Libra
11 - Escorpião
12 - Sagitário

*/

const signos = [
    "Capricornio",
    "Aquario",
    "Peixes",
    "Aries",
    "Touro",
    "Gêmeos",
    "Cancer",
    "Leão",
    "Virgem",
    "Libra",
    "Escorpião",
    "Sagitário",
  ];
  
  function leSigno(num) {
    return signos[num - 1];
  }
  
  /* Questão 02
  
  Cria uma função que leia dois números e retorne como resultado os seguintes valores:
  a) a multiplicação entre eles
  b) a divisão entre eles eles
  c) a soma entre eles
  d) a subtração entre eles
  */
  
  function calculaTudo(n1, n2) {
    const soma = n1 + n2;
    const div = n1 / n2;
    const sub = n1 - n2;
    const mult = n1 * n2;
    const str = `Soma ${soma}, Divisão ${div}, Subtração ${sub}, Multiplicação ${mult}`;
    return str;
  }
  
  /* Questão 03
  
  Carlos deseja fazer um omelete. Na receita que leu na internet, um omelete sempre deve levar
  2 ovos. 
  
  Cria uma função que retorne para Carlos quantos omeletes ele consegue fazer com a quantidade 
  de ovos que ele possue
  
  exemplo: 
  entrada 5 ovos
  saída 2 omeletes
  
  Entrada 4 ovos
  saída 2 omeletes
  
  */
  function retornaOmelete(ovos) {
    let omelete = Math.floor(ovos / 2);
    if (omelete === 1) return `${omelete} omelete`;
    else if (omelete <= 0) {
      return "Nenhum omelete";
    } else {
      return `${omelete} omeletes`;
    }
  }
  
  /*
  Questão 04
  
  Crie um programa que funciona como um calculadora. O usuário entrara com
  3 inputs(Tipo de operação,número 01, número 02)
  
  O seu programa deve receber o tipo de operação entrada pelo usuário e garantir que
  os dois números entrados serão calculados de acordo. 
  
  Exemplo:
  Chamada : functionCalculadora("Multiplicação", 2, 2)
  Saída : "A calculadora executou a operação de Multiplicação e retornou o valor 4"
  
  Será necessário criar pelo menos as quatro operações básicas da matemática(
      multiplicação,
      divisão,
      subtração e
      adição
  )
  
  Pontuação bônus: Criar mais operações matemáticas
  Pontuação bônus: Criar uma função separada para cada operação matemática.
  
  */
  
  function calculadora(op, n1, n2) {
    switch (op.toLowerCase()) {
      case "multiplicação":
        return `A calculadora executou a operação de ${op} e retornou o valor ${
          n1 * n2
        }`;
      case "divisão":
        return `A calculadora executou a operação de ${op} e retornou o valor ${
          n1 / n2
        }`;
      case "adição":
        return `A calculadora executou a operação de ${op} e retornou o valor ${
          n1 + n2
        }`;
      case "subtração":
        return `A calculadora executou a operação de ${op} e retornou o valor ${
          n1 - n2
        }`;
    }
  }
  
  /* Questão 02 (Valendo uma pontuação maior)
  
  
  Questão OBI(Olimpíada Brasileira de Informática - 2012, Fase 2, Nível Junior)
  
  João Deseja fazer bolos para seus amigos usando uma receita que indica que devem ser
  usadas 2 xícaras de farinha de trigo, 3 ovos e 5 colheres de sopa de leite. Em casa
  ele tem A xícaras de trigo, B ovos e C colheres de sopa de leite. João não tem muita
  prática com a cozinha e portanto ele só se arriscará a fazer medidas exatas da receita
  de bolo (por exemplo, se ele tiver material suficiente para
  fazer mais do que 2 e menos do que 3 bolos, ele far´a somente 2 bolos). Sabendo disso,
  ajude João escrevendo uma função que determine qual a quantidade máxima de bolos que 
  ele consegue fazer
  Entrada: Os Parâmetros de entrada da função são três números Inteiros A, B e C, indicando
  respectivamente o número de xícaras de farinha de trigo, o núimero de ovos e o número de 
  colheres de sopa de leite que João tem em Casa
  
  Saída: Retornar a quantidade máxima de bolos
  entrada : 4,6,10 saída: 2
  entrada : 4, 6, 9 saída : 1
  */
  
  function joaoQuerBoli(A, B, C) {
    let farinha = Math.floor(A / 2);
    let ovos = Math.floor(B / 3);
    let leite = Math.floor(C / 5);
    let ingredientes = [farinha, ovos, leite];
    let bolo = Math.min.apply(Math, ingredientes);
    if (bolo === 1) return `${bolo} bolo`;
    else if (bolo <= 0) {
      return "Nenhum bolo";
    } else {
      return `${bolo} bolos`;
    }
  }
  