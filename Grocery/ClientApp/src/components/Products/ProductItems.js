import React from "react";
import ProductItem from "./ProductItem";
import Loading from "./Loading";

const ProductItems = props => {
  const { products } = props;

  const productList = products.map(item => {
    return <ProductItem key={item.id} productItem={item} />;
  });

  return (
    <div className="product-items container">
      {productList.length > 0 ? (
        <div className="row">{productList}</div>
      ) : (
        <Loading type="bubbles" color="#0f514e" />
      )}
    </div>
  );
};

export default ProductItems;
