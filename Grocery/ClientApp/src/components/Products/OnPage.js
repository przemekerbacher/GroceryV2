import React from "react";

const OnPage = ({ setOnPage, onPage }) => {
  const handleChangeOnPage = e => {
    e.preventDefault();
    setOnPage(parseInt(e.target.getAttribute("data-onpage")));
  };

  const base = 32;

  return (
    <nav aria-label="Page navigation" className="pr-1">
      <ul className="pagination">
        <ul className="pagination">
          <li className={`page-item${onPage === base ? " active" : ""}`}>
            <button
              className="btn page-link"
              onClick={handleChangeOnPage}
              data-onpage={base}
            >
              {base}
            </button>
          </li>
          <li className={`page-item${onPage === base * 2 ? " active" : ""}`}>
            <button
              className="btn page-link"
              onClick={handleChangeOnPage}
              data-onpage={base * 2}
            >
              {base * 2}
            </button>
          </li>
          <li className={`page-item${onPage === base * 3 ? " active" : ""}`}>
            <button
              className="btn page-link"
              onClick={handleChangeOnPage}
              data-onpage={base * 3}
            >
              {base * 3}
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
};

export default OnPage;
