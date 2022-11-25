import React from 'react'
import styled from 'styled-components';

const Href = styled.a`
    text-transform: uppercase;
    color: rgb(255, 255, 255);
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    margin-top: 10px;
    transition: 0.5s all;
`

const navOpcoes = ['Home','Serviços','Contatos'];

function OpcoesHeader(){
    return (
        <ul>
            { navOpcoes.map( (texto) => (
            <li><Href href='index.html'>{texto}</Href></li>
            ))}
            {/* <li><a href="index.html" className="href">Home</a></li>
            <li><a href="produtos.html" className="href">Serviços</a></li>
            <li><a href="contatos.html" className="href">Contatos</a></li> */}
        </ul>
    )
}

export default OpcoesHeader;