import React,{useState}from "react";
import Header from './Header';
import Main from "./Main"
import "./App.css"


function App() {

  const[SaldoAtual,setSaldoAtual] = useState(0);
  const[SaldoRetirado,setSaldoRetirado] = useState(0)
  const[SaldoAdicionado,setSaldoAdicionado] = useState(0)

  return (
   <section className="app">
     <Header sAt={SaldoAtual} setsAt={setSaldoAtual}/>
     <Main  sAd={SaldoAdicionado} setsAd={setSaldoAdicionado} sRe={SaldoRetirado} setsRe={setSaldoRetirado}/>
   </section>
  );
}

export default App;
