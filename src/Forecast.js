import React, {Component} from 'react';
import './Forecast.css'
import axios from 'axios';
import CitiesList from './CitiesList';
import ButtonsPanel from './ButtonsPanel';

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

    sortTempDesc = () => {
        let currentData = this.state.filteredCitiesList;

        currentData.sort(function ( a, b ) {
            if ( Number(a.temperatura) > Number(b.temperatura) ){
              return -1;
            }
            if (Number(a.temperatura) < Number(b.temperatura) ){
              return 1;
            }
            return 0;
          })

          this.setState({filterCitiesList:currentData});
    }

    sortTempAsc = () => {
        let currentData = this.state.filteredCitiesList;

        currentData.sort(function ( a, b ) {
            if ( Number(a.temperatura) < Number(b.temperatura) ){
              return -1;
            }
            if (Number(a.temperatura) > Number(b.temperatura) ){
              return 1;
            }
            return 0;
          })

          this.setState({filterCitiesList:currentData});
    }

    render() {
        return (
            <div className="Weather">
                <button onClick={this.filterCitiesList}>Sortuj Alfabetycznie</button>
                <ButtonsPanel tempDescMethod={this.sortTempDesc}/>
                <button onClick={this.sortTempAsc}>Sortuj Od Najzimniejszego do Najcieplejszego</button>    
                <input ref={element => this._inputFilter = element} onChange={this.filterCitiesList} type="text" placeholder="Szukaj miasta"/>
                <CitiesList citiesList={this.state.filteredCitiesList}/>
                
            </div>
        )
    }
}

export default Forecast;
