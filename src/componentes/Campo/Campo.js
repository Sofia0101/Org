import { useState } from "react"
import "./Campo.css"

const Campo = (props) => {
  
//Destructuracion


    const {type = "text"} = props
    //esto lo hacemos para q todos los campotexto sean de type text,
    //excepto el campo de elegir el color, por eso en formulario.js 
    // le pusimos   type="color" al componente Campotexto.
    //a los demas leponemos type text solo para q no queden indefinidos.

    const manejarCambio = (e) => {
 
        props.actualizarValor(e.target.value)
    }


        
        //className={`campo campo-${type}`}>
        //esto hace q cambie la clase sgun el type del input de cada campoTexto
    return  <div className={`campo campo-${type}`}>
        <label> {props.titulo}  </label>
        <input 
        placeholder= {props.placeholder} 
        required={props.required} 
        value={props.valor} 
        onChange={manejarCambio}
        type={type}
        />

            </div>
}

export default Campo