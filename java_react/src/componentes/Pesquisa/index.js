import React from "react"
import styled from "styled-components";

const Input = styled.input`
    padding = 20px 140px;
`

function Pesquisa(){
    return(
        <section>
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre o seu paciente.</h3>
            <Input placeholder="Digite o paciente"></Input>
        </section>
    )
}

export default Pesquisa;