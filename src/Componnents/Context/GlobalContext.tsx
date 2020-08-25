import React, { useReducer, useState } from 'react'

import Reducer from './Reducer'
import { transactionType, transType, Curreny } from './../../Types/Types'


const initalState: transactionType = {
    transaction: [
        { transid: 1, item: 'Salary', amount: 50000 },
        { transid: 2, item: 'Books', amount: -500 },
        { transid: 3, item: 'Grocery', amount: -1000 },
        { transid: 4, item: 'Savings', amount: 2000 },
    ]
}


type contextProps = {
    transaction: transType[]
    addTrans: (trans: transType)=>void,
    deleteTrans: (id: number)=>void
    currenySign: string
    setCurrency: (e:any)=>void
}

export const GlobalContext = React.createContext<Partial<contextProps>>({})


export const GlobalProvider = ({ children }: any) => {

    

    const [state, dispatch] = useReducer(Reducer, initalState)
    const [currency, setCurrency] = useState(Curreny.ruppee)


    const addTrans = (trans: transType) => {


        dispatch(
            {
                type: 'ADD_TRANS',
                payload: trans
            }
        );
    }

    const deleteTrans = (id: number) => {

        dispatch(

            {
                payload: id,
                type: 'DELETE_TRANS'
            }


        );

    }

    return (
        <GlobalContext.Provider
            value={
                {
                    transaction: state.transaction,
                    addTrans,
                    deleteTrans,
                    setCurrency,
                    currenySign: currency,
                }
            }>
            {children}

        </GlobalContext.Provider>

    )
}
