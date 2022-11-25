import React from "react";
import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconeHeader from '../IconeHeader'


function Header (){
    return(
        <header className="App-header">
          <div className="container">
            {/* <img src={logo} classNameName="App-logo" alt='logo'></img> */}
            <Logo/>
            <div>
              <nav>
                <h1 className="titulo">Denta.io - Sistema para controle de clínicas</h1>
                <OpcoesHeader></OpcoesHeader>
                <IconeHeader></IconeHeader>
              </nav>
            </div>
          </div>
        </header>
    )
}

export default Header;