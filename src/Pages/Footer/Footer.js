import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../portfolio-img/portfolioLogo.png';

const Footer = () => {
    return (
        <div className='w-100 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center items-center bg-neutral p-4 '>
            <div>
                <img className='w-16 h-16' src={footerLogo} alt="" />
            </div>
            <div className='text-white'>
                <Link className='mr-4 font-bold' to={'#'}>Facebook</Link><Link className='mr-4 font-bold' to={'#'}>Instagram</Link><Link className='mr-4 font-bold' to={'#'}>in</Link>
            </div>
            <div className='text-white font-bold'>Copyright ⓒ 2022 || allrights reserves</div>
        </div>
    );
};

export default Footer;