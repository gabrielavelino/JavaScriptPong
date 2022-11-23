import React from 'react'


const navOpcoes = ['Home','Serviços','Contatos'];

function OpcoesHeader(){
    return (
        <ul>
            { navOpcoes.map( (texto) => (
            <li><a className='href' href='index.html'>{texto}</a></li>
            ))}
            {/* <li><a href="index.html" className="href">Home</a></li>
            <li><a href="produtos.html" className="href">Serviços</a></li>
            <li><a href="contatos.html" className="href">Contatos</a></li> */}
        </ul>
    )
}

export default OpcoesHeader;