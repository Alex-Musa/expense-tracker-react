import React, { useContext} from 'react';
import { GlobalConText} from '../context/GlobalState';


export const TransactionList = () => {
    const { Transactions } = useContext(GlobalConText);
    return (
        <>
        <h3>History</h3>
        <ul id="list" className="list">
            <li className="minus">
            Cash <span>-$400</span><button className="delete-btn">x</button>
            </li>
        </ul>
        </>
    )
}
