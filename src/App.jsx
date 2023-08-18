import { useEffect, useState } from "react";
import "./App.css";
import Public from "./Public";
import Private from "./Private";



//Importation Firebase

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


function App() {

  useEffect(()=>{

console.log("app  chargé");
onAuthStateChanged(auth,(user)=>{

  user !=null?setIsConnect(true) : setIsConnect(false)

console.log('user:',user);  //souscription au changement d'état de l'authentification

})
  }, [])  //au chargement de mon application
  const [isConnect, setIsConnect] = useState(false);

  return (
    <>
      {isConnect? <Private /> : < Public /> }
    </>
  );
}

export default App;
