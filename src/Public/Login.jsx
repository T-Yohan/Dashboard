import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {

const handleSubmit = (event) => {

  event.preventDefault();  //bloque le raffraichissement de la page

console.log('event',event.target);
const {email , password} = event.target; //récupération des données du formulaire
console.log('email:',email.value,
            'password:',password.value)


//connexion d'un user avec firebase
            signInWithEmailAndPassword(auth , email.value , password.value)
            .then(userCredential => {

console.log("userCredential" , userCredential)


            }).catch(err =>{
              console.log("error:", err);
            })

}

  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">Bienvenue! Connecte-toi!</p>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
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
              <a href="/Register" className="label-text-alt link link-hover">Inscription</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  </div>
  )
}

export default Login