import React from 'react';
import blog1 from '../../portfolio-img/blogo1.png';
import blog2 from '../../portfolio-img/blogo2.png';
import blog3 from '../../portfolio-img/blogo3.png';
import blog4 from '../../portfolio-img/blogo4.png';
import blog5 from '../../portfolio-img/blogo5.png';
import blog6 from '../../portfolio-img/blogo6.png';
import blog7 from '../../portfolio-img/blogo7.png';
import blog8 from '../../portfolio-img/blogo8.png';
import blog9 from '../../portfolio-img/blogo9.png';
import '../Home/Home.css';

const HomeLogos = () => {
    return (
        <div className='px-12'>
            <div id='logo' className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-12 justify-center items-center px-12 my-16'>
                <img className='transition duration-300 delay-150 hover:delay-0' src={blog1} alt="" />
                <img src={blog2} alt="" />
                <img src={blog3} alt="" />
                <img src={blog4} alt="" />
                <img src={blog5} alt="" />
                <img src={blog6} alt="" />
                <img src={blog7} alt="" />
                <img src={blog8} alt="" />
                <img src={blog9} alt="" />
            </div>
        </div>
    );
};

export default HomeLogos;