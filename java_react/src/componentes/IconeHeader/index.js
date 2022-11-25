import React from 'react'
import Perfil from '../../icone-perfil.png'
import styled from 'styled-components';

const Icones = styled.div`
    position: relative;
    left: 900px;
    bottom: 100px;
    align-items: center;
    width: 80px;
`

const icons = [Perfil];



function IconeHeader (){
    return (
        <Icones>
            { icons.map((icone)=>(
                <img src={icone} alt='Icone Perfil' className='icon'></img>
            ))}
        </Icones>
    )
}

export default IconeHeader;