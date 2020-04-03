import React from "react";

const DisplayOnSite = props => {
  return (
    <div className="pagination-element mb-2">
      <div className="container p-0">
        <div className="d-flex justify-content-end">{props.children}</div>
      </div>
    </div>
  );
};

export default DisplayOnSite;
