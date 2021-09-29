import React from "react";
import "./Main.css";

var total_retirado = 0;
var total_adicionado = 0;


export default function Header(){

    return(
        <section className="main">
           <div className="box-main">
              <span> 
                <label>Total Retirado</label>
                <p>{total_retirado}</p>
              </span>
             
              <span> 
                <label>Total Adicionado</label>
                <p>{total_adicionado}</p>
              </span>
           </div>
           <div>
               <h4>No que você está pensando agora?</h4>

                <div> 
                  <button>Adicionar</button>
                  <button>Retirar</button>
                </div>
           </div>
        </section>
    );
}