import React,{useState}from "react";
import Header from './Header';
import Main from "./Main"
import "./App.css"


const Adicionar = ()=>{
  let valor = prompt("Deu certo de novo");
  
}

function App() {

  const[SaldoAtual,setSaldoAtual]=useState(0);

  return (
   <section className="app">
     <Header />
     <Main funcao={Adicionar} s={SaldoAtual} sa={setSaldoAtual}/>
   </section>
  );
}

export default App;
