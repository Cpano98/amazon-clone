import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { removeFromBasket } from "../slices/basketSlice";


const MAX_RATING = 5;
const MIN_RATING = 1;

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
    };
    //Sending the product as an action to the REDUX Store.
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    //Removing the product
    dispatch(removeFromBasket({ id }));
  };

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );


  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        className="cursor-pointer"
      />

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p>${price}</p>

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-auto">
        <button className="button" onClick={addItemToBasket}>
          Add to Basket
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
