import './Formulario.css'
import CampoTexto from '../CampoTexto/index'

const Formulario = () => {
    return (
        <section className="formulario"> 
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Sobrenome" placeholder="Digite seu sobrenome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite seu endereço da imagem"/>
            </form>
        </section>
    )
}

export default Formulario