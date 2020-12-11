import React from 'react';
import SingleLevelChart from './SingleLevelChart';

const ChartCanvas = () => {

    return (
        <div className="chart-canvas">
            <div className="ui placeholder segment">
                <SingleLevelChart 
                    width="57vw" 
                    height="45vh"
                    chartType="ColumnChart" 
                    chartTitle="Annual Projection" 
                    hAxisTitle="No of years" 
                    vAxisTitle="Asset Balance ( In Lakhs )" 
                />
            
            
            </div>
        </div>
    );
}
 
export default ChartCanvas;