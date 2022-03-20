import React from "react";
import ReactModal from "../ReactModal/ReactModal";
import "./SingleProduct.css";

const SingleProduct = (props) => {
  const { addToCart } = props;
  let newTitle;
  const { title, price, image } = props.product;
  if (title.length >= 30) {
    newTitle = title.slice(0, 26) + "...";
  } else {
    newTitle = title;
  }
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{newTitle}</h5>
          <h5 className="product-price">{parseInt(price)}$</h5>
        </div>
        <div className="card-footer">
          <button onClick={addToCart} id="addToCart" className="btn btn-success me-1 mb-1">
            Add To Cart
          </button>
          {/* <button className="btn btn-success">
            Details
          </button> */}
          <ReactModal product={props.product}></ReactModal>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
