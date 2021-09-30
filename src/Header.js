import React from "react";
import SaldoAtual from "./SaldoAtual";
import "./Header.css"


export default function Header(props){

    var saldoatual = props.sAt;
    var saldoRetirado = props.sRe;
    var saldoAdicionado = props.sAd;
    var setAtual = props.setsAt;

    return(
        <section className="header">
          <h3 style={{width:"150px", height:"150px", borderRadius:"50%", backgroundColor:"#ccc"}}></h3>
          <SaldoAtual saldoAt={saldoatual} setAtual={setAtual} saldoRe={saldoRetirado} saldoAdd={saldoAdicionado}/>
        </section>
    );
}