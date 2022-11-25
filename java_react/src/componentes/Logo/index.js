import logo from '../../logo.svg'
import React from 'react'
import styled from 'styled-components'

const LogoApp = styled.img`
    width: 20%;
    position: relative;
    right: 550px;
    margin-top: 10px;
`

function Logo(){
    return (
        <LogoApp src={logo} alt='logo'></LogoApp>
    )
}

export default Logo;