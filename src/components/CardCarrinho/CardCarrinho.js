import React from 'react';
import styled from 'styled-components';

const DivCardCarrinho = styled.div`
border: 1px solid black;
background-color: #F0E68C;
width: 60vw;
margin: 20px;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;


`
 const Div = styled.div`
 display: flex;
 justify-content: center;

 `

export default class CardCarrinho extends React.Component {
    render() {
        return (
            <Div>
                <DivCardCarrinho>
                    <h3>{this.props.titulo}</h3>
                    <p>R$ {this.props.preco},00</p>
                    <button onClick={()=> {this.props.removeCardDoCarrinho(this.props.id)}}>Remover</button>
                </DivCardCarrinho>
            </Div>

        )
    }
}