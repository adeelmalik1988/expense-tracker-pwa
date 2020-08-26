import React, { useContext, useState } from 'react';
import {GlobalContext} from './../Context/GlobalContext'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {TextField, Button, Typography, Divider} from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
      },
      textTransform: 'uppercase',
      
      
    },
  }),
);


const AddTrans = () => {
    const classes = useStyles();

const { addTrans } = useContext(GlobalContext)
const [itemName, setItemName] = useState('')
const [itemAmount, setItemAmount] = useState('')
const [transid, setTransid] = useState(100)


const onSubmit = (e: any)=>{

    
    e.preventDefault();

    setTransid(transid+1)

    console.log(itemName)
    console.log(itemAmount)
    console.log(parseInt(itemAmount))

    const trans = {
        transid: transid,
        item: itemName,
        amount: parseInt(itemAmount)
    }


    addTrans(trans)
}

    return (
        <div >
          <Divider light/>
            <Typography className={classes.root} > Add new Transaction</Typography>
            <br />
            <form  onSubmit={onSubmit} className={classes.root} >
                
                    <TextField label="ITEM" variant='outlined' type='text' value={itemName} onChange={(e)=>setItemName(e.target.value)} />
                
                <br />
                <Typography  color="textSecondary" gutterBottom >(negative - expense, positive - income)</Typography>
                <TextField label="AMOUNT" variant='outlined' type='number' value={itemAmount} onChange={(e)=>setItemAmount(e.target.value)} />
                
                <br />
                <Button variant="contained" color="primary" type='submit' > Add Transaction </Button>

            </form>


        </div>
    );
}

export default AddTrans;
