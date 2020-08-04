import React from 'react';
// import $ from 'jquery';
import { connect } from 'react-redux';
import { closeAlert } from '../store/actions/privilegeActions';

let Alert = (props) => {
    const alert = props.alert;
    console.log('from alert', alert)
    if(props.alert) {
        // $('#myalert').fadeOut(5000);
        setTimeout(()=> {
            props.closeAlert()
        }, 3000)
    }
    const type = "danger";
    return (
        <div id='myalert' className={"alert alert-"+alert.type} role="alert">
            {props.message}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        alert: state.alert
    }
}

Alert = connect(mapStateToProps, {closeAlert})(Alert)

export {Alert};