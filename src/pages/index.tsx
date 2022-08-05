import React from 'react'
import Layout from '../components/layout'

function Home() {
  return (
    <div className=
    {`flex justify-center items-center h-screen 
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
        <title>Aula NextJS</title>
        <Layout titulo="Cadastro Simples">
          <span>Conteudo</span>
          <div>Olá Mundo!</div>
        </Layout>
    </div>
  )
}

export default Home