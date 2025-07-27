import React from 'react';

const CartItem = () => {
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 justify-center">
        <div className="text-center text-gray-400 italic">
          Your cart is empty.
        </div>
      </div>
    </div>
  );
};

export default CartItem;
