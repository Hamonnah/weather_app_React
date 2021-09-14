import React from 'react';
import './ButtonsPanel.css';

function ButtonsPanel(props) {

    return (
        <div className="buttons-panel">
            <button onClick={props.tempDescMethod}>Sort in Descending Order</button>
            <button onClick={props.tempAscMethod}>Sort in Ascending Order</button>
            <button onClick={props.filterCitiesListMethod}>Sort in Alphabetical Order</button>
        </div>
    );
}

export default ButtonsPanel;