import React from 'react';
import { useRef } from 'react';
import { auth } from "../../firebase" ;
import "./Signup.css"

function Signup() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch((error)=>{
            alert(error.message)
        })
    };

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=> {
            alert(error.message);
        })
    }

  return (
    <div className='signup'>
        <form>
            <h1>Sign in</h1>
            <input type="email" placeholder='Email' ref={emailRef} />
            <input type="password" placeholder='Passwird' ref={passwordRef} />
            <button type='submit' onClick={signIn}>Sign In</button>
            <h4>
                <span className='signup_q'>New to Netflix? </span>
                <span className='sign_now' onClick={register}>Sign Up Now.</span>
            </h4>
        </form>
    </div>
  )
}

export default Signup