import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  //useState variables for storing tours array and boolean variable loading
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  //function to remove tours
  const removeTours = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  //function to fetch tours from api (async await has to be used)
  const getTours = async () => {
    try {
      setLoading(true); //to make sure loading is true
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log("error"); //shows network failure errors
    }
  };

  //useEffect: [] signifies that getTours is called only in the initial render of App component
  useEffect(() => getTours(), []);

  //conditional return statements
  //while data is not yet fetched
  if (loading)
    return (
      <main>
        <div className="loading">
          <Loading />
        </div>
      </main>
    );

  //when all tours are removed
  if (tours.length === 0) {
    return (
      <main>
        <div className="loading">
          <h3>No tours left</h3>
          <button className="btn" onClick={getTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  //after tours are fetched successfully
  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
}

export default App;
