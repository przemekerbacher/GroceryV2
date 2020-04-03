import React from "react";

const ProductItem = props => {
  return (
    <div className="product-item col-sm-6 col-md-4 col-lg-3 pl-2 pr-2 pb-2 text-center">
      <div className="wrap d-flex flex-column justify-content-between h-100 border pt-5">
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid"
            src={props.productItem.image}
            alt={props.productItem.name}
          />
        </div>
        <div className="my-2 px-2">
          <h2>{props.productItem.name}</h2>
          <p>{props.productItem.description}</p>
        </div>
        <div className="row m-0 border-top">
          <div className="form-group p-0 col-6 m-0 d-flex align-items-center ">
            <input
              type="number"
              className="form-control py-2 w-100 m-0 border-right"
              placeholder="ilość"
              min="0"
              width="20px"
              name={`product-${props.productItem.id}-amount`}
              id={`product-${props.productItem.id}-amount`}
            />
          </div>
          <div className="price col-6 d-flex align-items-center row w-100 m-0 p-0">
            {props.productItem.isDiscounted === false ? (
              <span className="price col-12 w-100 text-right m-0">
                {props.productItem.price} zł
              </span>
            ) : (
              <>
                <small className="old-price col-6 w-100 text-right m-0 text-muted">
                  <s>{props.productItem.Oldprice} zł</s>
                </small>
                <span className="price col-6 w-100 text-right m-0">
                  {props.productItem.price} zł
                </span>
              </>
            )}
          </div>
          <button className="col-12 w-100 btn btn-danger">
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
