import React from "react";
import bannerLogo from "../../portfolio-img/homeBann.png";

const HomeBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={bannerLogo} className="max-w-sm rounded-lg " alt="" />
          <div>
            <h6 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-rose-500 to-primary my-4">FREELANCE DIGITAL DESIGNER</h6>
            <h1 style={{fontFamily:'Public Sans, sans-serif'}} className="text-5xl text-accent font-bold">Hello, I'm <span className="text-primary">Kawser Uzzaman.</span></h1>
            <p className="py-6">
              I'm working on a professional, visually sophisticated and
              technologically proficient, responsive and multi-functional React
              Template.
            </p>
            <a href="https://drive.google.com/file/d/11UVY6uHlyoR-iv1SqY5XoQcbvnn5F-_z/view?usp=sharing">
            <button className="btn btn-primary">Download Resume</button>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
