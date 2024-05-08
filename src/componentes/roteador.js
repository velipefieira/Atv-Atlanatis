import React, { Component, MouseEvent } from "react";
import Home from "./home";
import ListaCliente from "./listaClientes";
import BarraNavegacao from "./barraNavegacao";
import Acomodacoes from "./acomodacoes";
import ListaClientes from "./listaClientes";

export default class Roteador extends Component {
  tema = "#f6cca4"
  constructor(props) {
    super(props);
    this.state = {
      tela: "Home",
    };
    this.selecionarView = this.selecionarView.bind(this);
  }


  selecionarView(novaTela, evento) {
    evento.preventDefault();
    console.log(novaTela);
    this.setState({
      tela: novaTela,
    });
  }

  render() {
    let barraNavegacao = (
      <BarraNavegacao
        seletorView={this.selecionarView}
        tema={this.tema}
        botoes={["Home", "Acomodações", "Hospedagens", "Cliente"]}
      />
    );

    return (
      <>
        {barraNavegacao}
        {this.state.tela === "Home" && <Home tema={this.tema} />}
        {this.state.tela === "Acomodações" && <Acomodacoes tema={this.tema}/>}
        {/* this.state.tela === "Hospedagens" && <Hobbies tema={this.tema}/>} */}
        {this.state.tela === "Cliente" && <ListaClientes tema={this.tema}/>}
      </>
    );
  }
}