import React from 'react';
import '../App.css'; // Assuming your CSS is in App.css

const Main = () => {
    return (
        <div className="main">
            <div className="head2">
                <span className="filter"><b>Filters</b></span>
                <span className="vertical"></span>
                <div className="dropdowns">
                    <div className="by">
                        <div id="by">Created By</div>
                        <select value="name" className="all">
                            <option>All</option>
                        </select>
                    </div>
                    <div className="date">
                        <div id="date">Published Date</div>
                        <select value="name" className="selectdate">
                            <option>Select Date</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="search">
                <span className="text">Search</span>
                <input type="text" placeholder="  Type here" />
                <span className="searchicon"><i className="fas fa-search"></i></span>
            </div>
        </div>
    );
};

export default Main;
