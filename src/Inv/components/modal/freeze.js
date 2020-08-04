import React from 'react';

const Freeze = ({recommit}) => {
    console.log('recommit from freeze: ', recommit)
    return (
        <>
        <div className='freeze_modal'>
            <div className='small_f'>
                <div className='_recommitment'>Recommitment</div>
                <div className='persontopay' style={{border: '1px solid #0E692D'}}>
                <div className='mt-2 mb-1'>You have <span className='countdown_style'><span id="days"></span><span id="hours"></span><span id="mins"></span><span id="secs"></span></span> to make payment</div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>ACCOUNT NAME</td>
                                <td><strong>{recommit && recommit.bankDetails.accountName}</strong></td>
                            </tr>
                            <tr>
                                <td>ACCOUNT NUMBER</td>
                                <td><strong>{recommit && recommit.bankDetails.accountNo}</strong></td>
                            </tr>
                            <tr>
                                <td>PHONE NUMBER</td>
                                <td><strong>{recommit && recommit.phone}</strong></td>
                            </tr>
                            <tr>
                                <td>BANK NAME</td>
                                <td><strong>{recommit && recommit.bankDetails.bankName}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ fontSize: '13px' }}>
                        Note: Once your payment is confirmed by the user, you'll be matched to receive payment.
                                            </div>
                    <div className='mt-3 d-flex justify-content-between payment_done'>
                        <button disabled={false} style={{ backgroundColor: '#428bca', border: '1px solid black' }} type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">send prove of payment</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export { Freeze };