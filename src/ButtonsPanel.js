import React from 'react';
import './ButtonsPanel.css';

function ButtonsPanel(props) {

    return(
        <div className="buttons-panel">
            <button onClick={props.tempDescMethod}>Sortuj Od Najcieplejszego do Najzimniejszego</button>
            {/* <button onClick={props.filterCitiesList}>Sortuj Alfabetycznie</button>
            <button onClick={props.sortTempDesc}>Sortuj Od Najcieplejszego do Najzimniejszego</button>
            <button onClick={props.sortTempAsc}>Sortuj Od Najzimniejszego do Najcieplejszego</button>   */}
        </div>
    ); 
}

export default ButtonsPanel;