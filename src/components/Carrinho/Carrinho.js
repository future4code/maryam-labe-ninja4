import React from 'react';
import styled from 'styled-components'

const DadosDoCarrinho = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
div{
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        margin: 10px;
        width: 140px;
    }
}
`

export default class Carrinho extends React.Component{
    render(){
        return(
            <DadosDoCarrinho>
                {/* aqui vai o cardDoCarrinho */}
                <p>Valor Total: R$ </p>
                <div>
                <button>Finalizar Compra</button>
                <button onClick={()=>{this.props.irParaContratar()}}>Voltar a Lista</button>
                </div>
            </DadosDoCarrinho>
        )
    }
}