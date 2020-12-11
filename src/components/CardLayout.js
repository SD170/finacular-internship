import React from 'react';

const CardLayout = ({header,iconClass,title1,title2,value1,value2,inputLable,inputDisable,condition}) => {
    return (
        <div className="ui raised link card">
            <div className="content">
                <div className="header">{header}</div>
                <hr/>
                <i className={`right floated big ${iconClass} icon`}></i>
                <div className="meta">
                    {title1}
                </div>
                <br />
                <div className="ui labeled input">
                    {inputLable?<label htmlFor="amount" className="ui label">₹</label>:<div></div>}
                    {inputDisable?<input type="text" placeholder="Amount" id="amount" value={value1} disabled/>:<input type="text" placeholder="Amount" id="amount" value={value1}/>}
                    
                </div>
                <br />
                <br />
                <div className="extra content">
                    <span className="floated">
                        <strong>{title2}</strong> 
                        {condition?conditionJsx():value2}
                    </span>
                </div>
            </div>
        </div>
    );
}

const conditionJsx =() =>{
    return(
        <div className="ui buttons">
            <button className="ui primary button"  style={{backgroundColor:"blue"}}>Yes</button>
            <button className="ui button">No</button>
        </div>
    );
}

export default CardLayout;