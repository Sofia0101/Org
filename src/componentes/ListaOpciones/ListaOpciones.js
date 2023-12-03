

/* El método map tiene la siguiente estructura. Número 1, es el nombre del arreglo.map y lo 
 que recibe es lo que conocemos 
 como un callback, una función, donde nosotros podríamos representarlo como un arrow function.
 número 1, aquí lo que vamos a hacer es recibir el dato de cada equipo. 
 Si yo le podría poner aquí XJ,
 el nombre quisiera no, pero a mí me hace sentido, porque bueno, se llama equipos.
 Entonces, este equipo en el primer paso va a representar programación. 
 Una vez que termine de hacer lo que nosotros le indiquemos dentro de nuestra función,
 va a ir al siguiente elemento del arreglo y va a ser 
 “Front End”, entonces. Ahora el valor de equipo sería “Front end” y así sucesivamente.
 este método map, aparte de recibir el elemento que nosotros tenemos por acá como
  segundo argumento vamos a recibir el index, es decir, la posición.
  Cuando nosotros estemos en programación, acuérdate es un arreglo, por lo cual
  siempre comienza en cero,
  entonces programación estaría en 0, Front End en 1, Data Science 2 y así sucesivamente.
  Ahora, ya que tenemos un poquito esta idea resulta que nosotros podemos retornar cierta
  información, en este caso en este ejemplo lo que quiero hacer es que regresemos un option,
  de esta forma, option. Y este es el motivo por el cual nosotros utilizamos map.

  El cómo funciona map es que va a tomar un arreglo de información y a partir de eso lo va a
  transformar y nos va a regresar un nuevo arreglo con esos datos transformados. */
  import "./ListaOpciones.css"


  
const ListaOpciones = (props) => {

//     const equipos = [
//         "Programación",
//         "Front End",
//         "Data Science",
//         "Devops",
//         "UX y Diseño",
//         "Móvil",
//         "Innovación y  Gestión"

//     ]

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
        
    }


    return <div className="lista-opciones">
        <label>Equipos</label>
         <select value={props.valor} onChange={manejarCambio}>
         <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            { props.equipos.map( (equipo, index)  => {
             return  <option key={index}>{equipo}</option>
            } ) }
         </select>
    </div>
}
/*la key index se puede llamar d cualq forma mientras cambiemos tmb el
nombre del parametro de la funcion map, lo mimso con equipo */

export default ListaOpciones