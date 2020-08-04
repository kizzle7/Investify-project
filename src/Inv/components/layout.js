import React, { useEffect } from 'react';
import { Sidebar } from './sidebar/sidebar';
import Cookie from 'js-cookie'
import '../App.css';
import { MobileDashHeader } from '../components/header/mobileDashHeader';
import { connect } from 'react-redux';
import { NotVerified } from './modal/notVerified';
import { Loader } from './loader/loader';
import { Freeze } from './modal/freeze';
import { setCountdown } from '../utils/countDown';
import { getProfile, getMatchedToPay } from '../store/actions/userActions';

let Layout = (props) => {
    const modal = props.modal;
    const { profile, matched } = props.auth;
    const guider = modal.guiderDetails;
    const recommit = profile && profile.matchedToPay && profile.matchedToPay;

    
    useEffect(() => {

        if(profile && profile.stage === "recommit") {
            props.getMatchedToPay();
        }
    }, [profile])

    useEffect(() => {

    }, [matched])

    if(matched && matched.countDown) {
        setCountdown(matched.countDown)
    }


   
    
    // console.log('RECOMMIT: ',{ profile, matched, recommit });
    // console.log({guider, modal})

    return (
        <>
            {/* {modal.verifiedStatus ? <NotVerified guider={guider} /> : <Loader />} */}
            {
                Cookie.get('guiderPay') ? <NotVerified  />
                    :
                    (profile && profile.stage === "recommit" && profile.isFreezed) ?
                        <Freeze recommit={matched} />
                        : null
            }
            <MobileDashHeader />
            <div className='main_dashboard'>
                <div className=''>
                    <Sidebar />
                </div>
                <div className='content_frame'>
                    {props.children}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        auth: state.auth
    }
}

Layout = connect(mapStateToProps, { getProfile, getMatchedToPay })(Layout)

export { Layout }
