import React from "react";
import styled from "styled-components";
import { Dentistas } from "./dadosUltimosDentistas";
import { Titulo } from "../Titulo";

const Margem = styled.section`
    background: white;
    width: 30%;
    height: 50px;
    border-radius: 0px 30px 30px 0px;
    margin-top: 40px;
    text-align: center;
`
// const Titulo = styled.h2`
//     padding-top: 5px;
// `
const Divisao = styled.div`
    background-color: #EBECEE;
    display:flex;
    flex-direction: horinzontal;
    padding-left: 10px;
    margin-top:20px;
    font-size:20px;
    height:100px;
    text-align: center;
`
const Espaco = styled.div`
    margin-left: 100px;
    margin-top: 30px;
`


function UltimosDentistas(){
    return(
        <><Margem>
            <Titulo cor="rebeccapurple">Ultimos Dentistas na clínica</Titulo>
        </Margem>
        <Divisao>
            {Dentistas.map(dentista => (
                <Espaco> {dentista.nome}</Espaco>
            ))}
        </Divisao></>
    )
}

export default UltimosDentistas