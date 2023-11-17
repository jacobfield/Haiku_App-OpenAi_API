import React from "react";
import { Haiku } from "./Haiku.js";
import { useState, useEffect } from "react";
import { fetchHaiku } from "./fetchHaiku.js";

export function Haikus({ haikuData }) {
  const [inputValue, setInputValue] = useState("");
  const [generatedHaiku, setGeneratedHaiku] = useState("");
  // function to handle input change
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  // function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    let haikuTopic = inputValue;
    // setGeneratedHaiku(newHaiku);
    setGeneratedHaiku(fetchHaiku(haikuTopic));
    console.log(generatedHaiku);
  }

  return (
    <section className="haikusAll">
      <form className="inputTopic" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Choose a topic"
        ></input>
        <button type="submit">Submit</button>
      </form>
      {haikuData.map((haiku) => (
        <Haiku
          key={haiku.id}
          haikuData={haiku}
          generatedHaiku={generatedHaiku}
          handleSubmit={handleSubmit}
        />
      ))}
      <img
        alt="moon and sun tarot"
        src="https://thumbs.dreamstime.com/b/mystical-drawing-sun-face-moon-crescent-moon-background-tarot-card-magic-boho-illustration-golden-sun-208609708.jpg"
      ></img>
    </section>
  );
}
