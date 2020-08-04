import React, { useEffect, useState } from 'react';
import './dashboard.css';
import { getProfile, getReferrals } from '../../store/actions/userActions';
import { connect } from 'react-redux';
import config from '../../config';
import { ToastContainer, toast } from 'react-toastify';

let Referral = (props) => {
    const referralLink = props.auth.profile && props.auth.profile.referralLink;
    const [referrals, setReferrals] = useState([]);
    console.log('kk', referralLink);
    useEffect(() => {
        props.getProfile();
        props.getReferrals().then(res => {
            if (res.success) {
                setReferrals(res.data)
                console.log('REFERRALS FROM COMPONENT: ', res.data)
            }
        })
    }, [])

    const copy = () => {
        const link = referralLink;
        const el = document.createElement('textarea');
        el.value = `${config.url}/register?r=${link}`;
        el.setAttribute('readonly', '');
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        toast.dark('Copied!')
    }

    console.log('REFERRALS FROM COMP: ', referrals)

    return (
        <>
        <ToastContainer autoClose={2000} />
        <div className='dashboard_main'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='myinfo'>
                        <div className='myheader'>
                            Referral
                        </div>
                        <div className='mybody'>
                            Invite your friends and earn money.
                            <div className='mt-2'>
                                You will be credited with &#8358;500 once your referred friends make an investment. There is no limits to having referrals.
                                <div><strong>The more referrals you have, the more rewards tou receive.</strong></div>
                            </div>
                            <div className='mt-2 copy_link'>
                                <span><a href='https://trustfunds.com/34fh8jfj1'>{`https://trustfunds.com/${referralLink}`}</a></span><button onClick={copy}>copy</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 margin-5'>
                    <div className='d-flex justify-content-center align-items-center referral_'>
                        <div className='referral_box'>
                            <div className='referral_amount'>
                                &#8358;7000
                            </div>
                            <button>Withdraw</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5' style={{ fontSize: '14px' }}>List of your referrals</div>
            <div className='col-md-12 noPadMar referrals_frame'>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>NAME</th>
                                <th>PHONE NUMBER</th>
                                <th>PLAN</th>
                                <th>BONUS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                referrals && referrals.length > 0
                                    ?
                                    referrals.map((refer, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope='row'>{index+1}</th>
                                                <td>{refer.id.fullName}</td>
                                                <td>{refer.id.phone}</td>
                                                <td>{refer.id.plan}</td>
                                                <td>{refer.amount}</td>
                                            </tr>
                                        )
                                    })
                                    :
                                    <div>No referrals yet</div>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

Referral = connect(mapStateToProps, { getProfile, getReferrals })(Referral)

export { Referral }