import React from 'react';
import styled from 'styled-components'

const DivCard = styled.div`
display: flex;
flex-direction: column;
border: solid black 1px;
width: 20vw;
margin: 30px;
padding: 15px;

h2{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    margin-top: 5px;
}
div{
    display: flex;
    justify-content: space-around;
}
`

export default class Card extends React.Component{
    render(){
        return(
            <DivCard>
                <h2>Título</h2>
                <h4>Preço: </h4>
                <h4>Prazo: </h4>
                <div>
                    <button>Ver Detalhes</button>
                    <button>Add ao Carrinho</button>
                </div>
            </DivCard>
        )
    }
}