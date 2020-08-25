import { transactionType, actionType } from './../../Types/Types'



const Reducer = (state: transactionType, action: actionType): transactionType => {

    switch (action.type) {
        case 'ADD_TRANS':
            console.log('Add_Trans action called', state)
        
            return {
                ...state,
                transaction: [...state.transaction, action.payload]
                
            }
        case 'DELETE_TRANS':
            console.log('DeleteTrans action called')
            console.log(action.payload)
            return {...state,
                transaction: state.transaction.filter((transaction)=>(transaction.transid !== action.payload))
            }
                
    
        default:
            return state
    }


}

export default Reducer;