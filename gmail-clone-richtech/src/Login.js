import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth, provider } from './firebase'
import "./Login.css"

function Login() {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img
                src="https://firebasestorage.googleapis.com/v0/b/clone-richtech.appspot.com/o/Rmail-transparent.png?alt=media&token=39637d68-7d60-4bf7-a5a6-885cb3fcf0c3"
                alt=""/>
                <Button variant="contained" color="primary" onClick={signIn}>Login</Button>
            </div>
        </div>
    )
}

export default Login
