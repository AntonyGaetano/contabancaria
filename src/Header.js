
import React from "react";
import SaldoAtual from "./SaldoAtual";


var styleHeader = {
    display:"flex", 
    width:"70%", 
    height:"220px",
    backgroundColor:"#737373",
    border:"1px solid black",
    color:"white",
    justifyContent:"space-around",
    alignItems:"center",
}

export default function Header(){

    return(
        <section style={styleHeader}>
          <h3>Local da foto</h3>
          <SaldoAtual/>
        </section>
    );
}