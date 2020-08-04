import React, { useState } from 'react';
import './header.css';
import { MobileSidebar } from './mobileSidebar';
import { Backdrop } from './backdrop';
import { Link } from 'react-router-dom';
import logo from '../../assets/double.svg'

const MobileDashHeader = () => {
    const [sidebar, setSidebar] = useState(false);
    const sidebarOpen = () => {
        setSidebar(!sidebar)
    }

    const sidebarClose = () => {
        setSidebar(false)
    }
    return (
        <div className='mobile_view'>
            <MobileSidebar show={sidebar} click={sidebarClose} />
            <Backdrop click={sidebarClose} show={sidebar}/>
            <div className='mobile_header'>
            <div className='logo'><Link className='NavLink' to='/dashboard' style={{ color: '#0E692D' }}><div><img src={logo} width='50px' height='50px'/><span style={{marginLeft: '10px', fontSize: '14px', fontWeight: '800'}}>DOUBLE INVESTMENTS</span></div></Link></div>
                <i className='fas fa-bars awesomeFont' onClick={sidebarOpen}></i>
            </div>
        </div>
    )
}

export { MobileDashHeader };