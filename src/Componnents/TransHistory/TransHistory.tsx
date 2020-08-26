import React, { useContext } from 'react';
import { GlobalContext } from './../Context/GlobalContext'
import { transType } from '../../Types/Types';



import {List,IconButton,  ListItemText, Paper, Typography}  from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'row',
  },
  listItemText: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  typo: {
    textTransform: 'uppercase',
    textAlign: 'center'
  }
  }
));

const TransHistory = () => {

  const classes = useStyles();

  const { transaction, deleteTrans, currenySign } = useContext(GlobalContext)
  console.log(transaction)


  return (
    <div >
      <br />
      <Typography  className={classes.typo} >Transaction History</Typography>
      <hr />
      <Paper elevation={3}>
      {transaction.map((trans: transType, id: number) => {
        return (
          <div key={trans.transid} >
            <List component="nav" className={classes.root} aria-label="mailbox folders">
            <IconButton onClick={() => deleteTrans(trans.transid)} color={trans.amount > 0 ? 'primary' : 'secondary'} size='small' >
              <DeleteIcon />
              </IconButton>
            
              <ListItemText className={classes.listItemText}>
               
                  {trans.item}
                  
              </ListItemText>
                  <ListItemText color={trans.amount > 0 ? 'primary' : 'secondary'} >
                    {`${(trans.amount < 0) ? '-' : ""}${currenySign}${
                      
                      (trans.amount < 0) ? Math.abs(trans.amount) : trans.amount
                      
                      
                      }`}</ListItemText>
              
              </List>
              
          </div>
        )
      })}
</Paper>

    </div>
  );
}

export default TransHistory;

