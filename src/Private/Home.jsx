import React from 'react'
import {signOut} from 'firebase/auth'
import {auth} from '../firebase'

const home = () => {

const logout = () => { 

signOut(auth);

  console.log('logout');

}


  return (
          <div>Home 
<button onClick={logout}> Logout </button>
      <a href='/Compte'>
      Go
      </a>
    </div>
  )
}

export default home