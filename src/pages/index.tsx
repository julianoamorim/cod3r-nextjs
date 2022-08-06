import React from 'react'
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
          <Tabela clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
          />
        </Layout>
    </div>
  )
}

export default Home