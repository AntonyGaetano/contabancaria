
import React from "react";

export default function SaldoAtual(){

    const SaldoAtual = 0.00;
    return(
    <div>
      <h2>Olá, seja bem vindo!</h2>
      <h4>Seu saldo atual</h4>
      <p>{"R$ " + SaldoAtual}</p>
    </div>
    )
}