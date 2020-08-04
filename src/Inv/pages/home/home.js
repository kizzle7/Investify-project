import React, { useEffect } from 'react';
import './home.css'
import Navigation from '../../components/navigation/navigation';
import img1 from '../../assets/landing-image.png';
import img2 from '../../assets/landing-image.png';
import img3 from '../../assets/landing-image.png';
import img4 from '../../assets/landing-image.png';
import img5 from '../../assets/landing-image.png';
import userPen from '../../assets/user-pen.svg'
import activation from '../../assets/activation.svg'
import recommitment from '../../assets/recommitment.svg'
import referrals from '../../assets/referrals.svg'
import money1 from '../../assets/money1.svg'
import roi from '../../assets/roi.svg';
import quote from '../../assets/quote.svg';
import whatsapp from '../../assets/whatsapp.svg';
import telegram from '../../assets/telegram.svg';
import message from '../../assets/message.svg';
import about from '../../assets/aboutus2.jpg';
import double_bg from '../../assets/double_bg.png'
import landing from '../../assets/about_1.jpg'
import ab from '../../assets/about_11.jpg'


// import { setSlider } from './carousel';
import { Link } from 'react-router-dom';


const Home = (props) => {
    const bgcolor = props.location.pathname;
    console.log(bgcolor)
    useEffect(() => {
        // setSlider();
    }, [])
    return (
        <div className='home'>
            <div className='home_screen'>
                <Navigation bgcolor={bgcolor} />

                {/* Carousel Starts */}
                <div className='carousel_container'>
                    <div className='blend_cont'></div>
                    <div className='my_conta'>
                        <div className='centered'>
                            <div className='ph1'>INVEST YOUR MONEY TODAY!</div>
                            <div className='ph2'>Join over 50,000 people on <b>DOUBLE INVESTMENTS</b></div>
                            <div className='ph3'>It’s super simple - Your signup process had been made easy.
As soon as your payment is received, you will earn your first profit of 100% integrity in 3-7 days with our amazing packages</div>
                            <Link to='/register'><button className='get_started_btn'>Get started now!</button></Link>
                        </div>
                    </div>
                    <div className='carousel_slide'>
                        <img src={ab} alt='' className='my_image' id='lastClone' />
                        {/* <img src={img1} alt='' className='my_image' />
                        <img src={img2} alt='' className='my_image' />
                        <img src={img3} alt='' className='my_image' />
                        <img src={img4} alt='' className='my_image' />
                        <img src={img5} alt='' className='my_image' />
                        <img src={img1} alt='' className='my_image' id='firstClone' /> */}

                    </div>
                </div>
                {/* Carouse Ends */}
                {/* About page Starts */}
                <div className='about_page_cont' id={'about'}>
                    <div className='about_page'>
                        <div className='home_title' style={{ color: 'black', marginBottom: '30px' }}>
                            <div>About Us</div>
                            <div style={{ border: '2px solid #0E692D' }} className='home_bar' />
                        </div>
                        <div className='row' style={{ margin: '0px' }}>
                            <div className='col-md-6 about_frame'>
                                <div className='img_cont'>
                                    <img src={landing} className='about_img' />
                                </div>
                            </div>
                            <div className='col-md-6 about_cont'>
                                <div className='about_c'>
                                    <h3 className='_great'>What makes us great</h3>
                                    <p className='_p'>
                                    Double investments limited is a credible and trusted platform that gives opportunity to investors with active project to come together and operate on peer to peer support scheme in financing their projects. With the low and medium income earners in mind to come together and make something out of their income.
                                </p>
                                    <p className='_p'>
                                    Double investments limited is not a ponzi scheme, nor a financial institution, but a platform that is secured and uses every power lawfully to protest people's resources and help them achieve their goal.
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About page ends */}
                {/* How it works starts */}
                <div className='how_it_works' id={'howItWorks'}>
                    <div>
                        <div className='home_title'>
                            <div>How it works</div>
                            <div className='home_bar' />
                        </div>
                        <div className='row my_own_cont'>
                            <div className='col-md-6'>
                                <div className='home_items'>
                                    <div>
                                        <div className='my_icon'><img src={userPen} /></div>
                                        <div className='my_title_'>Register with a free account</div>
                                        <div className='my_receive'>To receive donations in <b>DOUBLE Investment,</b> you will have to start by registering with a free account. </div>
                                        <Link to='/register' style={{ marginTop: '40px' }} className='my_register'>Click here to register.</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='home_items'>
                                    <div>
                                        <div className='my_icon'><img src={referrals} /></div>
                                        <div className='my_title_'>5% Referral bonus</div>
                                        <div className='my_receive'>You earn one time referral bonus on any of your active downline. </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row my_own_cont'>
                         
                            <div className='col-md-6'>
                                <div className='home_items'>
                                    <div style={{ marginTop: '-22px' }}>
                                        <div className='my_icon'><img src={money1} /></div>
                                        <div className='my_title_'>Fast and easy payment</div>
                                        <div className='my_receive'>We give the fastest means of transfer, to make payment easier. </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='home_items'>
                                    <div style={{ marginTop: '-22px' }}>
                                        <div className='my_icon'><img src={roi} /></div>
                                        <div className='my_title_'>50% ROI</div>
                                        <div className='my_receive'>You earn 50% ROI when you invest with us today, every 3-7 days. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* How it works ends */}

                {/* Packages starts */}
                {/* <div className='packages' id={'packages'}>
                    <div>
                        <div className='home_title' style={{ color: 'black' }}>
                            <div>Packages</div>
                            <div style={{ border: '2px solid #0E692D' }} className='home_bar' />
                        </div>
                    </div>
                    <div className='row packpack' style={{ marginTop: '40px' }}>
                        <div className='col-md-4'>
                            <div className='pack_items'>
                                <div className='package_headers'>
                                    <div>PREMIUM</div>
                                </div>
                                <div className='pack_'>
                                    <div className='pack_price'>NGN 5,000</div>
                                    <div className='pack_matrix'>2:1 MATRIX</div>
                                    <div className='pack_matrix'>AUTO MATCHING</div>
                                    <div className='pack_matrix'>REFERRAL BONUS</div>
                                    <div className='pack_return'>NGN 7,500</div>
                                    <div className='pack_investment'>RETURN INVESTMENT</div>
                                    <Link to='/register'><button className='joinBtn'>Join now</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='pack_items'>
                                <div className='package_headers'>
                                    <div>SILVER</div>
                                </div>
                                <div className='pack_'>
                                    <div className='pack_price'>NGN 10,000</div>
                                    <div className='pack_matrix'>2:1 MATRIX</div>
                                    <div className='pack_matrix'>AUTO MATCHING</div>
                                    <div className='pack_matrix'>REFERRAL BONUS</div>
                                    <div className='pack_return'>NGN 15,000</div>
                                    <div className='pack_investment'>RETURN INVESTMENT</div>
                                    <Link to='/register'><button className='joinBtn'>Join now</button></Link>                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='pack_items'>
                                <div className='package_headers'>
                                    <div>RUBY</div>
                                </div>
                                <div className='pack_'>
                                    <div className='pack_price'>NGN 20,000</div>
                                    <div className='pack_matrix'>2:1 MATRIX</div>
                                    <div className='pack_matrix'>AUTO MATCHING</div>
                                    <div className='pack_matrix'>REFERRAL BONUS</div>
                                    <div className='pack_return'>NGN 30,000</div>
                                    <div className='pack_investment'>RETURN INVESTMENT</div>
                                    <Link to='/register'><button className='joinBtn'>Join now</button></Link>                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row packpack' style={{ marginTop: '40px' }}>
                        <div className='col-md-4'>
                            <div className='pack_items'>
                                <div className='package_headers'>
                                    <div>GOLD</div>
                                </div>
                                <div className='pack_'>
                                    <div className='pack_price'>NGN 50,000</div>
                                    <div className='pack_matrix'>2:1 MATRIX</div>
                                    <div className='pack_matrix'>AUTO MATCHING</div>
                                    <div className='pack_matrix'>REFERRAL BONUS</div>
                                    <div className='pack_return'>NGN 75,000</div>
                                    <div className='pack_investment'>RETURN INVESTMENT</div>
                                    <Link to='/register'><button className='joinBtn'>Join now</button></Link>                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='pack_items'>
                                <div className='package_headers'>
                                    <div>DIAMOND</div>
                                </div>
                                <div className='pack_'>
                                    <div className='pack_price'>NGN 100,000 - NGN 1,000,000</div>
                                    <div className='pack_matrix'>2:1 MATRIX</div>
                                    <div className='pack_matrix'>AUTO MATCHING</div>
                                    <div className='pack_matrix'>REFERRAL BONUS</div>
                                    <div className='pack_return'>50% of investment</div>
                                    <div className='pack_investment'>RETURN INVESTMENT</div>
                                    <Link to='/register'><button className='joinBtn'>Join now</button></Link>                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* Packages ends */}
                {/* Testimonial starts */}
                <div className='testimonial' id={'testimonial'}>
                    <div>
                        <div className='home_title'>
                            <div>Testimonial</div>
                            <div className='home_bar' />
                        </div>
                    </div>
                    <div className='row test_cont'>
                        <div className='col-md-4'>
                            <div className='test_item'>
                                <div className='test_icon'><img src={quote} /></div>
                                <div className='test_content'>
                                    I'VE BEEN ABLE TO STOCK UP MY SHOP ONCE AGAIN BECAUSE OF THIS WONDERFUL PLATFORM, THANK YOU DOUBLE investment.
                                </div>
                                <div className='my_h_rule' />
                                <div className='test_name'>
                                    Obafemi ladipo
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='test_item'>
                                <div className='test_icon'><img src={quote} /></div>
                                <div className='test_content'>
                                    So this is my third payment from dOUBLE investment so far and it was really unbelievable that there could be a platform that works as good as this.
                                </div>
                                <div className='my_h_rule' />
                                <div className='test_name'>
                                    Nwafor blessing
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='test_item'>
                                <div className='test_icon'><img src={quote} /></div>
                                <div className='test_content'>
                                    I didn't believe it was real initially, Just received my first money now and I am really pleased. Thanks dOUBLE investment
                                </div>
                                <div className='my_h_rule' />
                                <div className='test_name'>
                                    Williams michael
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial ends */}
                {/* TOgether starts */}
                <div className='_together'>
                    <div className='toge'>
                        <div className='together_cont'>Together we can make the world a better place</div>
                        <Link to='/register'><button className='togetherBtn'>REGISTER TODAY</button></Link>
                    </div>
                </div>
                {/* Together ends */}
                {/* Footer starts */}
                <div className='myFooter' id={'contactus'}>
                    <div className='form_offset'>
                        <div>
                            <form className='myForm'>
                                <div className='myContact'>
                                    <div>Contact Us</div>
                                    <div><img src={message} /></div>
                                </div>
                                <div className='help_input'>
                                    <label>Name</label>
                                    <input type='text' placeholder='Dele Mustapha' />
                                </div>
                                <div className='help_input'>
                                    <label>Email</label>
                                    <input type='email' placeholder='delemustapha@gmail.com' />
                                </div>
                                <div className='help_input'>
                                    <label>Subject</label>
                                    <input type='text' placeholder='enter your subject' />
                                </div>
                                <div className='help_input'>
                                    <label>Message</label>
                                    <textarea placeholder='drop your message here...'></textarea>
                                </div>
                                <button className='btnSend' type='submit'>Send</button>
                            </form>
                        </div>
                    </div>
                    <div className='my_social'>
                        {/* <img src={whatsapp} />
                        <img src={telegram} id='telegram_' /> */}
                    </div>
                </div>
                <div className='footer_small'>©2020 DOUBLE INVESTMENT - All rights reserve</div>
                {/* Footer ends */}
            </div>
        </div>
    )
}

export { Home }