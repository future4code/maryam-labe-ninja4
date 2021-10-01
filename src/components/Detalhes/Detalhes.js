import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const Detalhesconteiner = styled.div`
display: flex;
flex-direction: column;
border: black 1px;
width: 20vw;
padding: 15px;
background-color: #F0E68C;
border: ridge;

h2{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    margin-top: 5px;
}
div{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
`
const TelaDeDetalhes = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;
`

export default class Detalhes extends React.Component{
    state = {
        servico:{}
    }
    componentDidMount(){
        this.pegaServico()
    }
    pegaServico = () =>{
        const url = "https://labeninjas.herokuapp.com/jobs/"
        Axios.get(`${url}${this.props.servicoId}`,{
            headers:{
                Authorization: 'f161317b-aa18-403f-a7f7-9979a6fed987'
            }
        }).then((res)=>{
            this.setState({servico:res.data})
        }).catch((err)=>{
            alert(err)
        })
    }
    convertDate = (prazo) => {
        const dia = prazo.substring(8, 10)
        const mes = prazo.substring(5, 7)
        const ano = prazo.substring(0, 4)
        return `${dia}/${mes}/${ano}`
    }
    render(){
        const listaDeFormasDePagamento = this.state.servico.paymentMethods && this.state.servico.paymentMethods.map((formaDoPagamento)=>{
            return <li key={formaDoPagamento}>{formaDoPagamento}</li>
        })
        return (
            <TelaDeDetalhes>
            <Detalhesconteiner>
              <h2>{this.state.servico.title}</h2>
              <h4>Preço: R$ {this.state.servico.price},00</h4>
              { this.state.servico.dueDate && <h4>Prazo: {this.convertDate(this.state.servico.dueDate)}</h4>}
              <p>{this.state.servico.description}</p>
              <h4>Formas de Pagamento:</h4>
              <div>{listaDeFormasDePagamento}</div>
              <button onClick={()=> {this.props.irParaContratar()}}>Voltar para lista</button>
            </Detalhesconteiner>
            </TelaDeDetalhes>
        )
    }
}