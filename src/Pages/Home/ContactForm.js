import React from "react";
import contactPhoto from '../../portfolio-img/About-Contact-F.png';

const ContactForm = () => {
  return (
    <div className="w-100 mx-auto">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="w-100 mx-auto" src={contactPhoto} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                  <h6 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-rose-500 to-primary">Let's Say Hi</h6>
                  <h1 className="text-4xl font-bold text-accent">Hire Me!</h1>
                  <p className="mt-4"><small className="text-accent font-bold ">Call Us Directly: +8801725421914</small></p>
                  <p className="mb-4"><small className="text-accent font-bold ">Contact Email: kawseruzzaman05@gmail.com</small></p>
                  </div>
                
              
              <form action="https://formsubmit.co/b1b93d1ec43ef89f27f9490d02c3f0a4" method="POST">
              <div className="form-control">
              <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />

                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                />
                <label className="label">
                  <span className="label-text mt-2">Your Text</span>
                </label>
                <textarea className="textarea input input-bordered" name="message" placeholder="Your Text Message"></textarea>
                
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary text-white">Send Text</button>
                </div>
              </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
