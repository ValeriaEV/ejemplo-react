import { useState } from "react";


function MiBoton(){
  const [contador, setContador] = useState(0);
  const [isGreen, setIsGreen] = useState(true);

  function handleClick(){
    setIsGreen(!isGreen);
    setContador(contador+1);
  }

  const color = isGreen ? "green" : "red";

  return(
    
    <button onClick={handleClick} style={{ backgroundColor: color }}>Se hizo {contador} clicks</button>
  );
}


export default function MyApp(){
  return(
    <div>
      <MiBoton/>
      <MiBoton/>
    </div>
   
  );
}

