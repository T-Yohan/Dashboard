import { useEffect, useState } from "react";
import "./App.css";
import Public from "./Public";
import Private from "./Private";



//Importation Firebase

import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import Loading from "./common/loading";


function App() {

  const [isConnect, setIsConnect] = useState(false);
  const [isLoading, setIsLoading] = useState(true); //lancer l'affichage du loading

  useEffect(()=>{

console.log("app  chargé");
onAuthStateChanged(auth,(user)=>{

  user !=null?setIsConnect(true) : setIsConnect(false);

  setIsLoading(false);  //changer l'état du loading pour stopper l'affichage

console.log('user:',user);  //souscription au changement d'état de l'authentification

})
  }, [])  //au chargement de mon application


  return (
    <>
      {
        isLoading? <Loading/> :
        isConnect? <Private /> : < Public /> 
      }
    </>
  );
}

export default App;
