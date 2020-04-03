import React from "react";

const Carousel = props => {
  return (
    <div
      id="carouselIndicators"
      className="carousel slide container"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/carousel/breadstuff.jpg"
            className="d-block w-100 img-fluid"
            alt="breadstuff"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/carousel/dairy.jpg"
            className="d-block w-100 img-fluid"
            alt="dairy"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/carousel/stock.jpg"
            className="d-block w-100 img-flud"
            alt="stock"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
