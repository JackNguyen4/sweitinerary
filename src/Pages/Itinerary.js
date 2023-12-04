import React, { useEffect, useState } from 'react'
import './Styles/Itinerary.css'

export default function Itinerary() {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch("/parameters/1745 Meadow Forest Ln/Duluth/Georgia/30097/5000/2")
            .then(res => res.json())
            .then(
                data => {
                    setData(data)
                    console.log(data)
                }
            )
        }, [])
    
        const timeSlots = [
            '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM',
            '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
            '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
            '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
            '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM', '12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM',
            '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM', '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM'
          ];
        
          const renderTimeSlot = (time) => (
            <div key={time}>
              <hr className='mainhr'></hr>
              <div className='time'>{time}</div>
              <hr></hr>
              <br></br>
              <div>{data[time] !== undefined ? data[time] : ''}</div>
              <br></br>
            </div>
          );
    

    

    return (
        <div>
            <center>
            <div class='out'>
                <div class='day'>
                    Itinerary Page
                    <br></br>
                </div>
                
                {timeSlots.map(renderTimeSlot)}

                
                
            </div>
            
            <br></br>
            <a href = "https://www.uber.com/global/en/sign-in/"><button class = 'button'>Uber</button></a>
            <br></br>
            <br></br>
            <button>Save Progress</button>
            <br></br>
            <br></br>
            </center>
            
        </div>
    )
}