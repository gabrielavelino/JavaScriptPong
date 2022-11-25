import React from 'react'
// import ReactDOM from 'react-dom'
// import logo from './logo.svg';
import './App.css'
import Header from './componentes/Header'
import styled from 'styled-components'
import Pesquisa from './componentes/Pesquisa'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;
    background-color: rebeccapurple;
`

function App() {
  return (

    <AppContainer>
        <Header/>
        <Pesquisa/>
    </AppContainer>
  );
}

export default App;
