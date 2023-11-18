import React from "react";
import { Haiku } from "./Haiku.js";
import { useState, useEffect } from "react";
import { fetchHaiku } from "./fetchHaiku.js";

export function Haikus({ haikuData }) {
  // declaring state to be utilised
  const [inputValue, setInputValue] = useState("");
  const [generatedHaiku, setGeneratedHaiku] = useState("");
  const [typewriterText, setTypewriterText] = useState("");
  //
  // function to handle input change
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  //
  // function to handle form submission
  async function handleSubmit(event) {
    event.preventDefault();
    let inputTopic = inputValue;
    let newHaiku = await fetchHaiku(inputTopic);
    setGeneratedHaiku(newHaiku);
    console.log(generatedHaiku);
    setTypewriterText("");
  }
  //
  // typewriter effect
  useEffect(() => {
    let index = -1;
    const typingInterval = setInterval(() => {
      setTypewriterText(
        (prevtypewriterText) => prevtypewriterText + generatedHaiku[index]
      );
      index++;

      if (index === generatedHaiku.length) {
        clearInterval(typingInterval);
      }
    }, 75); // Adjust the timing as needed

    // Clean up the interval when the component unmounts
    return () => clearInterval(typingInterval);
  }, [generatedHaiku]);

  const defaultText = "On which topic do you seek ancient wisdom?";
  return (
    <section className="haikusAll">
      <div className="haikuDiv">
        <p className="displayText">
          {!generatedHaiku ? defaultText : typewriterText}
        </p>
      </div>
      <form className="inputTopic" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Choose a topic"
        ></input>
        <button type="submit">Submit</button>
      </form>
      {/* {haikuData.map((haiku) => (
        <Haiku
          key={haiku.id}
          haikuData={haiku}
          generatedHaiku={generatedHaiku}
          handleSubmit={handleSubmit}
        />
      ))} */}
      {/* <img
        alt="moon and sun tarot"
        src="https://thumbs.dreamstime.com/b/mystical-drawing-sun-face-moon-crescent-moon-background-tarot-card-magic-boho-illustration-golden-sun-208609708.jpg"
      ></img> */}
    </section>
  );
}
