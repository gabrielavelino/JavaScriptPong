import React from "react"
import styled from "styled-components";
import { useState } from "react";
import { Pacientes } from './dadosPesquisa'

const Input = styled.input`
    padding: 15px 50px;
    border-radius:30px;
    width: 100px;
    margin-bottom: 30px;
    
`

const PesquisaContainer = styled.section`
    background-color: white;
    text-align: center;
    padding: 20px 0;
    width: 100%;
`

function Pesquisa(){
    const [pessoaPesquisada, setPessoaPesquisada] = useState([])
    console.log(pessoaPesquisada)
    function fazPesquisa(evento){
        const textoDigitado = evento.target.value
        const resultadoPesquisa = Pacientes.filter(paciente => paciente.nome.includes(textoDigitado))
        setPessoaPesquisada(resultadoPesquisa)
    }

    return(
        <PesquisaContainer>
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre o seu paciente.</h3>
            <Input placeholder="Digite o paciente" onBlur={evento => fazPesquisa(evento)}>
            </Input>
            {pessoaPesquisada.map(pessoa => (
                <p>{pessoa.nome}</p>
                ))}
        </PesquisaContainer>
    )
}

export default Pesquisa;