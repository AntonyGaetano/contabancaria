import React from "react";
import SaldoAtual from "./SaldoAtual";
import "./Header.css"


export default function Header(props){

    var saldoatual = props.saldoAtual;
    var saldoRetirado = props.saldoRetirado;
    var saldoAdicionado = props.saldoAdicionado;
    var setAtual = props.setSaldoAtual;

    return(
        <section className="header">
          <h3 style={{width:"150px", height:"150px", borderRadius:"50%", backgroundColor:"#ccc"}}></h3>
          <SaldoAtual saldoAtual={saldoatual} setSaldoAtual={setAtual} saldoRetirado={saldoRetirado} saldoAdicionado={saldoAdicionado}/>
        </section>
    );
}