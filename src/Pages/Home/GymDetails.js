import React from 'react';
import pic1 from "../../portfolio-img/alex-gym/alex-gym-service.png";
import pic2 from "../../portfolio-img/alex-gym/alex-service-checkout-portal.png";
import pic3 from "../../portfolio-img/alex-gym/Alex-GYM-Stone-register.png";

const GymDetails = () => {
    return (
        <div>
      <div class="carousel w-3/5 mx-auto mt-6">
        <div id="item1" class="carousel-item w-full">
          <img src={pic1} class="w-full" alt="" />
        </div>
        <div id="item2" class="carousel-item w-full">
          <img src={pic2} class="w-full" alt="" />
        </div>
        <div id="item3" class="carousel-item w-full">
          <img src={pic3} class="w-full" alt="" />
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="btn btn-xs">
          1
        </a>
        <a href="#item2" class="btn btn-xs">
          2
        </a>
        <a href="#item3" class="btn btn-xs">
          3
        </a>
      </div>

      <div class="w-100 my-6 shadow-xl">
        <div class="w-3/5 mx-auto">
          <h2 class="text-accent font-bold uppercase">SUPER BY CYCLE PARTS SHOP</h2>
          <p className="text-accent">1. This project is authentication-based and has validation and verification.</p>
          <p className="text-accent">2. Users can hire quality full gym instructors.</p>
            <p className="text-accent">3. User can sign in with social login.</p>
            <p className="w-100 my-4">
                <a href="https://alex-gym-stone.web.app/"><button className="btn btn-sm ml-4 my-2">Live Link</button></a>

                <a href="https://github.com/AkasHZamaN/alex-gym-stroner-interactive"><button className="btn btn-sm ml-4 my-2">Code Link</button></a>
            </p> 
        </div>
      </div>
    </div>
    );
};

export default GymDetails;