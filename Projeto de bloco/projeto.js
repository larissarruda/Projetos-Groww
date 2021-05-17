var notasAlunosMatriz = [
  ["Alfredo", 10, 08, 10, 10],
  ["Beatriz", 10, 10, 10, 10],
  ["Carlos", 04, 05, 07, 10],
  ["Daniel", 10, 08, 10, 07],
  ["Elaine", 06, 07, 06, 08],
  ["Francine", 10, 09, 10, 10],
  ["Gustavo", 05, 06, 06, 08],
  ["Heitor", 03, 02, 00, 08],
  ["Iago", 07, 03, 08, 07],
  ["Jonathan", 10, 09, 08, 07],
  ["Kyle", 06, 05, 10, 07],
  ["Matheus", 02, 03, 01, 02],
  ["Nair", 10, 08, 09, 07],
  ["Orlando", 05, 07, 04, 06],
  ["Peter", 09, 07, 08, 06],
  ["Queiros", 02, 05, 03, 04],
  ["Raimundo", 06, 05, 08, 09],
  ["Suzana", 10, 09, 10, 09],
  ["Thais", 07, 05, 04, 09],
  ["Ursula", 08, 08, 07, 09],
  ["Victoria", 06, 07, 08, 10],
  ["Xuxa", 06, 07, 07, 06],
  ["Zelda", 10, 10, 10, 10],
  ["Wagner", 02, 03, 03, 06],
  ["Yasmin", 06, 07, 05, 08]
];

function retornaStatus(objeto, menores, maiores) {
  let notaMin = Math.max(...maiores)
  let notaMax = Math.min(...menores)

console.log(notaMin)
console.log(notaMax)
  for (let i = 0; i < objeto.length ; i++){
    if (objeto[i].media > notaMin && objeto[i].media < notaMax) {
        objeto[i].situacao = "Prova Final"
    }
    else if ( objeto[i].media < notaMin ){
        objeto[i].status = "Reprovado"
    } 
    else if ( objeto[i].media > notaMax ){
      objeto[i].status = "Aprovado"
    }
  }
}

function mediaAluno(array) {
  let valorTotal = array.reduce((i, valorAtual) => i + valorAtual) // Somando todos os valores da array 
  let media = valorTotal / array.length // Variavel media recebe o valorTotal dividido pelo tamanho da array
  return  media // retorna media do aluno
}

function reformatar(objeto) {
  let alunos = []
  for (let i = 0; i < objeto.length; i++) {
     // shifit() remove primeiro elemento e pop() remove o último
   let nomeAluno =  objeto[i].shift() // Removendo nome do aluno da array
   // A partir daqui a variavel objeto[i] só contem as notas do aluno em questão
   let notas = objeto[i] // Temos nessa variável separados os elementos de notas e nome do aluno
   // Agora devemos fazer com que os elementos se juntem em um objeto JSON
   let aluno = [] // Criando objeto aluno vazio
   aluno.nome = nomeAluno // Criando um novo valor no objeto aluno e colocando o nomeAluno (String) dentro 
   aluno.notas = notas  //  Criando um novo valor no objeto aluno e colocando as notas (array) dentro
   // Olhar funcionamento da mediaAluno para entender melhor
   aluno.media = mediaAluno(notas)
   // console.log(aluno)  Printando resultado, testes
   alunos.push(aluno) // Colocando o aluno na lista de alunos
  }

  function defineCorte(listaAlunos) {
    let listaMedias = []
    let aprova = Math.floor(alunos.length * 0.30)
    let reprova = Math.floor(alunos.length * 0.10)
    
    let mediasMax = []
    let mediasMin = []
    
    for (let i = 0; i < listaAlunos.length; i++) {
      listaMedias.push(listaAlunos[i].media)
    }
    
    for(reprova; reprova > 0; reprova--) {
      let indexMin = listaMedias.indexOf(Math.min(...listaMedias))
      let minimo = listaMedias.splice(indexMin, 1)
      mediasMin.push(minimo[0])
    }

    for(aprova; aprova > 0 ; aprova--) {
      let indexMax = listaMedias.indexOf(Math.max(...listaMedias))
      let maximo = listaMedias.splice(indexMax, 1)
      mediasMax.push(maximo[0])
    }
  
    retornaStatus(listaAlunos, mediasMax, mediasMin)

  }

  
  defineCorte(alunos)
  console.log(alunos)
}


reformatar(notasAlunosMatriz)
