import "./Boton.css"

const Boton = (props) => {
    return <button className="boton">{props.children}</button>
}
//props.children hace referencia al hijo del
//componente boton en el archivo formulario.js,
//que en este caso es un texto q se llama "crear":
//  <Boton>
//      Crear
// </Boton>
//son distintas formas de hacer lo mismo, es lo mismo 
//que poner   <Boton texto= "Crear" />.
export default Boton