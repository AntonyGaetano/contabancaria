import React from "react";
import SaldoAtual from "./SaldoAtual";
import "./Header.css"


export default function Header(){

    return(
        <section className="header">
          <h3 style={{width:"150px", height:"150px", borderRadius:"50%", backgroundColor:"#ccc"}}></h3>
          <SaldoAtual/>
        </section>
    );
}