
import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")


    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        console.log("Manejar el envio");
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo: titulo, colorPrimario: color});
    }

    //la funcion manejar envio es para evitar q la pag se actualicecuando le demos al boton CREAR, es una funcion muy iportante.
    //lo que lo evita es el metodo preventDefault() que previene los comportamientos por defecto del navegador.
    //el metodo onSubmit hace referencia al envio de datos de cuando se hace click en el boton.
    //la funcion dice que cuando se envien los datos se ejecute la fucion manejarEnvio()
    return <section className= "formulario"> 
        <form onSubmit={manejarEnvio}>
            
        <h2>Rellena el formulario para crear el colaborador.</h2> 
        <Campo titulo="Nombre" 
        placeholder="Ingresar Nombre" 
        required valor={nombre} 
        actualizarValor={actualizarNombre}/>
        <Campo titulo="Puesto" 
        placeholder="Ingresar Puesto" 
        required 
        valor={puesto}
        actualizarValor={actualizarPuesto}/>
        <Campo titulo="Foto"  
        placeholder="Ingresar Enlace de Foto" 
        valor={foto}
        actualizarValor={actualizarFoto}/>
        <ListaOpciones valor={equipo}
        actualizarEquipo={actualizarEquipo} 
        equipos={props.equipos}/>
        <Boton>
            Crear
        </Boton>
        </form>  
     


        <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2> 
        <Campo titulo="Título" 
        placeholder="Ingresar Título" 
        required 
        valor={titulo} 
        actualizarValor={actualizarTitulo}/>
        <Campo titulo="Color" 
        placeholder="Ingresar el Color en Hex" 
        required 
        valor={color}
        actualizarValor={actualizarColor}
         type="color"
         />
       
        <Boton>
            Registrar Equipo
        </Boton>
        </form> 
 
    </section>
}
export default Formulario

// valor={puesto}actualizarValor={actualizarPuesto}
// valor={foto}actualizarValor={actualizarFoto}