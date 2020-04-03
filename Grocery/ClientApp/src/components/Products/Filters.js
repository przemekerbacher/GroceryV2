import React, { useState } from "react";

const Filters = ({ setFilters, marks, filters }) => {
  const [filterValues, setFilterValues] = useState(filters);

  const options = marks.map((mark, id) => (
    <option key={id} value={mark}>
      {mark}
    </option>
  ));

  const handleChangeValue = e => {
    if (e.currentTarget.type === "number") {
      if (e.currentTarget.value >= 0)
        setFilterValues({
          ...filterValues,
          [e.currentTarget.name]: parseFloat(e.currentTarget.value)
        });
    } else {
      setFilterValues({
        ...filterValues,
        [e.currentTarget.name]: e.currentTarget.value
      });
    }
  };

  const handleClearValues = e => {
    e.preventDefault();
    setFilters({ name: "", mark: "", priceLow: "", priceHigh: "" });
  };

  const handleSendValues = e => {
    e.preventDefault();
    setFilters(filterValues);
  };
  return (
    <div className="filters mb-2">
      <div className="container mt-2 p-3 bg-white border">
        <div className="bg-white rounded p-0 row m-0 content">
          <div className="filter form-group m-0 p-0">
            <label htmlFor="name">Nazwa</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={filterValues.name}
              onChange={handleChangeValue}
            />
          </div>
          <div className="filter form-group m-0 p-0">
            <label htmlFor="mark">Marka</label>
            <select
              className="form-control"
              name="mark"
              id="mark"
              value={filterValues.mark}
              onChange={handleChangeValue}
            >
              <option value="">Wybierz...</option>
              {options}
            </select>
          </div>
          <div className="filter m-0 p-0">
            <label htmlFor="price">Cena</label>
            <div className="form-group d-flex price">
              <div className="low">
                <input
                  id="price"
                  type="number"
                  name="priceLow"
                  className="form-control w-100"
                  value={filterValues.priceLow}
                  onChange={handleChangeValue}
                />
              </div>
              <div className="splitter d-flex align-items-center justify-content-center px-2">
                <span>-</span>
              </div>
              <div className="high">
                <input
                  type="number"
                  name="priceHigh"
                  className="form-control w-100"
                  value={filterValues.priceHigh}
                  onChange={handleChangeValue}
                />
              </div>
            </div>
          </div>
          <div className="d-flex w-100 justify-content-end">
            <button className="btn btn-info ml-auto" onClick={handleSendValues}>
              Filtruj
            </button>
            <button className="btn btn-info ml-1" onClick={handleClearValues}>
              Wyczyść
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
