import React from 'react';
import Heading from './Componnents/Heading/Heading';
import Balance from './Componnents/Balance/Balance';
import TransSummary from './Componnents/TransSummary/TransSummary';
import './App.css';
import TransHistory from './Componnents/TransHistory/TransHistory';
import AddTrans from './Componnents/AddTrans/AddTrans';
import { GlobalProvider } from './Componnents/Context/GlobalContext';





function App() {

 

  return (
    
      <GlobalProvider >
        <div className="App">
          <div >
         
            <Heading ></Heading>
            <Balance ></Balance>
            <TransSummary ></TransSummary>
            <TransHistory></TransHistory>
            <AddTrans></AddTrans>
         
          </div>
        </div>
      </GlobalProvider>
    
  );
}

export default App;
