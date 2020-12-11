import React from 'react';
import '../css/LeftSideBar.css'
const LeftSideBar = () => {
   
    return (
        <div className="left-sidebar">
            <label className="active"><i className="table icon"></i>Dashboard</label>
            <label><i className="adjust icon"></i>Assets</label>
            <label><i className="sliders horizontal icon"></i>Tracker</label>
            <label><i className="calendar alternate icon"></i>Planning & Advisory</label>
        </div>
    );
}
 

export default LeftSideBar;