import { useState } from 'react';
import { v4 as uuid } from "uuid";
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';

function App() {

 const [mostrarFormulario, actualizarMostrar2] = useState(true)


 const [colaboradores, actualizarColaboradores] = useState([{

  id:uuid(),
  equipo: "Front End",
  foto: "https://github.com/harlandlohora.png",
  nombre: "Harland Lohora",
  puesto: "Instructor",
  fav: true
},
{
  id:uuid(),
  equipo: "Programación",
  foto: "https://github.com/genesysaluralatam.png",
  nombre: "Genesys Rondón",
  puesto: "Desarrolladora de software e instructora",
  fav: true
},
{
  id:uuid(),
  equipo: "UX y Diseño",
  foto: "https://github.com/JeanmarieAluraLatam.png",
  nombre: "Jeanmarie Quijada",
  puesto: "Instructora en Alura Latam",
  fav: false
},
{
  id:uuid(),
  equipo: "Programación",
  foto: "https://github.com/christianpva.png",
  nombre: "Christian Velasco",
  puesto: "Head de Alura e Instructor",
  fav: false
},
{
  id:uuid(),
  equipo: "Innovación y Gestión",
  foto: "https://github.com/JoseDarioGonzalezCha.png",
  nombre: "Jose Gonzalez",
  puesto: "Dev FullStack",
  fav: false
}]) //lo puedo iniciar como un arr vacio para q luego
 // se rellene co los datos, para registrar una lista
 //Ternario ---> condicion ? semuestra : nosemuestra
 //arr de equipos
 const [equipos, actualizarEquipos] = useState([

  {
    id:uuid(),
    titulo:  "Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9",
    
  },
  {
    id:uuid(),
    titulo: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF",
    
  },
  {
    id:uuid(),
    titulo:  "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2",
    
  },
  {
    id:uuid(),
    titulo:  "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8",
    
  },
  {
    id:uuid(),
    titulo:  "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5",
    
  },
  {
    id:uuid(),
    titulo:  "Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9",
    
  },
  {
    id:uuid(),
    titulo:  "Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF"
  }
])

console.log(uuid())

 const cambiarMostrar = () => {
  actualizarMostrar2(!mostrarFormulario) //esta fucion es llamada cuando se toca el boton
  //y como se inicia en true cuando la declaramos, se va a abrir la pestaña. Luego viene a la funcion
//y como está en negación o sea en not(false), se va a cerrar(el onclick está dentro del archivo miorg)
 }

 //registrst colaborador

 const registrarColaborador = (colaborador) => {
 const nuevoColaborador = {
   ...colaborador, 
      id: uuid()  
 } 
      console.log("nuevo colaborador", colaborador)
      //spread operator, hace una copia de los valores actuales y 
      //agregamos lo q necesitamos. se hace la copia con 3 puntos iniciales y
      // dsp lo q queremos q se agregue
      //en este caso colaborad es un array vacio: useState([]). 
      //luego agregamos los datos del colaborador.
      actualizarColaboradores([...colaboradores, nuevoColaborador])
 }

//Eliminar colaborador



const eliminarColaborador = (id) => {

  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)

  console.log("nuevos Colaboradores",nuevosColaboradores)
  actualizarColaboradores(nuevosColaboradores)


}
    //esta funcion toma el arr de colaboradores y filtra en el arr.
    // cuando le famos click a la cruz nos retorta un arr de colaboradores distinto 
    // al id q le pasamos por parámetro. Es decir, nos va a devolver un arr
    //nuevo con los ids de los colaboradores que no eliminamos
    //porque no le dimos a la crucecita. Solo se eliminan los q clickeamos en eliminar.
    //Luego llamamos a la funcion actualizarColabiradores() que hace la copia
    // del arr de colaboradores y retorna arr nuevo con los datos actualixados,
    // coomo parametro le pasamos la const nuevosColaboradores que es la funcion
    //que filtra el id distinto y lo elimina.

