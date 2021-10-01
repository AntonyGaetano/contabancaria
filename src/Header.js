import React from "react";
import SaldoAtual from "./SaldoAtual";
import "./Header.css"
import Logo from "./img/logo.jpeg"




export default function Header(props){

    var saldoatual = props.saldoAtual;
    var saldoRetirado = props.saldoRetirado;
    var saldoAdicionado = props.saldoAdicionado;
    var setAtual = props.setSaldoAtual;

    return(
        <section className="header">
          <h3 class="h3"> </h3>

          <SaldoAtual saldoAtual={saldoatual} setSaldoAtual={setAtual} saldoRetirado={saldoRetirado} saldoAdicionado={saldoAdicionado}/>
        </section>
    );
}