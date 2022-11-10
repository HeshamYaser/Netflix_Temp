import React from "react";
import { useState } from "react";
import Signup from "../Signup/Signup";
import "./Login.css"

function Login() {

    const[signIn , setSignIn] = useState(false);

  return (
    <div className="login_screen">
      <div className="login_background">
        <img
          className="login_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="login_button" onClick= {()=> setSignIn(true)}>Login</button>
        <div className="login_gradiant" />
      </div>
      <div className="login_body">
        {signIn ? (
            <Signup />
        ): (
            <>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>

                <div className="login_input">
                    <form>
                        <input type="email" placeholder="Email Adress" />
                        <button onClick={()=> setSignIn(true)} className="button_input">GET STARTED</button>
                    </form>
                </div>
            </>
        )}
      </div>
    </div>
  );
}

export default Login;
