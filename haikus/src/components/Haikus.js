import React from "react";
import { Haiku } from "./Haiku.js";
import { useState, useEffect } from "react";
import { fetchHaiku } from "./fetchHaiku.js";
import { useDisableButton } from "./disableButton.js";
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
  // typewriter UseEffect
  useEffect(() => {
    // declaring the index
    let index = -1;
    // setting the interval for the typewriter to render text
    const typingInterval = setInterval(() => {
      // updating the typewriter text state previous typewriter Text
      setTypewriterText((prevTypewriterText) => {
        // ensuring that '.undefined' will not be rendered at the end of the typewriter string
        const nextChar = generatedHaiku[index];
        return nextChar !== undefined
          ? prevTypewriterText + nextChar
          : prevTypewriterText;
      });
      index++;
      // ending the typewrietypewriter effect
      if (index === generatedHaiku.length) {
        clearInterval(typingInterval);
      }
    }, 75); // setting the interval between character renders

    // Clean up the interval when the component unmounts
    return () => clearInterval(typingInterval);
  }, [generatedHaiku]);

  const defaultText = "On which topic do you seek ancient wisdom?";
  return (
    <section className="haikusAll">
      <div className="haikuDiv">
        <p className="displayText">
          {/* if generated haiku hasnt been set yet, display default text */}
          {!generatedHaiku ? defaultText : typewriterText}
        </p>
      </div>
      <form className="inputTopic" onSubmit={handleSubmit}>
        <input
          className="inputBox"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search the archives..."
        ></input>
        <br></br>
        <button className="button" type="submit">
          Request
        </button>
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
