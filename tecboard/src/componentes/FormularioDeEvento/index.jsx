import './formulario-de-evento.estilos.css'
import { CampoDeFormulario } from "../CampoDeFormulario"
import { CampoDeEntrada } from "../CampoDeEntrada"
import { Label } from "../Label"
import { TituloFormulario } from "../TituloFormulario"
import { Botao } from '../Botao'
import { ListaSuspensa } from '../ListaSuspensa'

export function FormularioDeEvento({ temas, aoSubmeter }) {


  function aoFormSubmetido(formData) {
    console.log('Formulário submetido', formData)
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
    }
    aoSubmeter(evento)
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>
        Preencha para criar um evento
      </TituloFormulario>
      <div className='campos'>
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder='Summer dev hits'
            name="nomeEvento"></CampoDeEntrada>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">
            Qual o endereço da imagem de capa?
          </Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            placeholder='http://...'
            name="capa"></CampoDeEntrada>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada 
            type="date" id="dataEvento" name="dataEvento">
          </CampoDeEntrada>
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="tema">
            Tema do evento
          </Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>
      </div>
      <div className='acoes'>
        <Botao>Criar evento</Botao>
      </div>
    </form>
  )
}