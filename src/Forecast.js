import React, {Component} from 'react';
import './Forecast.css'
import axios from 'axios';
import CitiesList from './CitiesList';

class Forecast extends Component {

    constructor(props) {
        super(props);

        this.state = {
            citiesList: []
        };
    }

    getWeatherData = () => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop')
        .then((response) => {
            const tickers = response.data;

            this.setState((state) => {
                let newCitiesList = [];

                for (const [ticker, weatherObj] of Object.entries(tickers)) {
                    let newWeatherObj = {
                        ticker: ticker,
                        stacja: weatherObj.stacja,
                        temperatura: weatherObj.temperatura,
                        wilgotnosc_wzgledna: weatherObj.wilgotnosc_wzgledna,
                        cisnienie: weatherObj.cisnienie,
                    }

                    newCitiesList.push(newWeatherObj);
                }

                return({
                    citiesList: newCitiesList
                })
            })
        })
    }

    componentDidMount() {
        this.getWeatherData();
    }

    render() {
        return (
            <div className="Weather">
                <CitiesList citiesList={this.state.citiesList}/>
            </div>
        )
    }
}

export default Forecast;