import React, {useContext} from 'react';
import { Chart } from "react-google-charts";
import {GivenDataContext} from '../contexts/GivenDataContext';

const SingleLevelChart = ({width,height,chartType,chartTitle,hAxisTitle,vAxisTitle}) => {
    const {givenData} = useContext(GivenDataContext);
    return (
        <div className="single-level-chart" >
        
            <center><h2 className="ui header">{chartTitle}</h2></center>
            <Chart
                width={width}
                height={height}
                chartType={chartType}
                loader={<div>Loading Chart</div>}
                data={givenData}
                options={{
                    title: chartTitle,
                    chartArea: { width: '80%' },
                    hAxis: {
                        title: hAxisTitle,
                        minValue: 0,
                    },
                    vAxis: {
                        title: vAxisTitle,
                    },
                    titlePosition: 'none',
                    colors: ['blue'],
                    bar: { groupWidth: "45%" },
                    legend:{position: 'none'}

                }}
            />
        </div>
    );
}
 
export default SingleLevelChart;