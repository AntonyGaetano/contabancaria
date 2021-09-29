import React from "react";
import SaldoAtual from "./SaldoAtual";
import "./Header.css"

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
          <h3 style={{width:"150px", height:"150px", borderRadius:"50%", backgroundColor:"#ccc"}}></h3>
          <SaldoAtual/>
        </section>
    );
}