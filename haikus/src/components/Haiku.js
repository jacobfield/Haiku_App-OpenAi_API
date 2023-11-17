import { useState } from "react";
// import { fetchHaiku } from "./fetchHaiku";

// export function Haiku({fetchHaiku, gtpResponse, haikuTopic}){

// }

export function Haiku({ key, haikuData, generatedHaiku, handleSubmit }) {
  const [line1, setLine1] = useState(haikuData.line1);
  const [line2, setLine2] = useState(haikuData.line2);
  const [line3, setLine3] = useState(haikuData.line3);
  const [fullHaiku, setFullHaiku] = useState(`${line1}, ${line2}, ${line3}`);
  return (
    <section className={"haiku"}>
      <span className="haikuMetaData">
        <p>
          {haikuData.title} by {haikuData.author}
        </p>
      </span>
      <p>{fullHaiku},</p>
    </section>
  );
}

// before input, provide a placeholder haiku
// on form InputDeviceInfo, update <p>s with new haiku
