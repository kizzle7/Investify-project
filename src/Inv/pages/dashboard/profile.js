import React, { useEffect, useState } from 'react';
import { getProfile } from '../../store/actions/userActions';
import './dashboard.css';
import { connect } from 'react-redux';
import validator from '../../utils/validator';

let Profile = (props) => {
    const [password, setPassword] = useState({});
    const [err, setErr] = useState({})
    const { profile } = props.auth;
    useEffect(() => {
        props.getProfile()
    }, [])

    const handleChange = (e) => {
        setPassword({...password, [e.target.name]: e.target.value })
    }

    console.log(password);

    const handleSubmit = (e) => {
        e.preventDefault();
        const validatePass = {password: password.newPassword};
        const errors = validator(validatePass);
        if(password.oldPassword !== password.newPassword) {
            setErr({ confirmPasswordErr: 'password do not match' })
        } else if(errors.length > 0){
            console.log(errors);
        }
    }

    return (
        <div className='dashboard_main'>
            <div className='row dash_profile'>
                <div className='col-md-6'>
                    <div className='myheader'>Bio</div>
                    <div className='profile_bio'>
                        <div className='mt-5'>
                            <div className='bio_style'>{profile && profile.fullName}</div>
                            <div className='bio_style'>{profile && profile.email}</div>
                            <div className='bio_style'>{profile && profile.phone}</div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 margin-5'>
                    <div className='myheader'>Bank details</div>
                    <div className='profile_bank'>
                        <div className='mt-5'>
                            <div className='bio_style'>{profile && profile.bankDetails.accountName}</div>
                            <div className='bio_style'>{profile && profile.bankDetails.accountNo}</div>
                            <div className='bio_style'>{profile && profile.bankDetails.bankName}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5'>
                <div className='mini_cont'>
                    <div className='myheader'>change password</div>
                    <form className='mt-4 px-3' onSubmit={handleSubmit}>
                        <input className='profile_input' type='password' placeholder='Old password' name='oldPassword' onChange={handleChange} />
                        <input className='profile_input' type='password' placeholder='New password' name='newPassword' onChange={handleChange} />
                        <input className='profile_input' type='password' placeholder='Confirm New password' name='confirmPassword' onChange={handleChange} />
                        <div className='auth_errors'>{err.confirmPasswordErr ? err.confirmPasswordErr : null}</div>.
                        <input className='profile_btn mt-2' type='submit' />
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

Profile = connect(mapStateToProps, { getProfile })(Profile)

export { Profile }