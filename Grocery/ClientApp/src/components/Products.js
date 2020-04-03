import React from "react";
import Header from "./Products/Header";
import Categories from "./Products/Categories";
import Filters from "./Products/Filters";
import ProducItems from "./Products/ProductItems";
import Pagination from "./Products/Pagination";
import DisplayOnSite from "./Products/DisplayOnSite";
import OnPage from "./Products/OnPage";
import Sort from "./Products/Sort";

const Products = props => {
  const {
    page,
    setPage,
    onPage,
    setOnPage,
    maxPage,
    products,
    sortby,
    setSortby,
    filters,
    setFilters,
    categories,
    category
  } = props;

  const getMarks = () => {
    const marks = [];

    products.forEach(product => {
      if (!marks.includes(product.mark)) {
        marks.push(product.mark);
      }
    });

    return marks;
  };

  return (
    <div className="products">
      <Header />
      <Categories
        categories={categories}
        setFilters={setFilters}
        category={category}
      />
      <Filters setFilters={setFilters} marks={getMarks()} filters={filters} />
      <DisplayOnSite>
        <Sort sortby={sortby} setSortby={setSortby} />
        <OnPage onPage={onPage} setOnPage={setOnPage} />
        <Pagination page={page} setPage={setPage} maxPage={maxPage} />
      </DisplayOnSite>

      <ProducItems products={products} />

      <DisplayOnSite>
        <OnPage onPage={onPage} setOnPage={setOnPage} />
        <Pagination page={page} setPage={setPage} maxPage={maxPage} />
      </DisplayOnSite>
    </div>
  );
};

export default Products;
