import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "./styles.css";



const Collapser = () => {
  // const products = useSelector(state=>state.items.map((e,i)=><div key={i}>{e.title}</div>))
  const [ show, setShow ] = useState(false);
  const [ incoming, setIncoming ] = useState([])
  
  const items = useSelector(state=>state.items);
  const addedItems = useSelector(state=>state.addedItems);

  const handleOpen = () => {
    setShow(!show);
  };

  // const handleMore = (element) => {
  //   // evalúo si ya hay un producto como ése
    // if(incoming.some(e=>e.id===element.id)) {
  //     // averiguo cuántos había seleccionados
  //     let elementCopy = incoming.filter(e=>e.id===element.id)[0];
  //     console.log(elementCopy)
  //     // a dicha cantidad, le sumo 1 y se lo asigno al nuevo elemento
  //     elementCopy.amount += 1;
  //     // saco el elemento que he modificado para que no se me repita
  //     let arrayCopy = incoming.filter(e=>e.id!=element.id);
  //     console.log(arrayCopy)

  //     // y guardo cambios en el estado
  //     setIncoming([...arrayCopy,elementCopy])
  //   } else {
  //     element.amount = 1;
  //     setIncoming([element]) 
  //   }
  // }

  // const handleLess = (index) => {

  // }
  

  return (
    <div id="contenedor-accordian" className="accContainer">
      <div id="accordian" className="accordian">
        <div id="accordian-header" className="accordian-header" onClick={handleOpen}>
          <div id="">¿Qué quieres comer hoy?</div>
          <div className="sign">{show ? '-' : '+'}</div>
          </div>
            {show && (
              <div className="accordian-body">
                {items.map((e,i)=>{return  <div className="accButton"
                                                key={i}
                                                id={`product-${i}`}>
                                                <p> {e.title} </p>
                                                <button onClick={()=>console.log(e)}> + </button>
                                                <button onClick={()=>console.log(e)}> - </button>
                                              </div>
                })}
              </div>
            )}
          </div>
    </div>
  );
}
export default Collapser