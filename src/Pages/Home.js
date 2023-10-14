import React from 'react'
import './Styles/Home.css'
import './Components/Button.css'
import {useNavigate} from 'react-router-dom'
import bg from './Images/background.jpg'
import raff from './Images/raff.png'

export default function Home() {

    const navigate = useNavigate();

    function handleClick(e) {
        navigate('/Survey')
    }

    return (
        <div>
            <header>
                <center>
                <img src={bg} class='bg' />
                    <div><br></br></div>
                    <div class='box'>
                        <h1 class='typed'>Welcome to Raffs Safari</h1>
                        <img src={raff} class='raff' />
                        <h2>Hi! I'm Raff and I am here to assist you in your travels!</h2>
                        <button class='button' onClick={handleClick}>Get Started</button>
                    </div>
                </center>
            </header>

            <footer>
                <br></br>
                <br></br>
                <a href='/Contact' class='foot'>Contact</a>
                <br></br>
                <a href='/AboutUs'class='foot'>About Us</a>
            </footer>
        </div>
    )
}