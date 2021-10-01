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
const ConteinerDeCards = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
margin: 12px;
`

export default class Contratar extends React.Component{
    state = {
        listaDeServicos: []
    }

    componentDidMount(){
		this.funcaoDaApi()
	}
	
	funcaoDaApi= ()=>{
		const url = 'https://labeninjas.herokuapp.com/jobs'

		axios.get(url, {
			headers: {
				Authorization: "f161317b-aa18-403f-a7f7-9979a6fed987"
			}
		
		}).then((res)=>{
			console.log(res.data.jobs)
            this.setState({listaDeServicos: res.data})
		}).catch((err)=>{
			console.log(err)
		})
	}
    render(){
        const ComponentesDoServico = this.state.listaDeServicos.map((servico) => {
            return <Card key={servico.id} servico={servico} />
        })
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
        <ConteinerDeCards> {ComponentesDoServico} </ConteinerDeCards>
        <Card 
         irParaDetalhes = {this.props.irParaDetalhes}
        />
        </div>
          
        )
    }
}