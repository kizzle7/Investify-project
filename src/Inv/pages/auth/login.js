import React, { useState, useEffect } from 'react';
import Navigation from '../../components/navigation/navigation';
import './login.css'
import { NavLink, useHistory } from 'react-router-dom';
import loginSVG from '../../assets/login2.svg';
import { setValues, login } from '../../store/actions/userActions';
import { connect } from 'react-redux';
import validator from '../../utils/validator';
import { Alert } from '../../components/alert';
import Cookie from 'js-cookie'

let Login = (props) => {
    const bgcolor = props.location.pathname;
    const history = useHistory();
    const auth = props.auth;
    const alert = props.alert;
    const [err, setErr] = useState({})
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        props.setValues({ [e.target.name]: e.target.value })
        setErr({})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataValidate = {
            username: auth.email, password: auth.password
        }
        const errors = validator(dataValidate);
        if (errors.length > 0) {
            setErr(...errors)
        } else {
            setLoading(true)
            props.login(dataValidate).then(res => {
                if (res) setLoading(false)
                window.location.reload()
            })
                .catch(err => {
                    if (!err) setLoading(false)
                })
        }
    }


    // useEffect(() => {
    //     if(Cookie.get('userData')){
    //         props.history.push('/dashboard');
    //     }
        
    // }, [])

   

   
    // Cookie.get('userData') &&  props.history.push('/dashboard')


    return (
        <div>
            <Navigation bgcolor={bgcolor} />
            <div className='row my_screen_height noPadMar'>
                <div className='col-md-4 noPadMar'>
                    <div className='auth_side'>
                        <div>
                            <div className='auth_side_lable'>LOGIN <span className='mycaret'>{'>>'}</span></div>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 noPadMar auth_section'>
                    <div className='auth_frame'>
                        <div className='auth_salution'>Welcome back</div>
                        <div style={{ width: '90%', margin: 'auto', textAlign: 'center' }}>
                            {
                                alert.status ? <Alert message={alert.message} type={alert.type} /> : null
                            }
                        </div>
                        <div>
                            <form className='auth_form' onSubmit={handleSubmit}>
                                <div className='input_margin'>
                                    <label className='auth_label'>USERNAME</label>
                                    <input className='auth_input' type='text' name='email' placeholder='username' onChange={handleChange} value={auth.email} required />
                                    <div className='auth_errors'>{err.emailErr ? err.emailErr : null}</div>
                                </div>

                                <div className='input_margin'>
                                    <label className='auth_label'>PASSWORD</label>
                                    <input className='auth_input' type='password' name='password' placeholder='********' onChange={handleChange} value={auth.password} required />
                                    <div className='auth_errors'>{err.passwordErr ? err.passwordErr : null}</div>
                                </div>
                                <input style={{ margin: '15px 0px' }} className='auth_input' type='submit' value={loading ? 'LOADING...' : 'LOGIN'} />
                            </form>
                        </div>
                        <div className='account_que'>Don't have an account? <NavLink style={{ fontSize: '12px', fontWeight: '600' }} className='NavLink' to='/register'>CREATE ACCOUNT</NavLink></div>
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

Login = connect(mapStateToProps, { setValues, login })(Login);

export { Login }