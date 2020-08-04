import React from 'react';

const NotVerified = ({guider}) => {
    return (
        <div className='not_verified_modal'>
            <div className='small_v'>
                <div className='acct_v _recommitment'>ACCOUNT VERIFICATION FEE</div><hr />
                <div className='make_v'>You are to make payment of NGN 1,000 to the accout details below in order to activate your account</div><hr />
                <div className='guider_details'>
                    <div className='my_dis'><span className='g_name_v'>Guider's Name:</span><span className='name_v'>Great Okenwa</span></div>
                    <div className='my_dis'><span className='g_name_v'>Account Name:</span><span className='name_v'>Great Okenwa</span></div>
                    <div className='my_dis'><span className='g_name_v'>Bank Name:</span><span className='name_v'>Union Bank</span></div>
                    <div className='my_dis'><span className='g_name_v'>Account No:</span><span className='name_v'>0084771750</span></div>
                </div><hr />
                <div className='kindly_note'>
                    <strong>Kindly note:</strong> After making payment, kindly contact your Guider through the phone contact details on your screen to verify your account.
                    <div className='note_con'>Once your confirmation is done, refresh your page</div>
                </div>
            </div>
        </div>
    )
}

export { NotVerified };