import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItems = ({ itemCards }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) => {

    dispatch(addItem(item))

  }
  return (
    <div>
      {itemCards.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center justify-between border-b border-gray-200 py-4"
        >
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-purple-900">{item.card.info.name}</h3>
            <p className="text-gray-600 mt-2">{item.card.info.description}</p>
            <p className="text-blue-500 mt-2">
              $ {(item.card.info.price / 100 || item.card.info.defaultPrice / 100).toFixed(2)}
            </p>
          </div>
          <div className="relative ml-4">
            <div className="relative">
              <img
                className="h-32 w-32 rounded-lg object-cover"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/${item.card.info.imageId}`}
                alt="res-logo"
              />
              <button className="bg-yellow-500 text-white px-3 py-2 rounded-full hover:bg-yellow-600 focus:outline-none absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2" onClick={()=>handleAddItem(item)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
