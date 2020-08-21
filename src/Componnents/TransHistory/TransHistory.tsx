import React, { useState } from 'react';
import classes from './TransHistory.module.css';


const TransHistory = () => {

  const [transHistory, setTransHistory] = useState([
    { transid: 1, item: 'Salary', Amount: 50000 },
    { transid: 2, item: 'Books', Amount: -500 },
    { transid: 3, item: 'Grocery', Amount: -1000 },
    { transid: 4, item: 'Savings', Amount: 2000 },
  ])


  return (
    <div className= {classes.history} >
      {transHistory.map((trans, id) => {return(
        <span className={classes.transspan} key={id}>
          <h4>{trans.item}</h4>
          <h4>{trans.Amount}</h4>
        </span>
      )})}


    </div>
  );
}

export default TransHistory;