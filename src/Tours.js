import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTours }) => {
  //console.log(tours);
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>

      {/* rendering tours using Tour component */}
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTours={removeTours} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
