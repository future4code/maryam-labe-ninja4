import Axios from "axios";
import React from "react";
import styled from "styled-components";

const BodyContainer = styled.div` 
	width: 100vw;
	height: 40vh;
	display:flex;
	flex-direction: column;
	align-items:center;
	justify-content: center;
	margin-top: 30px;
  
  input {
    margin: 5px;
    width: 200px;
  }
  h1{
    margin:5px;
    
  }
  select {
    margin: 5px;
    width: 206px;
  }

  button {
  margin: 5px;
}
`

export default class Cadastro extends React.Component {
  state = {
    titulo: "",
    descricao: "",
    preco: "",
    prazo: "",
    modoDePagamento: []
  }
  atualizaTitulo=(event)=>{
    this.setState({titulo: event.target.value})
  }
  atualizaDescricao=(event)=>{
    this.setState({descricao: event.target.value})
  }
  atualizaPreco=(event)=>{
    this.setState({preco: event.target.value})
  }
  atualizaPrazo=(event)=>{
    this.setState({prazo: event.target.value})
  }
  atualizaModoDePagamento=(event)=>{
    let valor = Array.from(event.target.selectedOptions, option => option.value)
        this.setState({ modoDePagamento: valor })
  }
  criaServico = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"
    const body = {
      "title": this.state.titulo,
      "description": this.state.descricao,
      "price": Number(this.state.preco),
      "dueDate": this.state.prazo,
      "paymentMethods": this.state.modoDePagamento,
    }
    Axios.post(url, body, {
      headers:
        { Authorization: 'f161317b-aa18-403f-a7f7-9979a6fed987' }
    }).then(()=>{
      alert(`O serviço de ${this.state.titulo} foi criado com sucesso.`)
      this.setState({
        titulo:"",
        descricao: "",
        preco: "",
        prazo:"",
        modoDePagamento:[]
      })
    }).catch((err)=>{
      alert(err)
    })
  }
  render() {
    return (
      <BodyContainer>
        <h1>Cadastre seu serviço</h1>
        <input type="text" value={this.state.titulo} onChange={this.atualizaTitulo} placeholder="Título"></input>
        <input type="text" value={this.state.descricao} onChange={this.atualizaDescricao} placeholder="Descrição"></input>
        <input type="number" value={this.state.preco} onChange={this.atualizaPreco} placeholder="Preço"></input>
        <select multiple value={this.state.modoDePagamento} onChange={this.atualizaModoDePagamento}>
          <option>Cartão de Débito</option>
          <option>Cartão de Crédito</option>
          <option>PayPal</option>
          <option>Boleto</option>
          <option>Pix</option>
        </select>
        <input type="date" value={this.state.prazo} onChange={this.atualizaPrazo}></input>
        <button onClick={this.criaServico}>Cadastrar Serviço</button>
      </BodyContainer>
    )
  }
}
