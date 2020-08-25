export type transactionType = {
    transaction: transType[]
}

export type transType = {
    transid: number,
    item: string,
    amount: number

}


export type actionType = 
| {type: 'ADD_TRANS', payload: transType}
| {type: 'DELETE_TRANS', payload: number}


export enum Curreny {
    dollar = '$',
    ruppee = 'Rs',

}