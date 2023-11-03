import React, { useState } from 'react'
import './Styles/Survey.css'
import './Components/Button.css'
import {useNavigate} from 'react-router-dom'

export default function Survey() {

    const [selectedOption, setSelectedOption] = useState('')
    const [selectedOptionTwo, setSelectedOptionTwo] = useState('')
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const navigate = useNavigate();

    function handleClick(e) {
        navigate('/Itinerary')
    }


    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const handleOptionChangeTwo = (e) => {
        setSelectedOptionTwo(e.target.value)
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleStateChange = (e) => {
        setState(e.target.value);
    }

    const handleZipChange = (e) => {
        setZip(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log(address)
        console.log(city)
        console.log(state)
        console.log(zip)
        console.log(selectedOption)
        console.log(selectedOptionTwo)
    }

    return (
        <div>
        <div class='the'>
            <h2 class='h2'> Please answer these questions so that I can get to know you better!!!
            </h2>
            <form onSubmit={handleSubmit}>
            
            
            <div>
                Please enter the address of where you are staying.
                <div class = 'something'> 
                <br></br>
                <input type = "text" name = "name" placeholder = "Street" value={address} onChange={handleAddressChange}/>
                <br></br>
                <br></br>
                <input type = "text" name = "name" placeholder = "City" value={city} onChange={handleCityChange}/>
                <br></br>
                <br></br>
                <input type = "text" name = "name" placeholder = "State" value={state} onChange={handleStateChange}/>
                <br></br>
                <br></br>
                <input type = "text" name = "name" placeholder = "Zip Code" value={zip} onChange={handleZipChange}/>
                <br></br>
                <br></br>
                </div>
            </div>
            <div>
            What is your preferred travel radius?
        <div class='ok'>
        
        <input type="radio" id="one" class="radius" value="1609"
            checked={selectedOption === '1609'}
            onChange={handleOptionChange}/>
        <label for="one">1 mile</label><br></br>
        <input type="radio" id="five" class="radius" value="8047"
            checked={selectedOption === '8047'}
            onChange={handleOptionChange}/>
        <label for="five">5 miles</label><br></br>
        <input type="radio" id="ten" class="radius" value="16093"
            checked={selectedOption === '16093'}
            onChange={handleOptionChange}/>
        <label for="ten">10 miles</label><br></br>

            <br></br>
        </div>
            </div>
            {/*
            <div class='typeoffood'>
                What type of food do you like?
                
            </div>
            <div class=''>

            <input type="checkbox" id="italian" name="italian" value="ITALIAN"/>
            <label for="italian">Italian</label><br></br>
            <input type="checkbox" id="asian" name="asian" value="ASIAN"/>
            <label for="asian">Asian </label><br></br>
            <input type="checkbox" id="hispanic" name="hispanic" value="HISPANIC"/>
            <label for="hispanic">Hispanic</label><br></br>
            <input type="checkbox" id="american" name="american" value="AMERICAN"/>
            <label for="american">American</label><br></br>

            <br></br>
            </div>
            */}
            <div>
            What is your preferred price range?
            <div class='price'>

            <input type="radio" id="$" class="price" value="1"
            checked={selectedOptionTwo === '1'}
            onChange={handleOptionChangeTwo}/>
            <label for="$">$</label><br></br>
            <input type="radio" id="$$" class="price" value="2"
            checked={selectedOptionTwo === '2'}
            onChange={handleOptionChangeTwo}/>
            <label for="$$">$$</label><br></br>
            <input type="radio" id="$$$" class="price" value="3"
            checked={selectedOptionTwo === '3'}
            onChange={handleOptionChangeTwo}/>
            <label for="$$$">$$$</label><br></br>

            </div>
        </div>
        
            <br></br>
            <button class='button' type='submit' onClick={(handleClick)}>Submit</button>
            </form>
        </div>
        <br></br>

        </div>
            
    )
}