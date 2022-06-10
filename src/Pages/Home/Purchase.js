import React from "react";
import PurchaseModal from "./PurchaseModal";

const Purchase = () => {
  return (
    <div className="w-100 mx-auto overflow-x-hidden">
      <div className="hero bg-primary mt-6">
      <div className="hero-content text-center">
        <div className="max-w-lg py-6">
          <h1 className="text-4xl font-bold text-white">Ready to start creating a standard website?</h1>
          <label htmlFor="purchase-modal" className="btn btn-neutral rounded-full text-white mt-6">Purchase Kawser</label>
        </div>
      </div>
      <PurchaseModal></PurchaseModal>
    </div>
    </div>
  );
};

export default Purchase;
