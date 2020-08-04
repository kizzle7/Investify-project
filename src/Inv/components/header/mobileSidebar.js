import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

let MobileSidebar = (props) => {
    const pathname = props.location.pathname
    let classes = 'mobile_sidebar'
    if (props.show) {
        classes = 'mobile_sidebar open'
    }

    const logout = () => {
        localStorage.clear();
        props.history.push({path: '/login'})
        window.location.reload()
    }
    return (
        <div className={classes}>
            <ul className='sidebar_layout' style={{ display: props.show ? 'block' : 'none' }} >
                <div>
                    <NavLink className='NavLink' to='/dashboard'><li className={pathname === '/dashboard' ? 'active' : ''} onClick={props.click}><i className='fas fa-chart-line myFontawesome'></i>Dashboard</li></NavLink>
                    <NavLink className='NavLink' to='/transaction'><li className={pathname === '/transaction' ? 'active' : ''} onClick={props.click}><i className='fas fa-coins myFontawesome'></i>Transactions</li></NavLink>
                    <NavLink className='NavLink' to='/referral'><li className={pathname === '/referral' ? 'active' : ''} onClick={props.click}><i className='fas fa-sitemap myFontawesome'></i>Referrals</li></NavLink>
                    <NavLink className='NavLink' to='/profile'><li className={pathname === '/profile' ? 'active' : ''} onClick={props.click}><i className='fas fa-user myFontawesome'></i>Profile</li></NavLink>
                    <NavLink className='NavLink' to='/support'><li className={pathname === '/support' ? 'active' : ''} onClick={props.click}><i className='fas fa-envelope myFontawesome'></i>Support</li></NavLink>
                </div>
                <div>
                    <div onClick={logout}><li className='mylogout'><i className='fas fa-power-off myFontawesome'></i><span>logout</span></li></div>
                </div>
            </ul>
        </div>
    )
}

MobileSidebar = withRouter(MobileSidebar);

export { MobileSidebar };