import React, { useContext } from 'react';
import { GlobalContext } from './../Context/GlobalContext'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup'

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
      <Typography color='textSecondary' gutterBottom>Your Balance</Typography> 
      <Typography variant="h4" color='textPrimary' gutterBottom  className={classes.typo} >
        {`${currenySign}`}
        <CountUp 
        start ={0} 
        end={transaction.reduce((total, num) => { return total + num.amount }, 0)} 
        duration={1.5} separator=',' 
        />
        </Typography>
    </div>
  );
}

export default Balance;
