import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_openAiApiKey,
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
  // console.log(gtpResponse);
  return gtpResponse;
}

// fetchHaiku("tables");
