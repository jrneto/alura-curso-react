
import './App.css'
import { Banner } from './componentes/Banner'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
import { Tema } from './componentes/Tema'
import { CardEvento } from './componentes/CardEvento'
import { useState } from 'react';
// no react, componentes são funções

function App() {

  const temas = [
    { id: 1, nome: 'front-end' },
    { id: 2, nome: 'back-end' },
    { id: 3, nome: 'devops' },
    { id: 4, nome: 'inteligência artificial' },
    { id: 5, nome: 'data science' },
    { id: 6, nome: 'cloud' }
  ]


  const [eventos, setEventos] = useState(
    [
      {
        capa: '/evento-mulheres-no-front.png',
        tema: temas[0],
        data: new Date(),
        titulo: 'Mulheres no Front'
      }
    ]
  )

  function adicionarEvento(evento) {
      // eventos.push(evento);
      // console.log('Eventos =>', eventos)
      //Cria um novo array copiando todos os eventos atuais e adicionando o novo evento no final.
      setEventos([...eventos, evento])
  }

  return (
    <main>
      <header>
        <img src="/logo.png"></img>
      </header>
      <Banner />
      <FormularioDeEvento 
        temas={temas} 
        aoSubmeter={adicionarEvento}/>
      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item} />
            {eventos.map(function (item, indice) {

              return <CardEvento evento={item} key={indice}/>
            })}
          </section>
        )
      })}
      
    </main>
  )
}

export default App
