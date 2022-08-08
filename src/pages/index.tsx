import React from 'react'
import Botao from '../components/botao'
import Formulario from '../components/formulario'
import Layout from '../components/layout'
import Tabela from '../components/tabela'
import Cliente from '../core/cliente'

function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Maria', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4')
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente._nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir ${cliente._nome}`)
  }

  return (
    <div className=
    {`flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
        <title>Aula NextJS</title>
        <Layout titulo="Cadastro Simples">
          <div className='flex justify-end'>
            <Botao cor='green' className='mb-4'>Novo Cliente</Botao>
          </div>
          <Tabela clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
          />
          <Formulario cliente={clientes[1]}></Formulario>
        </Layout>
    </div>
  )
}

export default Home