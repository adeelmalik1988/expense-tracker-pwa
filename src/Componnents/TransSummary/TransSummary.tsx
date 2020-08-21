import React from 'react';
import classes from './TransSummary.module.css'


const TransSummary = () => {
  return (
    <div className= {classes.summary}>
     <span>
     <h2>Income</h2>
     <h1>$50,000.00</h1>
     </span>

     <span>
     <h2>Expense</h2>
     <h1>-$30,000.00</h1>
     </span>

    </div>
  );
}

export default TransSummary;
