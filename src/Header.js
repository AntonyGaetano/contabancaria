
import React from "react";
import SaldoAtual from "./SaldoAtual";

export default function Header(){

    return(
        <section style={{display:"flex", width:"80%", border:"1px solid black", justifyContent:"space-around"}}>
          <h3>Local da foto</h3>
          <SaldoAtual/>
        </section>
    );
}