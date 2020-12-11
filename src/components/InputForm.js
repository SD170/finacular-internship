import React, { useState, useContext } from 'react';
import {GivenDataContext} from '../contexts/GivenDataContext';
import '../css/InputForm.css';

const InputForm = () => {


    const {nextTenYear} = useContext(GivenDataContext);

    const [inputData1, setInputData1] = useState(['1','']);
    const [inputData2, setInputData2] = useState(['2','']);
    const [inputData3, setInputData3] = useState(['3','']);
    const [inputData4, setInputData4] = useState(['4','']);
    const [inputData5, setInputData5] = useState(['5','']);
    const [inputData6, setInputData6] = useState(['6','']);
    const [inputData7, setInputData7] = useState(['7','']);
    const [inputData8, setInputData8] = useState(['8','']);
    const [inputData9, setInputData9] = useState(['9','']);
    const [inputData10, setInputData10] = useState(['10','']);

    const onFormSubmit =(e)=>{
        e.preventDefault();
        nextTenYear(inputData1,inputData2,inputData3,inputData4,inputData5,inputData6,inputData7,inputData8,inputData9,inputData10);
    }

    
    return (
        <div onSubmit={onFormSubmit} className="input-form ">
            <div className="ui placeholder segment">
                
                <h2 className="ui header" style={{paddingTop:10}}>Next 10 year input:</h2>
            
                    <form className="input-form-10">

                        <div className="ui form">
                            <div className="fields">
                                <div className="seven wide field">
                                    <input type="text" value={inputData1[1]} onChange={(e)=>{setInputData1(['1',parseFloat(e.target.value)])}} required placeholder="Year 1" />
                                </div>
                                <div className="seven wide field">
                                    <input type="text" value={inputData2[1]} onChange={(e)=>{setInputData2(['2',parseFloat(e.target.value)])}} required placeholder="Year 2" />
                                </div>
                                
                            </div>

                            
                            <div className="fields">
                                <div className="seven wide field">
                                    <input type="text" value={inputData3[1]} onChange={(e)=>{setInputData3(['3',parseFloat(e.target.value)])}} required placeholder="Year 3" />
                                </div>
                                <div className="seven wide field">
                                    <input type="text" value={inputData4[1]} onChange={(e)=>{setInputData4(['4',parseFloat(e.target.value)])}} required placeholder="Year 4" />
                                </div>
                                
                            </div>


                            <div className="fields">
                                <div className="seven wide field">
                                    <input type="text" value={inputData5[1]} onChange={(e)=>{setInputData5(['5',parseFloat(e.target.value)])}} required placeholder="Year 5" />
                                </div>
                                <div className="seven wide field">
                                    <input type="text" value={inputData6[1]} onChange={(e)=>{setInputData6(['6',parseFloat(e.target.value)])}} required placeholder="Year 6" />
                                </div>
                                
                            </div>
                            
                            
                            <div className="fields">
                                <div className="seven wide field">
                                    <input type="text" value={inputData7[1]} onChange={(e)=>{setInputData7(['7',parseFloat(e.target.value)])}} required placeholder="Year 7" />
                                </div>
                                <div className="seven wide field">
                                    <input type="text" value={inputData8[1]} onChange={(e)=>{setInputData8(['8',parseFloat(e.target.value)])}} required placeholder="Year 8" />
                                </div>
                                
                            </div>

                            
                            <div className="fields">
                                <div className="seven wide field">
                                    <input type="text" value={inputData9[1]} onChange={(e)=>{setInputData9(['9',parseFloat(e.target.value)])}} required placeholder="Year 9" />
                                </div>
                                <div className="seven wide field">
                                    <input type="text" value={inputData10[1]} onChange={(e)=>{setInputData10(['10',parseFloat(e.target.value)])}} required placeholder="Year 10" />
                                </div>
                                
                            </div>
                            <div className="center-button">
                                <button className="positive ui button button-right-pad" type="submit" style={{backgroundColor:"blue"}}>Submit</button>
                            </div>
                            
                        </div>
                    </form>
            </div>
        </div>
    );
}
 
export default InputForm;