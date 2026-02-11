
import './App.css'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
// no react, componentes são funções


function App() {

  return (
    <main>
      <header>
        <img src="/logo.png"></img>
      </header>
      <section>
        <img src="/banner.png" alt=""></img>
      </section>
      <FormularioDeEvento />
    </main>
  )
}

export default App
