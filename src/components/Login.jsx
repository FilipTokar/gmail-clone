import React from 'react'
import { Button } from '@mui/material'
import { auth, provider } from '../features/firebase'
import { login } from '../features/userSlice'
import { useDispatch } from 'react-redux'

export default function Login() {
    const dispatch= useDispatch()

    function signIn () {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL,
            }))
        })
        .catch(error => alert(error.message))
    }
  return (
    <div className='login'>
      <div className="login__container">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="" />
        <Button
        onClick={signIn} 
        className='login__btn' 
        variant='contained'>
        Login
        </Button>
      </div>
    </div>
  )
}
