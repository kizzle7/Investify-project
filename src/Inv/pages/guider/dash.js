import React, { useState, useEffect } from 'react';
import './dash.css'
import { connect } from 'react-redux';
import { getVerification, getConfirmPayment, verifyUser } from '../../store/actions/guiderAction';
import { confirmPayment, retrieveProof } from '../../store/actions/userActions';
import Skeleton from 'react-loading-skeleton';
import { ToastContainer, toast } from 'react-toastify';

let Dash = (props) => {
    const [active, setActive] = useState(1)
    const [users, setUsers] = useState({ confirmUsers: null, verifyUser: null })
    const [rProof, setrProof] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        props.getConfirmPayment().then(res => {
            if (res.success) {
                setUsers({ ...users, confirmUsers: res.data })
            }
        })
    }, [])

    const getConfirm = () => {
        setActive(1);
        props.getConfirmPayment().then(res => {
            if (res.success) {
                setUsers({ ...users, confirmUsers: res.data })
            }
        });
    }

    const getVerification = () => {
        setActive(2)
        props.getVerification().then(res => {
            if (res.success) {
                setUsers({ ...users, verifyUser: res.data })
            }
        });
    }

    const getProof = () => {
        setActive(3)
        props.retrieveProof().then(res => {
            if (res.success) {
                if (res.success) {
                    setrProof(res.data)
                }
            } else {
                setrProof([])
            }
        })
    }

    let class1 = 'guider_header', class2 = 'guider_header', class3 = 'guider_header';
    if (active === 1) {
        class1 += ' active_c';
    } else if (active === 2) {
        class2 += ' active_c';
    } else if (active === 3) {
        class3 += ' active_c'
    }

    const verifyUser = (id) => {
        setLoading(true)
        props.verifyUser(id).then(res => {
            if (res.success) {
                setLoading(false)
                toast.success(res.message);
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
            }
        });
    }

    const confirmUser = (id) => {
        setLoading(true)
        props.confirmPayment(id).then(res => {
            if (res.success) {
                setLoading(false)
                toast.success(res.message);
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
            }
        });
    }

    const logout = () => {
        localStorage.clear();
        window.location.href = '/login'
    }

    console.log(typeof rProof)

    return (
        <>
            <ToastContainer autoClose={2000} />
            <div className='guider_page'>
                <div className='g_background'>
                    <div>
                        <div>Welcome to the Guider's Dashboard</div>
                        {/* <div>Hello Augustine</div> */}
                    </div>
                    <div className='g_logout' onClick={logout}>
                        <i className='fas fa-power-off g_font'></i>
                        <div className='g_desc'>LOGOUT</div>
                    </div>
                </div>
                <div className='row guider_cont'>
                    <div className='col-md-4 noPad' onClick={getConfirm}>
                        <div className={class1} >confirm payment</div>
                    </div>
                    <div className='col-md-4 noPad' onClick={getVerification}>
                        <div className={class2}>verification</div>
                    </div>
                    <div className='col-md-4 noPad' onClick={getProof}>
                        <div className={class3}>proof of payment</div>
                    </div>
                </div>
                <div className='__content'>
                    <div className='g_loading'>{loading ? 'loading...' : ''}</div>
                    {
                        active === 1
                            ?
                            <div>
                                {
                                    users && users.confirmUsers && users.confirmUsers.length > 0 ?
                                        users.confirmUsers.map((user, index) => {
                                            return (
                                                <div className='users_ mt-4' key={index}>
                                                    <div className='user_frame'>
                                                        <div>
                                                            <div><i className='fas fa-user mr-2'></i>{user._id.fullName}</div>
                                                            <div><i className='fas fa-phone mr-2'></i>{user._id.phone}</div>
                                                            <div><i className='fas fa-wallet mr-2'></i>&#8358;{user.amount}</div>
                                                        </div>
                                                        <div className='but_div'>
                                                            <button onClick={() => confirmUser(user.id)}>confirm</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })
                                        : (users && users.confirmUsers && users.confirmUsers.length === 0) ? <div>You do not have any user to confirm payment at this moment</div>
                                            : <div><Skeleton width={'100'} count={15} /></div>
                                }
                            </div>
                            :
                            active === 2 ?
                                <div>
                                    {
                                        users && users.verifyUser && users.verifyUser.length > 0 ?
                                            users.verifyUser.map((user, index) => {
                                                return (
                                                    <div className='users_ mt-4' key={index}>
                                                        <div className='user_frame'>
                                                            <div>
                                                                <div><i className='fas fa-user mr-2'></i>{user.fullName}</div>
                                                                <div><i className='fas fa-phone mr-2'></i>{user.phone}</div>
                                                                <div><i className='fas fa-wallet mr-2'></i>
                                                                    {user.plan === 'basic' ? <span>Basic - &#8358;5000</span> : user.plan === 'silver' ? <span>Silver - &#8358;10000</span> : user.plan === 'ruby' ? <span>Ruby - &#8358;20000</span> : user.plan === 'gold' ? <span>Gold - &#8358;50000</span> : user.plan === 'diamond' ? <span>Diamond - &#8358;100000</span> : null}

                                                                </div>
                                                            </div>
                                                            <div className='but_div'>
                                                                <button onClick={() => verifyUser(user._id)}>verify</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                )
                                            })
                                            : (users && users.verifyUser && users.verifyUser.length === 0) ? <div>You have no user to verify at this moment </div>
                                                : <div><Skeleton width={'100'} count={15} /></div>
                                    }
                                </div>
                                :
                                active === 3 ?
                                    <div>
                                        {
                                            rProof && rProof.length > 0 ?
                                                rProof.map((proof, index) => {
                                                    return (
                                                        <div className='mybody makepayment' key={index}>
                                                            <div className='persontoreceive mb-2 d-flex align-items-center' style={{ border: '1px solid #428bca' }}>
                                                                <div>
                                                                    <div><i className='fas fa-user mr-2'></i>{proof.userID.fullName}</div>
                                                                    <div className='my-1'><i className='fas fa-phone mr-2'></i>{proof.userID.phone}</div>
                                                                    <div><i className='fas fa-wallet mr-2'></i>{proof.userID.plan === 'basic' ? <span>&#8358;5000</span> : proof.userID.plan === 'silver' ? <span>&#8358;10000</span> : proof.userID.plan === 'ruby' ? <span>&#8358;20000</span> : proof.userID.plan === 'gold' ? <span>&#8358;50000</span> : proof.userID.plan === 'diamond' ? <span>&#8358;100000</span> : null}
                                                                    </div>
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
                                                : (rProof && rProof.length === 0) ?
                                                    <div>You have not receive any proof at this moment</div>
                                                    : <div><Skeleton width={'100'} count={15} /></div>
                                        }
                                    </div>
                                    : null
                    }
                </div>
            </div>
        </>
    )
}

Dash = connect(null, { getVerification, getConfirmPayment, verifyUser, confirmPayment, retrieveProof })(Dash)

export { Dash }