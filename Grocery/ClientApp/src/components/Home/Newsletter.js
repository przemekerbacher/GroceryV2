import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h3>Nie przegap najlepszych ofert</h3>
      <img
        className="img-fluid"
        src="/images/text-decoration.png"
        alt="text decoration"
      />
      <small>Zapisz się do naszego newslettera</small>
      <div className="form-group w-100 d-flex flex-column align-items-center">
        <label htmlFor="newsletter">E-mail</label>
        <input type="email" id="newsletter" className="form-control w-50" />
      </div>
      <button>Subskrybuj</button>
    </section>
  );
};

export default Newsletter;
