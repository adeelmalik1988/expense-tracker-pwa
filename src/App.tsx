import React from 'react';
import Heading from './Componnents/Heading/Heading';
import Balance from './Componnents/Balance/Balance';
import TransSummary from './Componnents/TransSummary/TransSummary';
import './App.css';
import TransHistory from './Componnents/TransHistory/TransHistory';
import AddTrans from './Componnents/AddTrans/AddTrans';

function App() {
  return (
    <div className="App">
     <Heading />
     <Balance />
     <TransSummary />
     <TransHistory />
     <AddTrans />
    </div>
  );
}

export default App;
