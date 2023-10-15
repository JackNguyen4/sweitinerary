import React from 'react';
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


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