import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    //destructuracion
const {colorPrimario, colorSecundario,titulo, id} = props.datos


const {colaboradores, eliminarColaborador,actualizarColor, like} = props

//guardamos en la const las propiedades de datos, asi cuando las llamemos no tenemos q
//hacer x ejemploo backgroundColor: props.datos.colorSecundario, directamente
// decimos backgroundColor: colorSecundario pq ya sabe q está en props.datos.
//para q se entienda q se puede hacer igual de otra forma dejo el titulo
// como ejemplo de la forma mas comun.
//para cambiarlo solo tendriamos q agregar titulo a la const y dsp quitarle el props.datos
//antes de titulo= {props.datos.titulo} pasa a ser {titulo}







// console.log(colaboradores.length > 0 )

    return <>
    
    {
        colaboradores.length > 0 && 
         <section className="equipo" style={{backgroundColor: hexToRgba(colorPrimario, 0.6)}}> 
         
         <input
            
         type="color"
         className="input-color"   
         value={colorPrimario}
         onChange= {(evento) => {
            actualizarColor(evento.target.value, id)
         }}
         /* onChange es un tipo de evento al cual le vamos a tener que indicar una función 
         y esa función se va a ejecutar cada vez que exista un cambio en el input*/
            
            
         />
        <h3 style={{borderColor: colorPrimario}}>{titulo}</h3>
        
        <div className="colaboradores">
       {
            colaboradores.map( (colaborador, index) => 
                <Colaborador  datos= {colaborador} key={index}
                colorPrimario={colorPrimario}
                eliminarColaborador = {eliminarColaborador}
                like={like}
                />)
            
        }
     
        </div>
         </section> 
        
    }
    </> //con estas tags hacemos q no se vean los equipos vacios si no creamos uno. (devops, front end, etc)
   } 
//en jsx se ponen los estilos sin guiones (background-color),y la 2da palabra mayuscula (backgroundColor)
//una cosa son estas llavecitas style={} que hacen
// representación al cómo trabaja JSX, y después internamente, vamos a poner otras llavecitas
// style={{}}
// Es en estas llaves en las cuales nosotros podemos utilizar propiedades 
//CSS escritas de forma de objeto.
export default Equipo