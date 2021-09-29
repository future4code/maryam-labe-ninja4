import React from 'react';
import styled from 'styled-components'
import Card from '../Card/Card';

const AlinhaInputs = styled.div`
display: flex;
justify-content: space-around;
margin: 20px 0px;

input {
    width: 20vw;
}
select{
    width: 20vw;
}

`
export default class Contratar extends React.Component{
    render(){
        return(
            <div>  <AlinhaInputs>
            <input placeholder="Valor Mínimo"></input>
            <input placeholder="Valor Máximo"></input>
            <input placeholder="busca por título ou descrição"></input>
            <select>
                <option>Sem Ordenação</option>
                <option>Menor Valor</option>
                <option>Maior Valor</option>
                <option>Título</option>
                <option>Prazo</option>
            </select>
           
        </AlinhaInputs>
        <Card />
        </div>
          
        )
    }
}