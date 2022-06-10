import React from 'react';
import footerLogo from '../../portfolio-img/portfolioLogo.png';
import facebook from '../../portfolio-img/facebook.png';
import github from '../../portfolio-img/github.png';
import linkedin from '../../portfolio-img/linkedin.png';

const Footer = () => {
    return (
        <div className='w-100 mx-auto overflow-x-hidden'>
            <div className='w-100 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center items-center bg-neutral p-4 '>

                <img className='w-15 h-16' src={footerLogo} alt="" />

            <div className='text-white flex'>
                <a href='https://www.facebook.com/akash.zaman.18400'><img className='w-8 h-8 mr-2 rounded-full' src={facebook} alt="" /></a>
                <a href='https://github.com/AkasHZamaN'><img className='w-8 h-8 mr-2 rounded-full' src={github} alt="" /></a>
                <a href='https://www.linkedin.com/in/md-kawser-uzzaman-4586ba230/'><img className='w-8 h-8 mr-2 rounded-full' src={linkedin} alt="" /></a>
            </div>
    
                <p className='text-white opacity-50 font-bold'>Copyright ⓒ 2022 || allrights reserves</p>

        </div>
        </div>
    );
};

export default Footer;