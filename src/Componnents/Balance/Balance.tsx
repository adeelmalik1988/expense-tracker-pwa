import React, { useContext } from 'react';
import { GlobalContext } from './../Context/GlobalContext'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
  div: {
    textAlign: 'left',
    
    
  },
  typo:{
    fontWeight: 'bold',

  }
});

const Balance = () => {
  const classes = useStyles();

  const { transaction, currenySign } = useContext(GlobalContext)

  console.log(transaction)

  return (
    <div className= {classes.div}>
      <Typography gutterBottom>Your Balance</Typography> 
      <Typography variant="h5" gutterBottom  className={classes.typo} >{`${currenySign}${transaction.reduce((total, num) => { return total + num.amount }, 0)}`}</Typography>
    </div>
  );
}

export default Balance;
