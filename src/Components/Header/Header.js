import React from 'react';
import './Header.css';

const header = props => {

    return (
        <div className="Header">
            <br />
            <br />
            <h1 className="title">{props.titles}</h1>

            <div className="addNew">
                <input type="text" placeholder="Input Placeholder" />
                <button className="addBtn">Add new</button>
            </div>
        </div>
    );

}

export default header;