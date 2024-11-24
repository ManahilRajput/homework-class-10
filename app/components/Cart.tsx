import React from 'react';
import Image from 'next/image';

const Cart = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-5 px-5">
      <div className="bg-emerald-700 p-4 rounded-lg">
        
        <div className="flex items-center justify-center">
          <Image
            src="/Screenshot_104.png"
            alt="Product-1"
            width={350}
            height={300}
          />
        </div>
        <p className="capitalize flex justify-center mt-6">travel makeup box</p>
        <p className="text-center pt-5">PKR 2000</p>
        <div className="flex justify-center items-center my-3">
          <button className="capitalize px-10 py-4 bg-purple-700 text-white rounded-md">
            add to cart
          </button>
        </div>
      </div>

      
      <div className="bg-emerald-700 p-4 rounded-lg">
      <div className="flex items-center justify-center">
          <Image
            src="/Screenshot_105.png"
            alt="Product-2"
            width={350}
            height={300}
          />
        </div>
        <p className="capitalize flex justify-center mt-6">bagpack mini umbrella</p>
        <p className="text-center pt-5">PKR 1500</p>
        <div className="flex justify-center items-center my-3">
          <button className="capitalize px-10 py-4 bg-purple-700 text-white rounded-md">
            add to cart
          </button>
        </div>
      </div>

      
      <div className="bg-emerald-700 p-4 rounded-lg">
      <div className="flex items-center justify-center">
          <Image
            src="/Screenshot_106.png"
            alt="Product-3"
            width={350}
            height={300}
          />
        </div>
        <p className="capitalize flex justify-center mt-6">mini water bottles</p>
        <p className="text-center pt-5">PKR 2500</p>
        <div className="flex justify-center items-center my-3">
          <button className="capitalize px-10 py-4 bg-purple-700 text-white rounded-md">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;