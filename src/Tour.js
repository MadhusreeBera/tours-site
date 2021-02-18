import React, { useState } from "react";

//component to display tour elements
const Tour = ({ id, image, price, name, info, removeTours }) => {
  //to store state of readMore
  const [readMore, setReadMore] = useState(false);
  //console.log(tour);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>

        {/* read more functionality */}
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>

        {/* delete button functionality */}
        <button className="delete-btn" onClick={() => removeTours(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
