import React from 'react';
import './CitiesList.css'

function CitiesList(props) {

    let citiesList = props.citiesList;

   let liElements = citiesList.map((weatherObj) => {

    return(
       <li key={weatherObj.id_stacji}>
           <span className="City">{weatherObj.stacja} </span>
           <span className={(weatherObj.temperatura>20)?'red' : 'blue'}>Temperatura: {weatherObj.temperatura}&ordm;C </span>
           <span className="Humidity">Wilgotność: {weatherObj.wilgotnosc_wzgledna}&#x00025; </span>
           <span className="Pressure">Ciśnienie: {weatherObj.cisnienie} hPa </span>
       </li> 
    )
   })
    console.log(citiesList);

    return(
        <div className="CitiesList">
            <ul className="TheList">
                {liElements}
            </ul>
        </div>
    );
}

export default CitiesList;