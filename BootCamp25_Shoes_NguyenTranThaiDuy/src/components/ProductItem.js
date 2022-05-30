import React from "react";
import { BsCartCheckFill } from "react-icons/bs";

const ProductItem = ({ item, onClickModal }) => {
  const {
    id,
    name,
    alias,
    price,
    description,
    shortDescription,
    quantity,
    image,
  } = item;
  return (
    <div className="card product__card mb-5">
      <img
        src={image}
        className="card-img-top  rounded product__image"
        alt={alias}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}$</p>
        <button
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() =>
            onClickModal([name, description, shortDescription, quantity])
          }
        >
          Add to carts {""}
          <BsCartCheckFill className="mb-1" />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
