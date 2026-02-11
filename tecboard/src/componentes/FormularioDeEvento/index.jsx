import './formulario-de-evento.estilos.css'
import { CampoDeFormulario } from "../CampoDeFormulario"
import { CampoDeEntrada } from "../CampoDeEntrada"
import { Label } from "../Label"
import { TituloFormulario } from "../TituloFormulario"
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>
        Preencha para criar um evento
      </TituloFormulario>
      <div className='campos'>
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada type="text" id="nome" placeholder='Summer dev hits'></CampoDeEntrada>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada type="date" id="dataEvento"></CampoDeEntrada>
          <ListaSuspensa />
        </CampoDeFormulario>        
      </div>
      <div className='acoes'>
        <Botao>Criar evento</Botao>
      </div>
    </form>
  )
}