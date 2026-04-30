'use client'

import { toast } from "react-toastify";

const BuyButton = ({ animalName }) => {
    const handleBuy = () => {
        toast.success(`${animalName} Purchase request accepted!`);
       
    };

    return (
        <button
            onClick={handleBuy}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm"
        >
            Buy Now
        </button>
    );
};

export default BuyButton;