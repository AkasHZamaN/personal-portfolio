import React from "react";
import profile from '../../portfolio-img/profile.png';
import facebook from '../../portfolio-img/facebook.png';
import github from '../../portfolio-img/github.png';
import linkedin from '../../portfolio-img/linkedin.png';
import PurchaseModal from "../Home/PurchaseModal";

const Profile = () => {
  return (
    <div>
      <input type="checkbox" id="profile-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <div className="flex justify-between items-center">
          <h3 class="font-bold text-lg text-accent">
            Md. Kawser Uzzaman
          </h3>
          <img className="w-20 h-20" src={profile} alt="" />
          </div>
          <p class="py-4 text-primary">
          “It's hard enough to find an error in your code when you're looking for it; it's even harder when you've assumed your code is error-free.” - Steve McConnell
          </p>

          <p className="py-4 text-accent">
              I'm working on a professional, visually sophisticated and
              technologically proficient, responsive and multi-functional React
              Template.
            </p>
            <ul className="flex gap-4">
                <li>
                    <a href="https://drive.google.com/file/d/11UVY6uHlyoR-iv1SqY5XoQcbvnn5F-_z/view?usp=sharing" className="btn btn-primary btn-sm rounded-full text-white mt-6 uppercase">Download Resume!</a>
                </li>
                <li>
                    <label htmlFor="purchase-modal" className="btn btn-primary btn-sm rounded-full text-white mt-6">Hire Me!</label>
                </li>
            </ul>
          
          <div class="modal-action flex justify-between items-center mt-12">
          <div className='text-white flex'>
                <a href='https://www.facebook.com/akash.zaman.18400'><img className='w-6 h-6 mr-2 rounded-full' src={facebook} alt="" /></a>
                <a href='https://github.com/AkasHZamaN'><img className='w-6 h-6 mr-2 rounded-full' src={github} alt="" /></a>
                <a href='https://www.linkedin.com/in/md-kawser-uzzaman-4586ba230/'><img className='w-6 h-6 mr-2 rounded-full' src={linkedin} alt="" /></a>
            </div>
            <label for="profile-modal" class="btn btn-xs btn-primary">
              Closed!
            </label>
          </div>
        </div>
      </div>
      <PurchaseModal></PurchaseModal>
    </div>
  );
};

export default Profile;
