import { useState, useEffect } from "react";

export function useDisableButton() {
  // declare state for whether button is disabled, set to false
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  function handleButtonDisable(event) {
    // insert this into existing handle click logic
    if (isButtonDisabled === false) {
      setIsButtonDisabled(true);
      // timeout the button for 7 seconds
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 7000);
    }
  }

  // cleanup the component in case it unmounts before 7 seconds
  useEffect(() => {
    return () => clearTimeout();
  }, []);
}

// make a function to handle click / or add to what already happens when clicked
// this function should take a condition, isButtonDisabled,
// if false, setIsButtonDisabled to true, disable button, wait 7 seconds, set setIsButtonDisabled to false
