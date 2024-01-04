import { useState } from "react"
import OpenAI from 'openai';

const ChatbotApp = () => {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
  });

  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("response");
      const result = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{"role": "user", "content": "Hello!"}],
        max_tokens: 512,
        top_p: 1,
        temperature: 0.5,
        frequency_penalty: 0,
        presence_penalty: 0
      });
      console.log("response", result.choices[0].message.content);
      setApiResponse(result.choices[0].message.content);
    } catch (e) {
      console.log(e);
      setApiResponse("Something is going wrong, Please try again.", e);
    }
    setLoading(false);
  };


  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: '100vh',
        }}
      >
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            value={prompt}
            placeholder="Please ask to openai"
            onChange={(e) => setPrompt(e.target.value)}
          ></textarea>
          <button
            disabled={loading || prompt.length === 0}
            type="submit"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </form>
      </div>
      {apiResponse && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <pre>
            <strong>API response:</strong>
            {apiResponse}
          </pre>
        </div>
      )}
    </>
  );
};


export default ChatbotApp;