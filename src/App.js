import React from 'react';
import styled from 'styled-components';



const HeaderContainer = styled.div` 
	height: 15vh;
	background-color: gold;
	padding: 0 45px;
	font-size: 22px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-radius: 5px;
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
`

const BodyContainer = styled.div` 
	width: 100vw;
	height: 30vh;
	display:flex;
	flex-direction: column;
	align-items:center;
	justify-content: center;
	margin-top: 40px;
`


export default class App extends React.Component {

  render() {
    return (
      <div>
		  <HeaderContainer>
        	<h2>LabeNinjas</h2>

			<ButtonContainer>
				<button>Home</button>
				<button>Carrinho</button>
			</ButtonContainer>

      </HeaderContainer>

	  <div>
		  	<BodyContainer>
		  <h1>LabeNinjas</h1>
		  <h3>Para quem é ou para quem procura!</h3>
		  <div>
			
			  <button>Quero ser um Ninja!</button>
			  <button>Quero contratar um Ninja!</button>
				
			</div>
			</BodyContainer>
	  </div>
	  </div>
    )
  }
}