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
  render() {
    return( 
    <BodyContainer>
        <h1>Cadastre seu serviço</h1>
        <input type="text" placeholder="Título"></input>
        <input type="text" placeholder="Descrição"></input>
        <input type="number" placeholder="Preço"></input>
        <select multiple>
          <option>Cartão de Débito</option>
          <option>Cartão de Crédito</option>
          <option>PayPal</option>
          <option>Boleto</option>
          <option>Pix</option>
        </select>
        <input type="date"></input>
        <button>Cadastrar Serviço</button>
    </BodyContainer>
    )
  }
}
