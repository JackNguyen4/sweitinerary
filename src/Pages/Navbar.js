import react from 'react'
import './Styles/Navbar.css'

export default function Navbar() {

    return (
        <div class='nav'>
                <br></br>
                <a href='/Home' class='alist'>Home</a>
                <br></br>
                <a href='/Survey' class='alist'>Survey</a>
                <br></br>
                <a href='/Itinerary' class='alist'>Itinerary</a>
                <br></br>
                <a href='/Maps' class='alist'>Maps</a>
                <br></br>
                <a href='/Uber' class='alist'>Uber</a>
                <br></br>
        </div>
    )
}