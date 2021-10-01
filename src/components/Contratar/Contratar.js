import Axios from 'axios';
import React from 'react';
import styled from 'styled-components'
import Card from '../Card/Card';
import axios from 'axios';

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
const AlinharCards = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
`
export default class Contratar extends React.Component {
    state = {
        listaDeServico: []
    }
    componentDidMount() {
        this.pegarTrabalhos()
    }
    pegarTrabalhos = () => {
        const url = "https://labeninjas.herokuapp.com/jobs"
        Axios.get(url, {
            headers:
                { Authorization: 'f161317b-aa18-403f-a7f7-9979a6fed987' }
        }).then((res) => {
            console.log(res.data.jobs)
            this.setState({ listaDeServico: res.data.jobs })
        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        const servicos = this.state.listaDeServico.map((servico) => {
            return <Card
                key={servico.id}
                irParaDetalhes={this.props.irParaDetalhes}
                titulo={servico.title}
                preco={servico.price}
                prazo={servico.dueDate}
            ></Card>

        })
        return (
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
                <AlinharCards>
                    {servicos}
                </AlinharCards>
            </div>

        )
    }
}