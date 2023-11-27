import React, { useEffect, useState } from 'react';
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


function Login() {
  const [user, setUser] = useState({});
  const google = window.google

  //get JWT ID
  function handleCallBackResponse(response){
    console.log("Encoded JWT ID token: "+ response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
  google.accounts.id.initialize({
    client_id: "1005325099127-qdh6mv05e08eqtqhb6v4o31t0vb9m43d.apps.googleusercontent.com",
    callback: handleCallBackResponse
  });

  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme: "outline", size: "large"}
  )

  //google.accounts.id.prompt();
  }, []);

  //if no user: show sign in button
  //if we have a user: show the log out button
  return( 
    <div className="login">
      <div id="signInDiv"></div>
      { Object.keys(user).length != 0 &&
          <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
      }
      
      { user &&
        <div>
       
        <h3>{user.name}</h3>
        </div>
      }
    </div>
  );

}
export default Login;

/*
function Login() {
  return (
    <GoogleLogin
  onSuccess={credentialResponse => {
    const credentialResponseDecoded = jwt_decode(
        credentialResponse.credential
    );
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
    />
  );
}

export default Login;

*/