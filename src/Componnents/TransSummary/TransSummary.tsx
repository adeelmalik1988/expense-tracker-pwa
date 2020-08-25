import React, { useContext } from 'react';
import { GlobalContext } from './../Context/GlobalContext'
import { makeStyles } from '@material-ui/core/styles';
import {CardContent, Typography, Divider, Paper} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around'
    

  },

}));

const TransSummary = () => {
  const classes = useStyles();
 

  const { transaction, currenySign } = useContext(GlobalContext)


  return (
    <div >
      

<Paper elevation={3} className={classes.root} >
  <CardContent >
      <Typography  color="textSecondary" gutterBottom>
          INCOME</Typography>

          <Typography  color="textSecondary">
          {`${currenySign}${transaction.reduce((total, num) => {

          if (num.amount > 0) {
            total = total + num.amount
          }

          return total
        }, 0)}`}</Typography>
      </CardContent>
        <Divider orientation="vertical" flexItem />
      <CardContent>
      <Typography  color="textSecondary" gutterBottom>
          EXPENSE</Typography>
          <Typography  color="textSecondary">
          {`-${currenySign}${Math.abs(transaction.reduce((total, num) => {

          if (num.amount < 0) {
            total = total + num.amount
          }

          return total
        }, 0))}`}  </Typography>
        </CardContent>
        </Paper>
      

    </div>
  );
}

export default TransSummary;
