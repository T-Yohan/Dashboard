import React from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth , firestore } from '../firebase';
import {setDoc,doc} from "@firebase/firestore";  //importation pour la base de données

//redirection

import { useNavigate } from 'react-router-dom';


const Register = () => {

  const navigate = useNavigate()

const handleSubmit = async (event) => {

  //création de la référence de la collection

  event.preventDefault();  //bloque le raffraichissement de la page

console.log('event',event.target);
const {email , password , nom} = event.target; 







//création d'un user avec fireAuth
            createUserWithEmailAndPassword(auth , email.value , password.value)
            .then  ( async userCredential => {

console.log("userCredential" , userCredential)

            //Formatage des données de l'utilisateur

            const userInfo = {

              userEmail : email.value,
              userPassword : password.value,
              userNom : nom.value,

        };

        //enregistrement en base

        await setDoc(doc(firestore , "user",userCredential.user.uid),userInfo);

//redirection to Home
navigate("/");

            }).catch(err =>{
              console.log("error:", err);
            })

}

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <p className="py-6">Si tu n'es pas encore inscrit , c'est ici que ça se passe!</p>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Nom</span>
            </label>
            <input type="text" name='nom' placeholder="Nom" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" name='email' placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="password" className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Connexion</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary">Signup</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  </div>
  )
}

export default Register