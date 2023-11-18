import React, { useState, useEffect } from "react";
import "./Typewriter.css"; // Create a separate CSS file for styling if needed

const Typewriter = () => {
  const [text, setText] = useState("");
  const textToType = "This is a typewriter effect in React.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setText((prevText) => prevText + textToType[index]);
      index++;

      if (index === textToType.length) {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust the timing as needed

    // Clean up the interval when the component unmounts
    return () => clearInterval(typingInterval);
  }, [textToType]);

  return (
    <div className="typewriter">
      <p>{text}</p>
    </div>
  );
};

export default Typewriter;
