import React from 'react';
import './sidebar.css'
import Cookie from 'js-cookie'
import { NavLink, withRouter } from 'react-router-dom';

let Sidebar = (props) => {
    const pathname = props.location.pathname
    const logout = () => {
        localStorage.clear();
        Cookie.remove('userData')
        window.location.href = '/login'
    }
    return (
        <div className='my_sidebar'>
            <ul className='sidebar_layout'>
                <div>
                    <NavLink className='NavLink' to='/dashboard'><li className={pathname === '/dashboard' ? 'active' : ''}><i className='fas fa-chart-line myFontawesome'></i>Dashboard</li></NavLink>
                    <NavLink className='NavLink' to='/transaction'><li className={pathname === '/transaction' ? 'active' : ''}><i className='fas fa-coins myFontawesome'></i>Transactions</li></NavLink>
                    <NavLink className='NavLink' to='/referral'><li className={pathname === '/referral' ? 'active' : ''}><i className='fas fa-sitemap myFontawesome'></i>Referrals</li></NavLink>
                    <NavLink className='NavLink' to='/profile'><li className={pathname === '/profile' ? 'active' : ''}><i className='fas fa-user myFontawesome'></i>Profile</li></NavLink>
                    <NavLink className='NavLink' to='/support'><li className={pathname === '/support' ? 'active' : ''}><i className='fas fa-envelope myFontawesome'></i>Support</li></NavLink>
                </div>
                <div>
                    <div onClick={logout}><li className='mylogout'><i className='fas fa-power-off myFontawesome'></i><span>logout</span></li></div>
                </div>
            </ul>
        </div>
    )
}

Sidebar = withRouter(Sidebar)

export { Sidebar }