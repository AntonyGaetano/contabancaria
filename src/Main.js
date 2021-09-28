
import React from "react";

var total_retirado = 0;
var total_adicionado = 0;

var style_main = {
    display:"flex", 
    width:"70%", 
     backgroundColor:"#5E17EB",
     border:"1px solid black",
     borderLeftTop:"10px",
     borderRightTop:"10px",
     color:"white",
     justifyContent:"space-around",
     alignItems:"center",
}

var style_flex = {
    display:"flex",
}

export default function Header(){

    return(
        <section style={style_main}>
           <div>
               <label>Total Retirado</label>

               <p>{total_retirado}</p>

               <label>Total Adicionado</label>

              <p>{total_adicionado}</p>
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