import React from "react";
import { Link } from "react-router-dom";
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
                  <p className="mb-4"><small className="text-accent font-bold ">Contact Email: +8801725421914</small></p>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to={"#"} className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">Send Text</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
