import React, { useContext } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { GlobalContext } from '../Context/GlobalContext';

const currencies = [
  {
    value: '$',
    label: 'USD',
  },
  {
    value: '€',
    label: 'EUR',
  },
  {
    value: '฿',
    label: 'BTC',
  },
  {
    value: '¥',
    label: 'JPY',
  },
  {
    value: 'Rs',
    label: 'PKR'
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    root: {
      width: '100%',
      maxWidth: 500,
      textTransform: 'capitalize',
      fontWeight: 'bold',
      textAlign: 'left'
    },
    currency: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100%',
      },

    }
  })
);


const Heading = () => {

  const classes = useStyles();


  const { setCurrency, currenySign } = useContext(GlobalContext)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };


  return (
    <div >
      <Typography variant="h4" gutterBottom className={classes.root}>Expense Tracker</Typography>
      <div className={classes.currency}>
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={currenySign}
        onChange={handleChange}
        helperText="Please select your currency"
        variant="outlined"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      </div>
    </div>
  );
}

export default Heading;







