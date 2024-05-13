import React, { Component } from 'react';
import './estilo.css';
import biscoito from './assets/biscoito.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TextFrase: ''
    };
    this.quebrarbiscoito = this.quebrarbiscoito.bind(this);
    this.frases = ['siga os bons e aprenda com eles', 'o bom-senso vale mais que muito conhecimento', 'o riso é a menor distância entre duas pessoas', 'deixe de lado as preocupações e seja feliz', 'realize o óbvio, pense no improvável e conquiste o impossível', 'Acredite em milagres mas não dependa deles', 'a maior barreira para o sucesso é o medo do fracasso'];
  }
  quebrarbiscoito() {
    let state = this.state;
    let numeroaleatorio = Math.floor(Math.random() * this.frases.length);
    state.TextFrase = this.frases[numeroaleatorio];
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <img src={biscoito} className='img' />
        <Botao nome="abrir biscoito" acao={this.quebrarbiscoito}></Botao>
        <h3 className='textoFrase'>{this.state.TextFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acao}>{this.props.nome}</button>
      </div>
    )
  }
}

export default App;