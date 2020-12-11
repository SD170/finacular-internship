import React from 'react';
import GivenDataContextProvider from './contexts/GivenDataContext';
import ChartCanvas from './components/ChartCanvas';
import CardCanvas from './components/CardCanvas';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import TopMenuBar from './components/TopMenuBar';
import InputForm from './components/InputForm';
import './App.css';
const App = () => {
  return (
    <div className="App">
        <LeftSideBar />
        <div className="middle-content">
        <TopMenuBar />
          <GivenDataContextProvider>
            <div className="same-side">
              <ChartCanvas />
              <InputForm />
            </div>
            <CardCanvas />
          </GivenDataContextProvider>
        </div>
        <RightSideBar />
    </div>
  );
}


export default App;
