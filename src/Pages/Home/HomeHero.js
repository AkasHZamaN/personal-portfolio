import React from "react";
import picture from "../../portfolio-img/about.png";

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
                    <p className="text-accent">Leading University, Sylhet</p>
                    <small className="text-accent">Graduated on CSE</small>
                </div>
                <div>
                    <h5 className="text-accent font-bold my-3">My Strategy</h5>
                    <p className="text-accent">
                        1. Aim for a responsive design. <br />
                        2. Gather a good team. <br />
                        3. Always test and validate your projects. 
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h5 className="text-accent font-bold my-3">Development Skills</h5>
                    <p className="text-accent"> 
                        1. HTML/CSS skills. <br />
                        2. Responsive design skills. <br />
                        3. JavaScript skills.<br />
                        4. React Js. <br />
                        5. Testing and debugging skills. <br />
                        6. Back-end basics. <br /></p>
                </div>
                <div>
                    <h5 className="text-accent font-bold my-3">My Quality</h5>
                    <p className="text-accent">
                        1. Requirement testing <br />
                        2. Design evaluation <br />
                        3. Functionality testing <br />
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