//hacemos q el color cambie través de id pero podriamos cambiarlo independientemente
//usando el titulo: programacion, ux y diseño, etc. Pero eso podria
//generar confusion si generamos otro equipo con el mismo nombre
//por error. Los ids se generaron pq agregamos un paquete al pack.json
// q instalamos en la terminal, es una fucnion que genera ids unicos.
//lo imprtamos en app.js: import { v4 as uuid } from "uuid"
//Actualizar color de equipo
const actualizarColor = (colorTarget, id) => {
    console.log("Actualizar:  ", colorTarget, id)
    const equiposActualizados = equipos.map((equipito) => {
      if(equipito.id === id){
        equipito.colorPrimario = colorTarget
      }
      return equipito
    })
    actualizarEquipos(equiposActualizados)
}
/*esta función se la va a aplicar a todos los equipos que existen en mi arreglo.
 Va a verificar si el equipo al cual estoy modificando o el usuario lo está modificando, 
 el color satisface justamente este if, pues bueno, lo actualiza, y simplemente regresa 
 justamente el equipo, en este caso el equipo modificado */

//Crear Equipos
const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
}
//hacemos copia de equipos y nos crea un objeto con una copia del equipo
// nuevo q se genere y su id. Y se va a generar una nueva opcionen lisat opciones
// cuando agregemos un nuevo equipo en el formulario para crear equipo pq en formulario.js
// cuando creamos el componente listaOpciones le agregamos esta funcion de actualizarEquipo:
//     <ListaOpciones valor={equipo}
//     actualizarEquipo={actualizarEquipo}
// 

const like = (id) => {
console.log(id)
const colaboradoresActualizados = colaboradores.map((colaborador) => {
  if(colaborador.id === id) {
    //si el colaborador q clickeamos es igual al id, colaborador.fav(está en el arr de colaboradores,
    //donde le asignamos fav:true o fav: false) se convierta
    //en la negacion del mismo colaborador.fav, es para pasar de true a false y viceversa
    colaborador.fav = !colaborador.fav 
  }
  return colaborador
})
actualizarColaboradores(colaboradoresActualizados)
}


  return (
    <div>
     {/* {Header()}
     <Header></Header> */}
     <Header/>
     {mostrarFormulario === true ? 
     <Formulario equipos= {equipos.map((equipo) => equipo.titulo)}
     registrarColaborador={registrarColaborador}
     crearEquipo={crearEquipo}
     /> : <></>
     
     
    }
         
         <MiOrg cambiarMostrar= {cambiarMostrar}/>
{/*   <></> estas tags son para q 
     //no haga nada visualmente cuando llegue al else /*equipos.map retorna lo que le pasemos dsp del return,  en este caso le pedimos q retorne el componente  <Equipo/>, 
     pero podemos crear mas arrays de objetos y hacer mas funciones que retornen cualq otro cpmponente, por ej
           const equis = [
          {
              titulo:  "bla"
          }
            ]  {
              equis.map( () => {
                  return  <Header/>
              })
              }
En este caso nos devolvería dos <Header/>. !!!!  IMPORTANTE  ---------- >>>>>>>>>> Estos objetos no se van a ver en la interfaz, sino en la parte de componentes en las herramientas del desarrollador.*/ }

     { 
     equipos.map( (equipo) => {
        return  <Equipo 
        datos={equipo}
         key={equipo.titulo}
         colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)
     }
        eliminarColaborador = {eliminarColaborador} // eneste caso le pongo el mismo nombre
        //porq cuando lo desectructuro en colabprador.js necesito llamarlo
        //con el mismo nombre de la funcion:     
        //      const {colorPrimario, eliminarColaborador} = props
    //         return <div className="colaborador">
    //         <span onClick={eliminarColaborador}>D</span>
         actualizarColor={actualizarColor}
         like={like}
         /> 
         
        //datos es igual a cada uno de los obj del array,
        //guardamos en esa variable los obj del array y pedimos q se retorne ese componente.
        //dsp mandamos a llamar a acada titulo dentro del objeto para tener una referencia
        // mas clara q se ve en la parte de componentes dentro de herr del desarrollador
        // equipo es literalmente cada elemento dentro de nuestro const equipos,
        //un elemento equipo sería:
  //          {
  //   titulo:  "Programación",
  //   colorPrimario: "#57C278",
  //   colorSecundario: "#D9F7E9",

  //         } entonces equipo es cada elemento dentro del array.
  
                               }
    )}

    <Footer />

    </div>
  );
}

export default App;
