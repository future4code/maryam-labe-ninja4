import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home/Home';
import Cadastro from './components/Cadastro/Cadastro';
import Contratar from './components/Contratar/Contratar';
import Carrinho from './components/Carrinho/Carrinho';
import Detalhes from './components/Detalhes/Detalhes';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
  }
  `

const HeaderContainer = styled.div` 
	height: 15vh;
	background-color: gold;
	padding: 0 45px;
	font-size: 22px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 0px;
`
const ButtonContainer = styled.div` 
    display: flex;
    height: 40px;
	width: 50px;
    justify-content: space-between;
	align-items: center;
	border-radius:15px;
	margin: 25px;
	padding: 10px 45px;
	button{
		margin: 6px
	}
`


export default class App extends React.Component {
	state = {
		paginaAtual: "HOME",
	}

	irParaCarrinho= () =>{
		this.setState({paginaAtual: "CARRINHO"})
	}

	irParaDetalhes = () =>{
		this.setState({paginaAtual: "DETALHES"})
	}

	irParaContratar = () =>{
		this.setState({paginaAtual: "CONTRATAR"})
	}
	
	irParaHome = () =>{
		this.setState({paginaAtual: "HOME"})
	}
	
	irParaCadastro = () =>{
		this.setState({paginaAtual: "CADASTRO"})
	}
	
    atualizaPagina =()=>{
		switch (this.state.paginaAtual) {
			case "HOME":
				return <Home 
					irParaCadastro = {this.irParaCadastro}
					irParaContratar = {this.irParaContratar}/>
			case "CADASTRO":
				return <Cadastro />
			case "CONTRATAR":
				return <Contratar
				irParaDetalhes = {this.irParaDetalhes}
				/>
			case "CARRINHO":
				return <Carrinho 
				irParaContratar = {this.irParaContratar}
				/>
			case "DETALHES":
				return <Detalhes
				irParaContratar = {this.irParaContratar}
				 />	
					
			default:
			  return <div>"página não encontrada"</div>	
		}
	}

  render() {
    return (
      <div>
		  <GlobalStyle />
		  <HeaderContainer>
        	<h2>LabeNinjas</h2>

			<ButtonContainer>
				<button onClick={()=>{this.irParaHome()}}>Home</button>
				<button onClick={()=>{this.irParaCarrinho()}}>Carrinho</button>
			</ButtonContainer>

      </HeaderContainer>

	  <div>
		{this.atualizaPagina()}
	  </div>
	  </div>
    )
  }
}