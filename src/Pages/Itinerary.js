import React, { useEffect, useState } from 'react'
import './Styles/Itinerary.css'

export default function Itinerary() {

    const [data, setData] = useState()

  fetch('http://127.0.0.1:5000/parameters/48%20Baxter%20Street/Athens/GA/30602/5000/2')
   .then(response => response.text())
   .then(text => console.log(text))

    const day = 'February 14th'
    const sixam = 'eat leaves with raff',
    sixthirtyam = '',
    sevenam = '',
    seventhirtyam = '',
    eightam = '',
    eightthirtyam = '',
    nineam = '',
    ninethirtyam = '',
    tenam = '',
    tenthirtyam = 'Brunch',
    elevenam = '',
    eleventhirtyam = '',
    twelvepm = '',
    twelvethirtypm = '',
    onepm = '',
    onethirtypm = '',
    twopm = '',
    twothirtypm = '',
    threepm = '',
    threethirtypm = '',
    fourpm = '',
    fourthirtypm = '',
    fivepm = '',
    fivethirtypm = '',
    sixpm = '',
    sixthirtypm = '',
    sevenpm = '',
    seventhirtypm = '',
    eightpm = '',
    eightthirtypm = '',
    ninepm = '',
    ninethirtypm = '',
    tenpm = '',
    tenthirtypm = '',
    elevenpm = '',
    eleventhirtypm = '',
    twelveam = '',
    twelvethirtyam = '',
    oneam = '',
    onethirtyam = '',
    twoam = '',
    twothirtyam = '',
    threeam = '',
    threethirtyam = '',
    fouram = '',
    fourthirtyam = '',
    fiveam = '',
    fivethirtyam = ''

    return (
        <div>
            <center>
            <div class='out'>
                <div class='day'>
                    Itinerary Page
                    <br></br>
                    {day}
                </div>
                <div class='sixtoseven'>
                <hr class='mainhr'></hr>
                <div class='time'>6:00am</div> {sixam}
                <hr></hr>
                <br></br>
                <hr></hr> {sixthirtyam}
                <br></br>
                <hr></hr>
                <br></br>
                </div>
                <hr class='mainhr'></hr>
                <div class='time'>7:00am</div> {sevenam}
                <hr></hr>
                <br></br>
                <hr></hr> {seventhirtyam}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>8:00am</div> {eightam}
                <hr></hr>
                <br></br>
                <hr></hr> {eightthirtyam}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>9:00am</div> {nineam}
                <hr></hr>
                <br></br>
                <hr></hr> {ninethirtyam}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>10:00am</div>{tenam}
                <hr></hr>
                <br></br>
                <div class='brunch'>
                <hr></hr> {tenthirtyam}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>11:00am</div> {elevenam}
                <hr></hr>
                <br></br>
                </div>
                <hr></hr> {eleventhirtyam}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>12:00pm</div> {twelvepm}
                <hr></hr>
                <br></br>
                <hr></hr> {twelvethirtypm}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>1:00pm</div> {onepm}
                <hr></hr>
                <br></br>
                <hr></hr> {onethirtypm}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>2:00pm</div> {twopm}
                <hr></hr>
                <br></br>
                <hr></hr> {twothirtypm}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>3:00pm</div> {threepm}
                <hr></hr>
                <br></br>
                <hr></hr> {threethirtypm}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>4:00pm</div> {fourpm}
                <hr></hr>
                <br></br>
                <hr></hr> {fourthirtypm}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>5:00pm</div>{fivepm}
                <hr></hr>
                <br></br>
                <hr></hr> {fivethirtypm}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>6:00pm</div> {sixpm}
                <hr></hr>
                <br></br>
                <hr></hr> {sixthirtypm}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>7:00pm</div> {sevenpm}
                <hr></hr>
                <br></br>
                <hr></hr> {seventhirtypm}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>8:00pm</div> {eightpm}
                <hr></hr>
                <br></br>
                <hr></hr> {eightthirtypm}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>9:00pm</div> {ninepm}
                <hr></hr>
                <br></br>
                <hr></hr> {ninethirtypm}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>10:00pm</div> {tenpm}
                <hr></hr>
                <br></br>
                <hr></hr> {tenthirtypm}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>11:00pm</div> {elevenpm}
                <hr></hr>
                <br></br>
                <hr></hr> {eleventhirtypm}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>12:00am</div> {twelveam}
                <hr></hr>
                <br></br>
                <hr></hr> {twelvethirtyam}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>1:00am</div> {oneam}
                <hr></hr>
                <br></br>
                <hr></hr> {onethirtyam}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>2:00am</div> {twoam}
                <hr></hr>
                <br></br>
                <hr></hr> {twothirtyam}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>3:00am</div> {threeam}
                <hr></hr>
                <br></br>
                <hr></hr> {threethirtyam}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>4:00am</div> {fouram}
                <hr></hr>
                <br></br>
                <hr></hr> {fourthirtyam}
                <br></br>
                <hr></hr>
                <br></br>
                <hr class='mainhr'></hr>
                <div class='time'>5:00am</div> {fiveam}
                <hr></hr>
                <br></br>
                <hr></hr> {fivethirtyam}
                <br></br>
                <hr></hr>
                <br></br>
                <hr></hr>
            </div>
            <br></br>
            </center>
        </div>
    )
}