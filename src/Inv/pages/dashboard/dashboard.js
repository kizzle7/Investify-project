import React, { useEffect, useState } from 'react';
import { getProfile, getMatchedToPay, getMatchedToReceive, retrieveProof, confirmPayment } from '../../store/actions/userActions';
import './dashboard.css';
import { connect } from 'react-redux';
import { setCountdown } from '../../utils/countDown';
import Skeleton from 'react-loading-skeleton';
import { Modal } from '../../components/modal/modal';
import { ToastContainer, toast } from 'react-toastify';
import Cookie from 'js-cookie'

let Dashboard = (props) => {
    const [rProof, setrProof] = useState([])
    const [loading, setLoading] = useState(false);
    const { profile, matched, received } = props.auth;
    const proof = profile && profile.proof;
    // let payID;

    useEffect(() => {
        if(Cookie.get('userData')){
            const user = Cookie.getJSON('userData');
            const user_id = user.id;
            props.getProfile(user_id);

        }
        else{
            props.history.push('/login')
        }
      
    }, [])

    useEffect(() => {
        if (profile && (profile.stage === 'pay')) {
            props.getMatchedToPay();
            // props.getProfile();
        } else if (profile && (profile.stage === 'receive' || profile.stage === 'matched')) {
            props.getMatchedToReceive();
            if (proof.length > 0) {
                props.retrieveProof().then(res => {
                    if (res.success) {
                        setrProof(res.data)
                    }
                });
            } else setrProof([])
        }
    }, [profile])

    useEffect(() => {

    }, [matched])

    if (matched) {
        matched.countDown && setCountdown(matched.countDown);
    }

    const confirmPayment = (id) => {
        setLoading(true)
        props.confirmPayment(id).then(res => {
            if (res.success) {
                setLoading(false)
                toast.success(res.message);
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
            }
        })
    }

    console.log({matched})

    return (
        <>
            <ToastContainer autoClose={2000} />
            <Modal />
            <div className='dashboard_main'>
                <div>Hello {profile && profile.name.split(' ')[0]}</div>
                <div className='row mt-4'>
                    <div className='col-md-6'>
                        <div className='myinfo'>
                            <div className='myheader'>
                                Info
                        </div>
                            <div className='mybody'>
                                Kindly testify on our instagram @trustfunds
                        </div>
                        </div>
                    </div>
                    <div className='col-md-6 margin-5'>
                        <div className='myinfo'>
                            <div className='myheader'>
                                Current Investment Amount
                        </div>
                            <div className='mybody'>
                                {profile && profile.investmentAmt !==0  ? <span> &#8358; {profile.investmentAmt}</span>  : <Skeleton width={'100'} count={1} />}
                            </div>
                        </div>
                    </div>
                </div>
                {
                    profile && (profile.stage === "pay") && profile.matchedToPay !== null ?
                        <div className='row'>

                            <div className='makepayment_frame mt-5 col-md-6'>
                                <div className='myheader'>
                                    Make payment
                    </div>
                                <div className='mybody makepayment'>
                                    {
                                        matched && matched.payID ?
                                            <>
                                                <div>You have been merged to donate. Kindly pay the person below to get paid.</div>
                                                <div className='mt-2'>You have <span className='countdown_style'><span id="days"></span><span id="hours"></span><span id="mins"></span><span id="secs"></span></span> to make payment</div>
                                                <div className='mt-3'><strong>Details</strong></div>
                                                <div className='persontopay'>
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <td>ACCOUNT NAME</td>
                                                                <td><strong>{matched && matched.bankDetails && matched.bankDetails.accountName || matched && matched.accountName}</strong></td>
                                                            </tr>
                                                            <tr>
                                                                <td>ACCOUNT NUMBER</td>
                                                                <td><strong>{matched && matched.bankDetails && matched.bankDetails.accountNo || matched && matched.accountNo}</strong></td>
                                                            </tr>
                                                            <tr>
                                                                <td>PHONE NUMBER</td>
                                                                <td><strong>{matched && matched.phone}</strong></td>
                                                            </tr>
                                                            <tr>
                                                                <td>BANK NAME</td>
                                                                <td><strong>{matched && matched.bankDetails && matched.bankDetails.bankName || matched && matched.bankName}</strong></td>
                                                            </tr>
                                                            <tr>
                                                                <td>AMOUNT</td>
                                                                <td><strong>&#8358;{matched && matched.userPlanAmt}</strong></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div style={{ fontSize: '13px' }}>
                                                        Note: contact the details provided after making payment to confirm your payment so as to receive payment.
                                            </div>
                                                    <div className='mt-3 d-flex justify-content-between payment_done'>
                                                        <button style={{ backgroundColor: '#428bca', border: '1px solid black' }} type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">send prove of payment</button>
                                                    </div>
                                                </div>
                                            </>
                                            : <Skeleton width={'100'} count={15} />
                                    }
                                </div>
                            </div>
                        </div>
                        : profile && profile.stage === 'receive' || profile && profile.stage === 'matched' ?
                            <div className='row'>
                                <div className='makepayment_frame mt-5 col-md-6'>
                                    <div className='myheader'>
                                        Receive payment
                            </div>
                                    <div className='mybody makepayment'>
                                        {
                                            received && received.length > 0 ?
                                                <div>You have been merged to receive payment. Kindly confirm payment when paid to grow your account.</div>
                                                :
                                                <div>
                                                    Once you're matched to receive payment, you'll see the users matched to you here.
                                                </div>
                                        }
                                        <div className='mt-3'><strong>Details</strong></div>
                                        {
                                            received && typeof received === 'object' && received.length > 0 ?
                                                received.map((user, index) => {
                                                    return (
                                                        <div className='persontoreceive mb-2' key={index}>
                                                            <div>
                                                                <div><i className='fas fa-user mr-2'></i>{user._id.fullName}</div>
                                                                <div className='my-1'><i className='fas fa-phone mr-2'></i>{user._id.phone}</div>
                                                                <div><i className='fas fa-wallet mr-2'></i>&#8358;{user.amount}</div>
                                                            </div>
                                                            <button disabled={loading ? true : false} onClick={() => confirmPayment(user._id._id)}>{loading ? 'loading' : 'confirm'}</button>
                                                        </div>
                                                    )
                                                })
                                                : (received && received.length === 0) ?
                                                    <div>{'No user is matched to you yet'}</div>
                                                    : <Skeleton width={'100'} count={6} />
                                        }
                                    </div>

                                </div>
                                <div className='makepayment_frame mt-5 col-md-6'>
                                    <div className='myheader'>
                                        Proof of payment
                                    </div>
                                    {
                                        rProof && rProof.length > 0 ?
                                            rProof.map((proof, index) => {
                                                return (
                                                    <div className='mybody makepayment' key={index}>
                                                        <div className='persontoreceive mb-2 d-flex align-items-center' style={{ border: '1px solid #428bca' }}>
                                                            <div>
                                                                <div><i className='fas fa-user mr-2'></i>{proof.userID.fullName}</div>
                                                                <div className='my-1'><i className='fas fa-phone mr-2'></i>{proof.userID.phone}</div>
                                                                <div><i className='fas fa-wallet mr-2'></i>&#8358;{proof.userID.plan}</div>
                                                                <div style={{ fontSize: '13px', marginTop: '5px', marginRight: '10px', backgroundColor: '#eee', padding: '5px' }}>{proof.description}</div>
                                                            </div>
                                                            <div className=''>
                                                                <div className='proof_img'><img src={proof.file_url} width='100%' height='100%' /></div>
                                                                <a target='_blank' href={proof.file_url}><div style={{ backgroundColor: '#428bca', margin: 'auto', marginTop: '5px' }} className='proof_btn'>view</div></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            : <div className='mybody makepayment'>You have not receive any proof yet</div>
                                    }
                                </div>
                            </div>
                            : null
                }
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

Dashboard = connect(mapStateToProps, { getProfile, getMatchedToPay, getMatchedToReceive, retrieveProof, confirmPayment })(Dashboard);

export { Dashboard }