import React from "react";
import picture from "../../portfolio-img/about.png";
import { AcademicCapIcon, CheckCircleIcon } from '@heroicons/react/solid'

const HomeHero = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row">
          <img src={picture} className="max-w-sm rounded-lg" alt="" />
          <div>
            <h6 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-rose-500 to-primary uppercase my-4">
              Read about Me
            </h6>
            <h1 className="text-5xl font-bold text-accent">My About</h1>
            <p className="py-6 text-accent">
            Assalamu alaikum, I'm Kawser Uzzaman Akash. I live in Sylhet. I complete my graduation on Computer Science & Engineering at Leading University, Sylhet. Now, I'm Prepare to work for any software agency.
            <br />

            I knew that MERN Stack Web Development. I have completed web development course where I learn some programming language such as React, JavaScript, Node, Express, MongoDB etc.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h5 className="text-accent font-bold my-3">Educational Skills</h5>
                    <p className="text-accent flex"><AcademicCapIcon className="w-5 h-5 mr-2"></AcademicCapIcon> Leading University, Sylhet</p>
                    <small className="text-accent font-semibold ml-7">Graduated on CSE</small>
                </div>
                <div>
                    <h5 className="text-accent font-bold my-3">My Strategy</h5>
                    <ul className="text-accent">
                      <li className="flex"><CheckCircleIcon className="w-5 h-5 mr-2"></CheckCircleIcon> Aim for a responsive design.</li>
                      <li className="flex"><CheckCircleIcon className="w-5 h-5 mr-2"></CheckCircleIcon> Gather a good team.</li>
                      <li className="flex"><CheckCircleIcon className="w-5 h-5 mr-2"></CheckCircleIcon> Always test and validate your projects.</li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h5 className="text-accent font-bold my-3">Development Skills</h5>
                    <ul className="text-accent">
                      <li className="flex"><CheckCircleIcon className="w-5 h-5 mr-2"></CheckCircleIcon> HTML/CSS skills.</li>
                      <li className="flex"><CheckCircleIcon className="w-5 h-5 mr-2"></CheckCircleIcon> Responsive design skills.</li>
                      <li className="flex"><CheckCircleIcon className="w-5 h-5 mr-2"></CheckCircleIcon> JavaScript skills.</li>
                      <li className="flex"><CheckCircleIcon className="w-5 h-5 mr-2"></CheckCircleIcon> React Js.</li>
                      <li className="flex"><CheckCircleIcon className="w-5 h-5 mr-2"></CheckCircleIcon> Testing and debugging skills.</li>
                      <li className="flex"><CheckCircleIcon className="w-5 h-5 mr-2"></CheckCircleIcon> Back-end basics.</li>
                    </ul>
                    
                </div>
                <div>
                    <h5 className="text-accent font-bold my-3">My Quality</h5>
                    <ul className="text-accent">
                      <li className="flex"><CheckCircleIcon className="w-5 h-5 mr-2"></CheckCircleIcon> Requirement testing.</li>
                      <li className="flex"><CheckCircleIcon className="w-5 h-5 mr-2"></CheckCircleIcon> Design evaluation.</li>
                      <li className="flex"><CheckCircleIcon className="w-5 h-5 mr-2"></CheckCircleIcon> Functionality testing.</li>
                    </ul>
                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
