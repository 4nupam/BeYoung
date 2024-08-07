import React from 'react';
import { useNavigate } from 'react-router';
import { CiLock } from "react-icons/ci";
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className='mx-4 md:mx-8 lg:mx-16'>
      <div className="banner rounded-sm mt-4 bg-black flex items-center justify-center gap-4 text-yellow-300 p-3">
        <CiLock /> We are 100% Safe 
      </div>

      <div className="cart_product mt-4 p-4 border border-gray-200 rounded-lg flex flex-col md:flex-row items-center gap-4">
        <img src="" alt="Product" className="w-24 h-24 object-cover" />
        <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full">
          <span className="font-semibold text-gray-800">Product</span>
          <span className="text-gray-600">Category</span>
          <span className="font-semibold text-gray-800">$ Price</span>
          <div className="flex items-center gap-2">
            <button className="px-2 py-1 bg-gray-200 rounded">+</button>
            <span>1</span>
            <button className="px-2 py-1 bg-gray-200 rounded">-</button>
          </div>
        </div>
        <MdCancel className='text-red-600 text-xl cursor-pointer'/>
      </div>

      <div className="total_Price mt-4 p-4 border border-gray-200 rounded-lg flex justify-between items-center">
        <span className="font-semibold text-gray-800">Total Price: $23</span>
        <button className="font-bold text-gray-800  p-3 bg-yellow-300 rounded-lg">$ Total Price</button>
      </div>

      <button
        className='text-yellow-300 flex items-center gap-2 justify-center mt-4 mb-4 p-3 bg-black rounded-lg'
        onClick={() => navigate("/")}
      >
        Continue To Shopping <FaAngleDoubleRight className='mt-1' />
      </button>
    </div>
  );
}

export default Cart;
