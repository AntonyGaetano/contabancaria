import React,{useState}from "react";
import Header from './Header';
import Main from "./Main"
import "./App.css"


const Adicionar = ()=>{
  let nome = prompt("Deu certo de novo");
  console.log(nome);
}

function App() {

 // const[SaldoAtual,setSaldoAtual]=useState(0);

  return (
   <section className="app">
     <Header />
     <Main funcao={Adicionar}/>
   </section>
  );
}

export default App;
