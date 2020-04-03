import "./styles/css/app.css";
import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import { ApplicationPaths } from "./components/api-authorization/ApiAuthorizationConstants";
import Products from "./components/Products";
import Categories from "./components/Products/Categories";
import Carousel from "./components/Products/Carousel";
import Promotions from "./components/Products/Promotions";
import Header from "./components/Products/Header";
import AuthorizeRoute from "./components/api-authorization/AuthorizeRoute";
import ApiAuthorizationRoutes from "./components/api-authorization/ApiAuthorizationRoutes";
import DataGetter from "./dataAccess/DataGetter";

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [onPage, setOnPage] = useState(32);
  const [maxPage, setMaxPage] = useState(0);
  const [sortby, setSortby] = useState("name");
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    mark: "",
    priceLow: "",
    priceHigh: "",
    category: ""
  });

  useEffect(() => {
    getProducts();
    calculateMaxPage();
    getCategories();
  }, [page, sortby, filters]);

  useEffect(() => {
    setPage(1);
    calculateMaxPage();
  }, [onPage]);

  const getCategories = async () => {
    const dataGetter = new DataGetter();

    await dataGetter.getCatgories().then(data => {
      setCategories(data);
    });
  };

  const getProducts = async () => {
    const dataGetter = new DataGetter();
    let products;
    let min = 0;
    let max = 1000000;

    if (filters.priceHigh !== "") {
      max = filters.priceHigh;
    }

    if (filters.priceLow !== "") {
      min = filters.priceLow;
    }

    await dataGetter
      .getData(
        `?page=${page}&onPage=${onPage}&sortby=${sortby}&name=${filters.name}&mark=${filters.mark}&priceLow=${min}&priceHigh=${max}&category=${filters.category}`
      )
      .then(data => {
        products = data;
      });

    setProducts(products);
  };

  const calculateMaxPage = async () => {
    const dataGetter = new DataGetter();
    let min = 0;
    let max = 1000000;
    let count;
    let displayOnPage;

    if (filters.priceHigh !== "") {
      max = filters.priceHigh;
    }

    if (filters.priceLow !== "") {
      min = filters.priceLow;
    }

    await dataGetter
      .getCount(
        `?&name=${filters.name}&mark=${filters.mark}&priceLow=${min}&priceHigh=${max}&category=${filters.category}`
      )
      .then(data => {
        count = data;
      });

    displayOnPage =
      count % onPage > 0
        ? Math.floor(count / onPage) + 1
        : Math.floor(count / onPage);

    setMaxPage(displayOnPage);
  };

  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route
        path="/products"
        component={() => {
          return (
            <Products
              products={products}
              page={page}
              setPage={setPage}
              onPage={onPage}
              setOnPage={setOnPage}
              maxPage={maxPage}
              setMaxPage={setMaxPage}
              sortby={sortby}
              setSortby={setSortby}
              filters={filters}
              setFilters={setFilters}
              categories={categories}
              category={filters.category}
              setFilters={setFilters}
            />
          );
        }}
      />
      <Route
        path="/categories"
        component={() => (
          <div className="products">
            <Header name="Kategorie" />
            <Categories
              categories={categories}
              setFilters={setFilters}
              category={filters.category}
            />
            <Carousel />
            <Promotions />
          </div>
        )}
      />
      <AuthorizeRoute path="/fetch-data" component={FetchData} />
      <Route
        path={ApplicationPaths.ApiAuthorizationPrefix}
        component={ApiAuthorizationRoutes}
      />
    </Layout>
  );
};

export default App;
