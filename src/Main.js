import React from "react";
import "./Main.css";



export default function Main(props){

  var total_adicionado = props.sAd;
  var total_retirado = props.sRe;
  var valorAtual = 0;

  const Adicionar = () =>{
     let valor = prompt("Quanto irá adicionar?");
     props.setsAt(valor);
     props.setsAd(valor);
     SomaAtual();
  }

  function SomaAtual(){
    props.setsAt(Number(valorAtual) + Number(props.sAt));
    console.log(props.sAt);
  }

  const Retirar = () =>{
    let valor = prompt("Quanto irá adicionar?");
    props.setsRe(valor);
  }


    return(
        <section className="main">
           <div className="box-main">
              <span> 
                <label>Total Retirado</label>
                <p style={{color:"red", backgroundColor:"white", padding:"0.3rem 0.2rem" ,borderRadius:"6px" }}>{"R$ " + total_retirado}</p>
              </span>
             
              <span> 
                <label>Total Adicionado</label>
                <p style={{color:"blue", backgroundColor:"white", padding:"0.3rem 0.2rem", borderRadius:"6px"}}>{"R$ " + total_adicionado}</p>
              </span>
           </div>

           <div className="box-main2">
               <h4>No que você está pensando agora?</h4>

                <div> 
                  <button onClick={()=>Adicionar()} >Adicionar</button>
                  <button onClick={()=>Retirar()}>Retirar</button>
                </div>
           </div>
        </section>
    );
}