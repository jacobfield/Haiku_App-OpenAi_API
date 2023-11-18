import { useState } from "react";
// import { fetchHaiku } from "./fetchHaiku";

// export function Haiku({fetchHaiku, gtpResponse, haikuTopic}){

// }

export function Haiku({ key, haikuData, generatedHaiku, handleSubmit }) {
  const [fullHaiku, setFullHaiku] = useState(
    `${haikuData.line1}, ${haikuData.line2}, ${haikuData.line3}`
  );
  return (
    <section className={"haiku"}>
      <span className="haikuMetaData">
        <p>Enter a topic for some ancient wisdom</p>
      </span>
      {/* <p>{fullHaiku},</p> */}
    </section>
  );
}

// before input, provide a placeholder haiku
// on form InputDeviceInfo, update <p>s with new haiku

//on render, no haikus show, but there is a <p></p> asking to enter a topic
// when the topic has been entered, update the p tag text with the generatedHaiku
