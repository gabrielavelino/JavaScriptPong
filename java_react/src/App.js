import React from 'react'
// import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
  
    <div className="App">
        <header className="App-header">
              <div class="container">
                <img src={logo} className="App-logo" alt='logo'></img>
                <div class="caixa">
                            <nav>
                    <h1 class="titulo">Denta.io - Sistema para controle de clínicas</h1>
                                <ul>
                                    <li><a href="index.html" class="href">Home</a></li>
                                    <li><a href="produtos.html" class="href">Serviços</a></li>
                                    <li><a href="contatos.html" class="href">Contatos</a></li>
                                </ul>
                            </nav>
                </div>
              </div>
            </header>
      </div>
  );
}

export default App;
