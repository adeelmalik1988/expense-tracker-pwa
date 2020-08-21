import React from 'react';


const AddTrans = () => {
    return (
        <div >
            <hr />
            <h3>Add new Transaction</h3>
            <br />
            <form>
                <label> Item
                    <input type='text' />
                </label>
                <br />
                <label> Amount
                    <input type='number' />
                </label>

            </form>


            <button > Add Transaction </button>
        </div>
    );
}

export default AddTrans;
