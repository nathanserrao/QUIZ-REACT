import { useState } from "react"

function Questao({ lista }) {

  const [resposta, setResposta] = useState([{id: 0, letra: ''}])

  function handleClick(id, letra) {
    setResposta(lista => [...lista, {id, letra}])
  }

  function finalizar() {
    const quantidadeQuest = lista.length
    const quantidadeResp = resposta.length -  1
    let quantidadeCorreta = 0;
    console.log(quantidadeQuest, quantidadeResp)
    if(quantidadeQuest == quantidadeResp){
      lista.map(quest => {
        resposta.map( resp => {
          if(quest.id == resp.id){
            if(quest.correta == resp.letra){
              quantidadeCorreta ++;
            }
          }
        })
      })
      const msg = `Você acertou ${quantidadeCorreta}/${quantidadeQuest}`;
      alert(msg)
    } else {
      alert('Você precisa responder todas as perguntas antes de finalizar!')
    }
    
  }

  return(
    <>
      <div style={{display: "flex"}}>
      <div style={{flex: 1}}>
        {lista.map( item => 
          <div key={item.id}>
            <h2 >#{item.id} - {item.enunciado}</h2>
            {item.alternativas.map( alternativa =>
              <div key={alternativa[0]}>
                {alternativa}
                {resposta[item.id] ? '' : <button onClick={() => handleClick(item.id, alternativa[0])}>Escolher</button> }
              </div>
            )}
          </div>
        )}
      </div>
      <div style={{flex: 1}}>
        <h2>Questões respondidas:</h2>
          {resposta.map( item => {
            return item.id != 0 ? <div key={item.id}>
            <span>Questão #{item.id}</span>
            <br />
            <span>Escolha: {item.letra}</span>
          </div> :
          <div key={item.id}></div>
          })}

          <button onClick={finalizar} >Finalizar Quiz</button>
      </div>
      </div>
    </>
  )
}

export default Questao