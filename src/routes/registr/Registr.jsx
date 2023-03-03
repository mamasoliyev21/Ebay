import React, { useState } from 'react'
import './registr.scss'
import {FcGoogle} from 'react-icons/fc'
import instance from '../../api/instance'
import { auth, provider } from '../../firebase/firebaseconfig'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
const Registr = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const createAccountGoogle = ()=>{
    auth.signInWithPopup(provider)
    .then(response => console.log(response))
    .catch(err => console.error(err))
  }

  const createEmail = (e) =>{
  e.preventDefault();
    instance.post("/users", userdata)
    .then(response => {
      // console.log(response);
      console.log(response.data);
      if(response.data?.email){
        // send to store 
           dispatch({email: response.data.email,
            type: "ADDRESS_EMAIL"
          })
        }
        history.push("/")
      })
    .catch(err => console.error(err))
  }
  const [userdata , setUserData] = useState({
    email: '',
    password: '',
    avatar: "",
    name : ''
  })
  return (
    <div className='registr'>
        <div className="registr-wrapper">
         <div className="registr-wrapper__left">
         <form onSubmit={createEmail}>
           <div className="inpt-flex">
           <label htmlFor="">
            <input type="text"  placeholder='First name' onChange={e => setUserData({...userdata, name: e.target.value})}/>
            </label>
           </div>
           <label htmlFor="">
           <input type="email" placeholder='Email' onChange={e => setUserData({...userdata, email: e.target.value})}/>
           </label>
           <label htmlFor="">
           <input type="url" placeholder='avatar' onChange={e => setUserData({...userdata, avatar: e.target.value})}/>
           </label>
           <label htmlFor="">
           <input type="password" placeholder='password'  onChange={e => setUserData({...userdata, password: e.target.value})}/>
           </label>
            <p>By Creating an account, you agree to our User Agreement  and acknowledge reading our <strong>User</strong> <strong>Privacy Notice</strong> .</p>
            <button  type='submit' className='registr-btn'>Create account</button>
          </form>
         </div>
         <span>or</span>
         <div className="registr-wrapper__bside">
          <button  onClick={createAccountGoogle} className="btn-google">
            <FcGoogle className='google-icon'/>
             Continue with Google
          </button>
         </div>
        </div>
    </div>
  )
}

export default Registr