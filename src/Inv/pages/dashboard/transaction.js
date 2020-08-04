import React, { useEffect, useState } from 'react';
import { getUserTransaction } from '../../store/actions/userActions';
import './dashboard.css';
import { connect } from 'react-redux';
import { fdate } from '../../utils/formatDate';

let Transaction = (props) => {
    const [transaction, setTransaction] = useState([])
    useEffect(() => {
        props.getUserTransaction().then(res => {
            if (res.success) {
                setTransaction(res.data.data.data);
                // console.log('Transaction: ',res.data)
            }
        });
    }, [])

    console.log('Transaction: ', transaction)
    return (
        <div className='dashboard_main'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='myinfo'>
                        <div className='myheader'>
                            Transactions
                        </div>
                        <div className='mybody'>
                            Your transactions are secured and private to you.
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-md-6'>
                    <div>show
                    <select className='mx-2'>
                            <option value='10'>10</option>
                            <option value='10'>20</option>
                            <option value='10'>30</option>
                            <option value='10'>40</option>
                            <option value='10'>50</option>
                        </select>
                    entries
                </div>
                </div>
                <div className='col-md-6 margin-5'>
                    <input className='mr-2 pl-2 transaction_search' type='text' placeholder='search by name' />
                    <span>total transactions: {transaction && transaction.length}</span>
                </div>
            </div>
            <div className='col-md-12 noPadMar referrals_frame mt-5 mytransaction'>
                {
                    transaction && transaction.length > 0
                        ?
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>PHONE NUMBER</th>
                                        <th>PLAN</th>
                                        <th>DATE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        transaction.map((trans, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{trans.transactionID}</td>
                                                    <td>{trans.confirmID.fullName}</td>
                                                    <td>{trans.confirmID.phone}</td>
                                                    <td>{trans.amount}</td>
                                                    <td>{fdate(trans.date)}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        :
                        <div>You don't have any transaction yet</div>
                }
            </div>
        </div>
    )
}

Transaction = connect(null, { getUserTransaction })(Transaction)

export { Transaction }