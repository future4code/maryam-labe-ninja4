import React from 'react';
import styled from 'styled-components'
import CardCarrinho from '../CardCarrinho/CardCarrinho';

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

export default class Carrinho extends React.Component {
    render() {
        const componenteDoCarrinho = this.props.carrinho.map((item) => {
            return <CardCarrinho key={item.id} titulo={item.title} preco={item.price} id={item.id} removeCardDoCarrinho={this.props.removeCardDoCarrinho} />
        })
        let precoTotal = 0
        this.props.carrinho.forEach((element) => {
            precoTotal += element.price
        });
        return (
            <div>
                {componenteDoCarrinho.length > 0 ? (
                     <div>
                     {componenteDoCarrinho}
                     <DadosDoCarrinho>
 
                         <p>Valor Total: R${precoTotal.toFixed(2)} </p>
                         <div>
                             <button onClick={() => { this.props.limparCarrinho() }}>Finalizar Compra</button>
                             <button onClick={() => { this.props.irParaContratar() }}>Voltar a Lista</button>
                         </div>
                     </DadosDoCarrinho>
                 </div>
                ) : (
                    <h1>Carrinho Vazio</h1>
                )}
               
            </div>
        )
    }
}