import React from 'react';
import CardLayout from './CardLayout';


const CardCanvas = () => {
    return (
        <div className="card-canvas">
            <div className="ui link cards">
                <CardLayout 
                    header="Asset Balance"
                    iconClass="balance scale"
                    inputLable='true' 
                    title1="Enter Amount: "
                    value1="1,25,000"
                    title2="Last Updated: "
                    value2="3 Dec"
                />
                
                <CardLayout 
                    header="Growth Rate"
                    iconClass="chart line"
                    title1="Enter Growth Rate: "
                    value1="9.3%"
                    title2="Inflation: "
                    value2="6%"
                />                
                <CardLayout 
                    header="Financial Independance"
                    iconClass="accessible icon"
                    inputDisable="true"
                    title1="Age: "
                    value1="45 Years"
                    title2="Optimized: "
                    value2="6%"
                    condition="true"
                />                
                <CardLayout 
                    header="Average Expenses"
                    iconClass="credit card outline"
                    inputDisable="true"
                    title1="Amount: "
                    value1="25,000"
                    title2="3 months avg: "
                    value2="₹ 40,000"
                />                
                <CardLayout 
                    header="Major Investments"
                    iconClass="balance scale"
                    inputDisable="true"
                    title1="Returns generated per month: "
                    value1="1,25,000"
                    // title2="3 months avg: "
                    // value2="₹ 40,000"
                />
            </div>
        </div>
    );
}
 
export default CardCanvas;