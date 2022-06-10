import React from "react";
import superBycycle from '../../portfolio-img/Super-Bike.png';
import groceryFarm from '../../portfolio-img/grocery-farm.png';
import alexGymStone from '../../portfolio-img/alex-gym-ston.png';
import { Link } from "react-router-dom";

const HomeProject = () => {
  return (
    <div className="w-4/5 mx-auto">
      <h6 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-rose-500 to-primary uppercase my-4">
        My Project Portfolio
      </h6>

      <h1 className="text-4xl text-center text-accent font-bold uppercase">
        Some of My Recent Works
      </h1>
      <p className="text-center text-accent">
        There are some projects which I'm trying to work on this.
      </p>

                {/* Portfolio  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6 justify-items-center">
      <div className="card w-96  image-full">
        <figure>
          <img
            src={superBycycle}
            alt="images"
          />
        </figure>
        <div className="card-body mt-12">
          <h2 className="card-title text-white justify-end">Super By Cycle Parts Shop</h2>
          <div className="card-actions justify-end">
            <Link to={'/details'}>
            <button className="btn btn-primary text-white">Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 image-full">
        <figure>
          <img
            src={groceryFarm}
            alt="images"
          />
        </figure>
        <div className="card-body mt-12">
          <h2 className="card-title text-white justify-end">Grocery & Organic Food </h2>
          <div className="card-actions justify-end">
            <Link to={'/grocery'}>
            <button className="btn btn-primary text-white">Details</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 image-full">
        <figure>
          <img
            src={alexGymStone}
            alt="images"
          />
        </figure>
        <div className="card-body mt-12">
          <h2 className="card-title text-white justify-end">Alex Gym Stone</h2>
          <div className="card-actions justify-end">
            <Link to={'/gym'}>
            <button className="btn btn-primary text-white">Details</button>
            </Link>
          </div>
        </div>
      </div>
      </div>




    </div>
  );
};

export default HomeProject;
