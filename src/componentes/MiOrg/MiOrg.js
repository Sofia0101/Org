import {useState} from "react"
import "./MiOrg.css"

/*función que se llama useState, que va a recibir como parámetro un initialState, 
es decir, un valor inicial.

[05:00] Internamente tiene una variable, dispatcher que es igual y otra función.
Prácticamente esta línea que nosotros utilizamos del UseState y los paréntesis, es como si, 
por ejemplo yo tuviera 
aquí un let, le agregara por ejemplo, un nombre, y este igual le dijera que es “Harland”.
¿Cuál es la idea entonces? Por acá nosotros sabemos que en cuanto yo le di enter 
se va a crear una cajita o una variable llamada nombre y el contenido va a ser “Harland”
¿De qué forma, entonces nosotros representamos eso con React? 
Y suponiendo que yo quisiera justamente tener una cajita que tenga el valor de Harland, bueno,
 lo que tendría que hacer es en los paréntesis poner comillas. Y por acá poner justamente “Harland”. 
 ¿Qué significa este valor? Lo que significa es el valor inicial del estado, el valor inicial de
  lo que viene siendo la cajita
  Pero me haría falta definir el nombre de la caja, el nombre de la referencia, el nombre
   de la variable. Y es aquí donde necesitamos entender que todo esto lo vamos a
    guardar por general en una constante*/ 

const MiOrg = (props) => {
    //Estado - hooks
    //useState se usa asi: const[nombre de la Variable, funcion que actualiza] 
    //(el nombre puede ser cualq otra palabra)
  
    // const [mostrar, actualizarMostrar]/*nombre de la cajita*/ = useState(true) valor INICIAL true
    // const manejarClick = () =>{
    // console.log("mostrar/ocualtar elemento", mostrar)
    // actualizarMostrar(!mostrar) valor ACTUALIZADO false
    /*Lo que va a hacer esta línea, es número 1, tomar el valor que está guardado en el estado,
     en este caso, que inicializa como true y cuando le da clic, lo va a invertir. Lo que sucede
      es entonces 
    que ahora mostrar va a ser false. Si le vuelvo a dar clic, mostrar es false, lo niega, 
    se vuelve true.*/ 

//lo que nosotros pongamos dentro de esos paréntesis (actualizarMostrar(aca)) va a ser el valor q
// se le va a asignar en este caso a nuestro estado, en este caso el que tiene el nombre mostrar
    return <section className="orgSection"> 
    <h3 className="title">Mi Organización</h3>
    <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg