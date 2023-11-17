import OpenAI from "openai";
// import dotenv from "dotenv";
// dotenv.config();

// THIS APPEARS TO BE BAD - SHOULD PROBABLY NOT ALLOW IT
const openai = new OpenAI({
  apiKey: 
  dangerouslyAllowBrowser: true,
});

export async function fetchHaiku(haikuTopic) {
  // let haikuTopic = "";
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Generate a haiku on the topic of ${haikuTopic}. Please ensure that there is a comma in between each line.`,
      },
    ],
    model: "gpt-3.5-turbo",
  });
  let gtpResponse = completion.choices[0].message.content;
  // console.log(completion.choices[0]);
  console.log(gtpResponse);
  return gtpResponse;
}

fetchHaiku("tables");
