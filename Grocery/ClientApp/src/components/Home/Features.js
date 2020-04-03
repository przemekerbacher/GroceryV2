import React from "react";

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="feature">
        <div className="image">
          <img
            className="img-fluid"
            src="images/features/delivery.jpg"
            alt="delivery"
          />
        </div>
        <h2 className="hideme">dostawa do domu</h2>
        <p className="hideme">Zrób zakupy nie wychodząc z domu</p>
      </div>
      <div className="feature">
        <div className="image">
          <img
            className="img-fluid"
            src="images/features/notes.jpg"
            alt="notes"
          />
        </div>
        <div>
          <h2 className="hideme">zakupy na zeszyt</h2>
        </div>
        <div>
          <p className="hideme">
            Nie masz jak zapłacić od razu? Żaden problem. Zrób zakupy i zapłać
            później.
          </p>
        </div>
      </div>
      <div className="feature">
        <div className="image">
          <img
            className="img-fluid"
            src="images/features/receipe.jpg"
            alt="receipe"
          />
        </div>
        <h2 className="hideme">historia zakupów</h2>
        <p className="hideme">
          Już nie musisz martwić się o to, że zgubisz paragon
        </p>
      </div>
    </section>
  );
};

export default Features;
