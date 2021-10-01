import React,{useState}from "react";
import Header from './Header';
import Main from "./Main"
import "./App.css"

export default function App() {
const[SaldoAtual,setSaldoAtual] = useState(0);
const[SaldoRetirado,setSaldoRetirado] = useState(0);
const[SaldoAdicionado,setSaldoAdicionado] = useState(localStorage.getItem("TotalAdicionado") === "" ? 0 : localStorage.getItem("TotalAdicionado"));

  return (
   <section className="app">
     <Header saldoAtual={SaldoAtual} setSaldoAtual={setSaldoAtual} saldoAdicionado={SaldoAdicionado} saldoRetirado={SaldoRetirado}/>

     <Main  saldoAdicionado={SaldoAdicionado} setSaldoAdicionado={setSaldoAdicionado} saldoRetirado={SaldoRetirado} setSaldoRetirado={setSaldoRetirado} setSaldoAtual={setSaldoAtual} saldoAtual={SaldoAtual}/>
   </section>
  );
}
