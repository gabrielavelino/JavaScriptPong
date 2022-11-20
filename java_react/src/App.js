import React from 'react'
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import './App.css';
import Logo from './componentes/Logo'
import Perfil from './icone-perfil.png'

const navOpcoes = ['Home','Serviços','Contatos'];

const icons = [Perfil];

function App() {
  return (
  
    <div className="App">
        <header className="App-header">
              <div className="container">
                {/* <img src={logo} classNameName="App-logo" alt='logo'></img> */}
                <Logo></Logo>
                <div className="caixa">
                            <nav>
                              <h1 className="titulo">Denta.io - Sistema para controle de clínicas</h1>
                                <ul>
                                  { navOpcoes.map( (texto) => (
                                    <li><a className='href' href='index.html'>{texto}</a></li>
                                  ))}
                                    {/* <li><a href="index.html" className="href">Home</a></li>
                                    <li><a href="produtos.html" className="href">Serviços</a></li>
                                    <li><a href="contatos.html" className="href">Contatos</a></li> */}
                                </ul>

                                {/* <ul className='icones'>
                                  { icons.map((icone)=>(
                                    <li><img src={icone} alt='Icone Perfil' className='icon'></img></li>
                                  ))}
                                </ul> */}
                                <div className='icones'>
                                { icons.map((icone)=>(
                                    <img src={icone} alt='Icone Perfil' className='icon'></img>
                                  ))}
                                </div>
                            </nav>
                </div>
              </div>
            </header>
      </div>
  );
}

export default App;
