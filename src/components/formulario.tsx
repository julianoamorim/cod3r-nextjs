import { useState } from "react"
import Cliente from "../core/cliente"
import Botao from "./botao"
import Entrada from "./entrada"

interface FormularioProps {
    cliente: Cliente

}

function Formulario(props: FormularioProps) {
    const id = props.cliente?._id
    const [nome, setNome] = useState(props.cliente?._nome ?? '')
    const [idade, setIdade] = useState(props.cliente?._idade ?? '')
    return (
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} somenteLeitura />
            ) : false}
            <Entrada
            texto='Nome'
            valor={nome}
            valorMudou={setNome}
            />
            <Entrada
             texto="Idade"
             tipo="number"
             valor={idade}
             valorMudou={setIdade}
            />
            <div className="mt-7 flex justify-end">
                <Botao cor="blue" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="gray">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}

export default Formulario