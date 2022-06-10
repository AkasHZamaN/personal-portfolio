import React from 'react';
import pic1 from "../../portfolio-img/grocery-farm/Grocery-Farm-product.png";
import pic2 from "../../portfolio-img/grocery-farm/Grocery-Farm-prodInfo.png";
import pic3 from "../../portfolio-img/grocery-farm/Grocery-Farm-orders.png";

const GroceryDetails = () => {
    return (
        <div>
      <div class="carousel w-3/5 mx-auto my-6">
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

      <div class="card w-100 my-6 shadow-xl">
        <div class="w-3/5 mx-auto">
          <h2 class="text-accent font-bold uppercase">SUPER BY CYCLE PARTS SHOP</h2>
          <p className="text-accent">1. This project is authentication-based and has validation and verification.</p>
          <p className="text-accent">2. Users can see the ordered product by using their email addresses.</p>
            <p className="text-accent">3. Users can modify stored data, like update or delete.</p>
            <p className="w-100 my-4">
                <a href="https://grocery-farm-ff36c.web.app/"><button className="btn btn-sm ml-4 my-2">Live Link</button></a>

                <a href="https://github.com/AkasHZamaN/grocery-faram-client-side"><button className="btn btn-sm ml-4 my-2">Client Link</button></a>

                <a href="https://github.com/AkasHZamaN/grocery-farm-server-side"><button className="btn btn-sm ml-4 my-2">Server Link</button></a></p> 
        </div>
      </div>
    </div>
    );
};

export default GroceryDetails;