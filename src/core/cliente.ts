import React, { Component } from 'react'

export class Cliente{
  private id: string;
  private nome: string;
  private idade: number;

  constructor(nome: string, idade: number, id: string = null ){
    this.nome = nome
    this.idade = idade
    this.id = id
  }

  static vazio(){  //Funciona como metodo construtor do Java
    return new Cliente('',0)
  }

  get _id(){
    return this.id
  }

  get _nome(){
    return this.nome
  }

  get _idade(){
    return this.idade
  }

}

export default Cliente