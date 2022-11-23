import React from 'react'
import Perfil from '../../icone-perfil.png'
const icons = [Perfil];


function IconeHeader (){
    return (
        <div className='icones'>
            { icons.map((icone)=>(
                <img src={icone} alt='Icone Perfil' className='icon'></img>
            ))}
        </div>
    )
}

export default IconeHeader;