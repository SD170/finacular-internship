import React from 'react';
import RightPanalCard from './RightPanalCard';
import '../css/RightSideBar.css'
const RightSideBar = () => {
   
    return (
        <div className="right-sidebar">
            <label className="active"><i className="bolt icon"></i>Actions</label>
            <div className="right-card-pad">
                <RightPanalCard 
                    imgLink="https://thumbs.dreamstime.com/z/cute-cartoon-little-boy-plant-tree-cute-cartoon-little-boy-plant-tree-isolated-white-background-136886921.jpg"
                    description="Understading the power of compounding !!"
                    buttonValue="Learn Now"
                />                
                <RightPanalCard 
                    imgLink="https://thumbs.dreamstime.com/z/saving-money-business-finance-cartoon-personal-balance-calculate-elements-vector-illustration-graphic-design-153331489.jpg"
                    description="Track all you expenses on daily bais !!"
                    buttonValue="Track Now"
                />

            </div>
        </div>
    );
}
 

export default RightSideBar;