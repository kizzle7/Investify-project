import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Backdrop } from '../header/backdrop';
import ScrollTo from "react-scroll-into-view";
import logo from '../../assets/double.svg'

const Navigation = ({ bgcolor }) => {
    const [sidebar, setSidebar] = useState(false);
    const sidebarOpen = () => {
        setSidebar(!sidebar)
    }
    const sidebarClose = () => {
        setSidebar(false)
    }

    let classes = 'home_links_mobile'
    if (sidebar) {
        classes = 'home_links_mobile open'
    }

    return (
        <>
        <Backdrop click={sidebarClose} show={sidebar}/>
            <div style={{ borderBottom: bgcolor === '/' ? '2px solid #fff' : '2px solid #0E692D' }} className={'nav_reg'}>
                <div className='logo'><Link className='NavLink' to='/' style={{ color: '#0E692D' }}><div><img src={logo} style={{marginLeft: '20px'}} width='50px' height='50px'/><span style={{marginLeft: '10px', fontSize: '14px', fontWeight: '800'}}>DOUBLE INVESTMENTS</span></div></Link></div>
                <div className='mobile_bar'><i className='fas fa-bars awesomeFont' onClick={sidebarOpen}></i></div>
                <ul className='home_links_my'>
                    <ScrollTo className='NavLink' selector={'#about'}><li className={'li_change'}>ABOUT</li></ScrollTo>
                    <ScrollTo className='NavLink' selector={'#howItWorks'}><li className={'li_change'}>HOW IT WORKS</li></ScrollTo>
                    <ScrollTo className='NavLink' selector={'#testimonial'}><li className={'li_change'}>TESTIMONIAL</li></ScrollTo>
                    <ScrollTo className='NavLink' selector={'#contactus'}><li className={'li_change'}>CONTACT US</li></ScrollTo>
                    <Link className='NavLink' to='/login'><li style={{ border: '1px solid #0E692D' }} className={'li_change'}>LOGIN</li></Link>
                    <Link className='NavLink' to='/register'><li style={{ backgroundColor: '#0E692D', color: '#fff', border: '1px solid #0E692D' }} className={'li_change'}>REGISTER</li></Link>
                </ul>
            </div>
            <ul className={classes}>
                <div className='mobile_div' style={{ display: sidebar ? 'block' : 'none' }}>
                    <ScrollTo className='NavLink' selector={'#about'}><li onClick={sidebarClose} className={'li_change mob_li'}>ABOUT</li></ScrollTo>
                    <ScrollTo className='NavLink' selector={'#howItWorks'}><li onClick={sidebarClose} className={'li_change mob_li'}>HOW IT WORKS</li></ScrollTo>
                    <ScrollTo className='NavLink' selector={'#testimonial'}><li onClick={sidebarClose} className={'li_change mob_li'}>TESTIMONIAL</li></ScrollTo>
                    <ScrollTo className='NavLink' selector={'#contactus'}><li onClick={sidebarClose} className={'li_change mob_li'}>CONTACT US</li></ScrollTo>
                    <Link className='NavLink' to='/login'><li onClick={sidebarClose} className={'li_change mob_li'}>LOGIN</li></Link>
                    <Link className='NavLink' to='/register'><li onClick={sidebarClose} className={'li_change mob_li'}>REGISTER</li></Link>
                </div>
            </ul>
        </>
    )
}

export default Navigation;