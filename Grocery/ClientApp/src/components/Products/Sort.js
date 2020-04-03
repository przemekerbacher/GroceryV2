import React from "react";

const Sort = ({ sortby, setSortby }) => {
  const handleSort = e => {
    e.preventDefault();

    if (sortby.toString().includes("descending")) {
      setSortby(e.currentTarget.getAttribute("data-sort"));
    } else {
      setSortby(e.currentTarget.getAttribute("data-sort") + "-descending");
    }
  };

  return (
    <nav className="sort">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="btn page-link"
            onClick={handleSort}
            data-sort="name"
          >
            <div className="content">
              <span>Nazwa</span>
              <div className="sort-icons">
                <i
                  className={`fas fa-long-arrow-alt-up${
                    sortby === "name" ? " active" : ""
                  }`}
                ></i>
                <i
                  className={`fas fa-long-arrow-alt-down${
                    sortby === "name-descending" ? " active" : ""
                  }`}
                ></i>
              </div>
            </div>
          </button>
        </li>
        <li className="page-item">
          <button
            className="btn page-link"
            onClick={handleSort}
            data-sort="price"
          >
            <div className="content">
              <span>Cena</span>
              <div className="sort-icons">
                <i
                  className={`fas fa-long-arrow-alt-up${
                    sortby === "price" ? " active" : ""
                  }`}
                ></i>
                <i
                  className={`fas fa-long-arrow-alt-down${
                    sortby === "price-descending" ? " active" : ""
                  }`}
                ></i>
              </div>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sort;
