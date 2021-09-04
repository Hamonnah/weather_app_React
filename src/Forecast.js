import React, {Component} from 'react';
import './Forecast.css'
import axios from 'axios';
import CitiesList from './CitiesList';

class Forecast extends Component {

    constructor(props) {
        super(props);

        this.state = {
            citiesList: [],
            filteredCitiesList: []

        };
    }

    getWeatherData = () => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop')
        .then((response) => {

            this.setState({citiesList: response.data
        
            })
            this.filterCitiesList();
        });
       
    }

    componentDidMount() {
        this.getWeatherData();
        
    }

    filterCitiesList = () => {
        this._inputFilter.value = this._inputFilter.value.trim().charAt(0).toUpperCase() + this._inputFilter.value.slice(1);

       

        this.setState((state) => {
            let newFilteredCitiesList = state.citiesList.filter((weatherObj) => {
                return(weatherObj.stacja.includes(this._inputFilter.value));
            });

            return({filteredCitiesList: newFilteredCitiesList})
        });


       
    }

    render() {
        return (
            <div className="Weather">
                <input ref={element => this._inputFilter = element} onChange={this.filterCitiesList} type="text" placeholder="Szukaj miasta"/>
                <CitiesList citiesList={this.state.filteredCitiesList}/>
            </div>
        )
    }
}

export default Forecast;


/* getWeatherData = () => {
    axios.get('https://danepubliczne.imgw.pl/api/data/synop')
    .then((response) => {

        this.setState(() => {
            let citiesList = {citiesList: response.data}
            let newCitiesList = []
            
            let newCitiesObj = {
                stacja: citiesList.stacja,
                temperatura: citiesList.temperatura
            }

            if (newCitiesObj.temperatura > 10) {
                newCitiesObj.cssClass = 'green';
            }
            newCitiesList.push(newCitiesObj);

            return ({citiesList: newCitiesList})
        })

        
        this.filterCitiesList();
    }); */