import Questao from "./Questao"
// import { Questao, lista } from "./Questao"

function Quiz(){

  const listaQuestoes = [
    { id: 1, enunciado: 'O que é Front-end?',
    alternativas: ['a) Parte de um sistema que é oculta pelo usuário.',
      'b) Parte de um sistema que é visível e interativo ao usuário.',
      'c) Parte lógica que recebe as regras de negócio.',
      'd) Nem uma das alternativas anteriores.'],
    correta: 'b'
    },
    { id: 2, enunciado: 'O que é React JS?',
    alternativas: ['a) Uma poderosa biblioteca JavaScript.',
      'b) Uma linguagem de programação.',
      'c) Um servidor cloud.',
      'd) Todas as respostas anteriores.'],
      correta: 'a'
    },
    { id: 3, enunciado: 'Quais são as principais tecnologias do mundo Front-end?',
    alternativas: ['a) Java, Golang e Python.',
      'b) AWS, Google Cloud e Azure.',
      'c) Kotlin, HTML e CSS.',
      'd) HTML, CSS e JavaScript.'],
      correta: 'd'
    },
    { id: 4, enunciado: 'Quais são as principais tecnologias do mundo Front-end?',
    alternativas: ['a) Java, Golang e Python.',
      'b) AWS, Google Cloud e Azure.',
      'c) Kotlin, HTML e CSS.',
      'd) HTML, CSS e JavaScript.'],
      correta: 'd'
    }
  ]

  return (
    <>
      <h1>Quiz de Front-end</h1>
      <Questao lista={listaQuestoes} />
    </>
  )
}

export default Quiz