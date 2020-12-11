import React from 'react';

const RightPanalCard = ({imgLink, description, buttonValue}) => {
    return (
        <div className="ui card">
            <div className="image">
                <img alt="img" src={imgLink}/>
            </div>
            <div className="content">
                <div className="description">
                    {description}
                </div>
                <br/>
                <button className="ui primary button"  style={{backgroundColor:"blue"}}>{buttonValue}</button>
            </div>
        </div>
    );
}



export default RightPanalCard;