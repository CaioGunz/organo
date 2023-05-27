<<<<<<< HEAD
<<<<<<< HEAD

import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTimes] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTimes('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                />
                <CampoTexto 
                    valor={cargo} 
                    aoAlterado={valor => setCargo(valor)} 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                />
                <CampoTexto 
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Times" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTimes(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
=======
=======
import Botao from '../Botao'
>>>>>>> 3fd0c7b (Trabalhando com Props)
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data-Science',
        'Devops',
        'UX e Desgin',
        'Mobile',
        'inovação e Gestão',
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
<<<<<<< HEAD
>>>>>>> eed0bbf (Primeiro projeto)
=======
                <ListaSuspensa obrigatorio={true} label="Times" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
>>>>>>> 3fd0c7b (Trabalhando com Props)
            </form>
        </section>
    )
}

export default Formulario