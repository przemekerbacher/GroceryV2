import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories, category, setFilters }) => {
  const handleSetCategory = e => {
    const selectedCategory = e.currentTarget.getAttribute("data-category");
    setFilters(prev => ({ ...prev, category: selectedCategory }));
  };

  const categoryItems = categories.map((categoryItem, index) => {
    console.log(categoryItem.name, category);

    return (
      <div
        key={index}
        className="category col-2 col-lg-3 col-md-4 w-100 text-uppercase d-flex justify-content-center align-items-center text-center flex-wrap"
      >
        <Link
          to={`/products`}
          className="mb-1 d-block w-100 h-100 d-flex justify-content-center align-items-center"
          onClick={handleSetCategory}
          data-category={categoryItem.name}
        >
          {categoryItem.name}
        </Link>
        <span
          className={`border-span${
            category === categoryItem.name ? " active" : ""
          }`}
        ></span>
      </div>
    );
  });

  return (
    <section className="categories container row w-100 mx-auto my-5">
      <div className="category col-2 col-lg-3 col-md-4 w-100 text-uppercase d-flex justify-content-center align-items-center text-center flex-wrap">
        <Link
          to="/products"
          className="mb-1 d-block w-100 h-100 d-flex justify-content-center align-items-center"
          onClick={handleSetCategory}
          data-category=""
        >
          Wszystko
        </Link>
        <span
          className={`border-span${category === "" ? " active" : ""}`}
        ></span>
      </div>
      {categoryItems}
    </section>
  );
};

export default Categories;
