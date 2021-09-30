import React from "react";
import "./Main.css";

var total_retirado = 0;
var total_adicionado = 0;


export default function Main(props){

  const Adicionar = () =>{
    let valor = prompt("Deu certo de novo");
    props.setsAt(valor);
    props.setsAd(valor);
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
                  <button>Retirar</button>
                </div>
           </div>
        </section>
    );
}