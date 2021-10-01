import React from 'react';
import styled from 'styled-components';

export default class CardCarrinho extends React.Component{
    render(){
        return(
            <div>
                <h3>Título</h3>
                <p>Preço</p>
                <button>Remover</button>
            </div>
        )
    }
}