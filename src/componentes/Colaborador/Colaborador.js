import "./Colaborador.css"
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from "react-icons/ai"

const Colaborador = (props) => {

    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    return <div className="colaborador">
        {/* <span onClick={eliminarColaborador}>D</span> 
        voy a reemplazar el span por el nombre del icono directamente, como está abajo.
        es usar el icono como etiqueta directamente
        tenemos q ponerle un arrow funct al principio pq si no lo hacemos
        se manda a llamar a la func eliminarColaborador() sin si quiera haberle dado click
        a la cruz de eliminar. (no se pq todavia) pero es necesario agregarlo
        pq si fuera un proyecto real al recargar la pagina se eliminaria el 
        elemento automaicamente sin dalre click siquiera.
        onClick={()=>eliminarColaborador(id)}
        */}
        <AiFillCloseCircle className="eliminar" onClick={()=>eliminarColaborador(id)}/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img className="img" src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={()=> like(id)}/> :  <AiOutlineHeart onClick={()=> like(id)} />}
        </div>
    </div>
}

//https://github.com/Sofia0101.png


export default Colaborador