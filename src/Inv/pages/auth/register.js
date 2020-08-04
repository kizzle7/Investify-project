import React, { useState, useEffect } from 'react';
import Navigation from '../../components/navigation/navigation';
import './login.css'
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setValues, register, getRegister } from '../../store/actions/userActions'
import validator from '../../utils/validator';
import { Alert } from '../../components/alert';

let Register = (props) => {
    const bgcolor = props.location.pathname;
    const referralLink = props.location.search.substr(3);
    const alert = props.alert;
    const [err, setErr] = useState({});
    const [checkBox, setCheckBox] = useState(false);
    const [loading, setLoading] = useState(false);
    const [refer, setRefer] = useState({})
    const auth = props.auth;

    useEffect(() => {
        if (referralLink) {
            props.getRegister(referralLink).then(res => {
                if (res.success) {
                    setRefer({ user: res.user, status: true })
                }
            }).catch(err => {
                setRefer({ user: false, status: false, ok: true })
                setTimeout(() => {
                    props.history.push({ path: '/register' })
                    setRefer({ user: null, status: null })
                }, 1500)
            });
        }
    }, [])
    const handleChange = (e) => {
        props.setValues({ [e.target.name]: e.target.value })
        setErr({})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataValidate = {
            name: auth.fullName, username: auth.email, phone: auth.phone, password: auth.password, bank: auth.bankName, accountName: auth.accountName, accountNumber: auth.accountNo, investmentAmt: auth.plan
        }
        console.log(dataValidate)
        const errors = validator(dataValidate);
        if (errors.length > 0) {
            setErr(...errors)
        } else if (auth.password !== auth.confirmPassword) {
            setErr({ confirmPasswordErr: 'password do not match' })
        } else if (!checkBox) {
            setErr({ checkBoxErr: 'you have to agree with the terms and conditions' })
        } else {
            setLoading(true)
            props.register(dataValidate, referralLink).then(res => {
                if (res) {
                    setLoading(false)
                    window.location.reload()
                }
            }).catch(err => {
                if (!err) {
                    setLoading(false)
                }
            })
        }
    }

    return (
        <div>
            <Navigation bgcolor={bgcolor} />
            <div className='row my_screen_height noPadMar'>
                <div className='col-md-4 noPadMar'>
                    <div className='auth_side_r'>
                        <div>
                            <div className='auth_side_lable'>REGISTER <span className='mycaret'>{'>>'}</span></div>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 noPadMar auth_section'>
                    <div style={{ padding: '20px 0px' }} className='auth_frame reg_frame'>
                        <div>
                            <form onSubmit={handleSubmit} style={{ width: '95%' }} className='auth_form reg_form'>
                                <div style={{ width: '95%', margin: 'auto', marginBottom: '7px' }}>
                                    {
                                        referralLink && (refer.user && refer.status
                                            ? <div className='refer_true'>You are registering under <b>{refer.user}</b></div>
                                            : (!refer.user && !refer.status && refer.ok)
                                                ? <div className='refer_false'>This referral link does not exist</div>
                                                : <div className='fetch_u'>Fetching user...</div>)
                                    }
                                </div>
                                <div style={{ width: '95%', margin: 'auto', marginTop: '7px', textAlign: 'center' }}>
                                    {alert.status ? <Alert message={alert.message} type={alert.type} /> : null}
                                </div>
                                <div className='row noPadMar'>
                                    <div className='col-md-12 input_margin'>
                                        <label className='auth_label'>FULL NAME</label>
                                        <input className='auth_input' type='text' name='fullName' onChange={handleChange} value={auth.fullName} placeholder='' required />
                                        <div className='auth_errors'>{err.fullNameErr ? err.fullNameErr : null}</div>
                                    </div>
                                </div>
                                <div className='row noPadMar'>
                                    <div className='col-md-6 input_margin'>
                                        <label className='auth_label'>USERNAME</label>
                                        <input className='auth_input' type='text' name='email' onChange={handleChange} value={auth.email} placeholder='username' required />
                                        <div className='auth_errors'>{err.emailErr ? err.emailErr : null}</div>
                                    </div>
                                    <div className='col-md-6 input_margin'>
                                        <label className='auth_label'>PHONE NUMBER</label>
                                        <input className='auth_input' type='text' name='phone' onChange={handleChange} value={auth.phone} placeholder='' required />
                                        <div className='auth_errors'>{err.phoneErr ? err.phoneErr : null}</div>
                                    </div>
                                </div>
                                <div className='row noPadMar'>
                                    <div className='col-md-6 input_margin'>
                                        <label className='auth_label'>PASSWORD</label>
                                        <input className='auth_input' type='password' name='password' onChange={handleChange} value={auth.password} placeholder='******' required />
                                        <div className='auth_errors'>{err.passwordErr ? err.passwordErr : null}</div>
                                    </div>
                                    <div className='col-md-6 input_margin'>
                                        <label className='auth_label'> CONFIRM PASSWORD</label>
                                        <input className='auth_input' type='password' name='confirmPassword' onChange={handleChange} value={auth.confirmPassword} placeholder='******' required />
                                        <div className='auth_errors'>{err.confirmPasswordErr ? err.confirmPasswordErr : null}</div>
                                    </div>
                                </div>
                                <div className='row noPadMar'>
                                    <div className='col-md-6 input_margin'>
                                        <label className='auth_label'>ACCOUNT NAME</label>
                                        <input className='auth_input' type='text' name='accountName' onChange={handleChange} value={auth.accountName} placeholder='' required />
                                        <div className='auth_errors'>{err.accountNameErr ? err.accountNameErr : null}</div>
                                    </div>
                                    <div className='col-md-6 input_margin'>
                                        <label className='auth_label'>ACCOUNT NUMBER</label>
                                        <input className='auth_input' type='text' name='accountNo' onChange={handleChange} value={auth.accountNo} placeholder='' required />
                                        <div className='auth_errors'>{err.accountNoErr ? err.accountNoErr : null}</div>
                                    </div>
                                </div>
                                <div className='row noPadMar'>
                                    <div className='col-md-6 input_margin'>
                                        <label className='auth_label'>BANK NAME</label>
                                        <input className='auth_input' type='text' name='bankName' onChange={handleChange} value={auth.bankName} placeholder='' required />
                                        <div className='auth_errors'>{err.bankNameErr ? err.bankNameErr : null}</div>
                                    </div>
                                    <div className='col-md-6 input_margin'>
                                        <label className='auth_label'>INVESTMENT AMOUNT</label>
                                        <input className='auth_input' type='text' name='plan' onChange={handleChange} value={auth.plan} placeholder='' required />
                                        <div className='auth_errors'>{err.planErr ? err.planErr : null}</div>
                                    </div>
                                    
                                   
                                </div>
                                <div style={{ marginBottom: '14px' }} className='row noPadMar'>
                                    <div className='col-md-12'>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <input type='checkbox' style={{ width: '15px', height: '15px' }} name='checkbox' value={checkBox} onChange={() => {setCheckBox(!checkBox); setErr({})}} /> <div style={{ fontSize: '12px', marginTop: '3px', marginLeft: '10px' }}>By clicking on the checkbox, i agree to the <Link to='/terms'><span className='__terms'>terms and conditions</span></Link></div>
                                        </div>
                                        <div className='auth_errors'>{err.checkBoxErr ? err.checkBoxErr : null}</div>
                                    </div>
                                </div>
                                <div className='row noPadMar'>
                                    <div className='col-md-12'>
                                        <input style={{ margin: '10px 0px 15px 0px' }} className='auth_input' type='submit' value={loading ? 'LOADING...' : 'CREATE ACCOUNT'} />
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className='account_que'>Already have an account? <NavLink style={{ fontSize: '12px', fontWeight: '600' }} className='NavLink' to='/login'>LOGIN</NavLink></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        alert: state.alert
    }
}

Register = connect(mapStateToProps, { setValues, register, getRegister })(Register);

export { Register }