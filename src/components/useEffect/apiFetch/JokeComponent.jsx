import React, { useState, useEffect } from "react";
import axios from "axios";

const JokeComponent = ({ id, onRemove }) => {
  const [joke, setJoke] = useState({ setup: "", delivery: "" });

  useEffect(() => {
    console.log(`Joke component ${id} mounted`);
    // Fetch the joke from the API when the component mounts using axios
    axios
      .get("https://v2.jokeapi.dev/joke/Programming")
      .then((response) => {
        const data = response.data;
        const setup = data.setup ? data.setup : "No joke";
        const delivery = data.delivery ? data.delivery : "No joke";
        setJoke({ setup, delivery });
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
      });

    // Simulate componentWillUnmount
    return () => {
      console.log(`Joke component ${id} unmounted`);
    };
  }, [id]);

  return (
    <>
      {joke.setup !== "No joke" && (
        <div className="joke">
          <h4>Programming Joke</h4>
          <p>{joke.setup}</p>
          <p>{joke.delivery}</p>
          <button className="joke-btn" onClick={() => onRemove(id)}>
            Remove Joke
          </button>
        </div>
      )}
    </>
  );
};

export default JokeComponent;
