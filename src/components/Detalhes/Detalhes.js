import React from 'react';
import styled from 'styled-components';


export default class Detalhes extends React.Component{
    render(){
        return (
            <div>
              <h2>Título</h2>
              <h4>Preço:</h4>
              <h4>Prazo:</h4>
              <p>Descrição do serviço</p>
              <p>formas de pagamento</p>
              <button>Valtar para lista</button>
            </div>
        )
    }
}