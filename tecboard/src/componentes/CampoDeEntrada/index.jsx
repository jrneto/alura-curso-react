import './campo-entrada.estilos.css'

export function CampoDeEntrada(props) {
  return <input className='campo-entrada-form' {...props} /> // o operador spread (...) é usado para passar todas as props para o input
}