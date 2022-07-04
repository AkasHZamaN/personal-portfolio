import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import React from "react";

const PurchaseModal = () => {
  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <div className="modal-action m-0">
            <label htmlFor="purchase-modal" className="btn btn-primary btn-sm">
              X
            </label>
          </div>
          <div className="form-control">
                  <h6 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-rose-500 to-primary">Let's Say Hi</h6>
                  <h1 className="text-4xl font-bold text-accent">Hire Me!</h1>

                  <p className="mt-4"><small className="text-primary flex"><PhoneIcon className="w-5 h-5 mr-4"></PhoneIcon><span className="text-accent font-bold">+8801725421914</span></small></p>

                  <p className="mb-4"><small className="text-primary flex"><MailIcon className="w-5 h-5 mr-4"></MailIcon> <span className="text-accent font-bold">kawseruzzaman05@gmail.com</span></small></p>
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
                  <button type="submit" className="btn btn-primary text-white">Purchase!</button>
                </div>
              </div>
              </form>

          
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
