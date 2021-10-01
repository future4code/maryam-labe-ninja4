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
     convertDate = (prazo) => {
        const dia = prazo.substring(8, 10)
        const mes = prazo.substring(5, 7)
        const ano = prazo.substring(0, 4)
        return `${dia}/${mes}/${ano}`
    }
    
    render(){
        return(
            <DivCard>
                <h2>{this.props.titulo}</h2>
                <h4>Preço: R${this.props.preco} </h4>
                <h4>Prazo:{this.convertDate(this.props.prazo)} </h4>
                <div>
                    <button onClick={()=> {this.props.irParaDetalhes()}}>Ver Detalhes</button>
                    <button>Add ao Carrinho</button>
                </div>
            </DivCard>
        )
    }
}