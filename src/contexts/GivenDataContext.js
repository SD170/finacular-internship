import React, {createContext,useState} from 'react';

export const GivenDataContext = createContext();

const GivenDataContextProvider = (props) => {
    const [givenData, setGivenData] = useState([
        ['No of years', 'Asset Balance (In Lakhs)'],
        ['1',180],
        ['2',230],
        ['3',310],
        ['4',380],
        ['5',490],
        ['6',590],
        ['7',630],
        ['8',780],
        ['9',810],
        ['10',950],
    ])

    const nextTenYear = (...data) =>{
        setGivenData([
            givenData[0],
            data[0],
            data[1],
            data[2],
            data[3],
            data[4],
            data[5],
            data[6],
            data[7],
            data[8],
            data[9]
        ])

    }
    

    return (
        <GivenDataContext.Provider value={{givenData,nextTenYear}}>
            {props.children}
        </GivenDataContext.Provider>
    );
}
 
export default GivenDataContextProvider;