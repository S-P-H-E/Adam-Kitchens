import { useState } from "react";
import axios from "axios";
import { BsStars } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";

const endpoint =
  "https://www.stack-inference.com/run_deployed_flow?flow_id=64ca59c9ff54337091924790&org=9f8b456b-49be-4eea-8978-31de253df266";
const apiKey = "fbe3d904-a9d2-4631-ac86-ed55721810b4";

export default function AI() {
  const [inputText, setInputText] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (inputText.trim() === "") return;

    const headers = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    };

    const data = {
      "in-0": inputText,
    };

    setIsLoading(true);

    axios
      .post(endpoint, data, { headers })
      .then((response) => {
        setApiResponse(response.data["out-0"]);
      })
      .catch((error) => {
        console.error("stack-error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 m-6 md:w-[400px]">
      <form onSubmit={handleSubmit} className="w-full"> {/* Wrap the input and button inside a form */}
        <div className="border border-[var(--text)] flex justify-center items-center py-3 px-4 rounded-full gap-2">
          <BsStars className="text-[#7E7E7E]" />
          <input
            placeholder="Ask me anything"
            className="bg-transparent outline-none w-full placeholder:text-[#8F949A]"
            value={inputText}
            onChange={handleInputChange}
          />
          <button type="submit"> {/* Use type="submit" to trigger handleSubmit on form submission */}
            <IoSendSharp className="text-[#8F949A]" />
          </button>
        </div>
      </form>

      {isLoading ? (
        <div className="border border-[var(--text)] rounded-xl py-3 px-4 w-full">
          <div className="flex items-center justify-center">
            <div className="animate-bounce mx-1">.</div>
            <div className="animate-bounce mx-1">.</div>
            <div className="animate-bounce mx-1">.</div>
          </div>
        </div>
      ) : (
        <div
          className={`${
            apiResponse ? "border border-[var(--text)] w-full" : "hidden"
          } rounded-xl py-3 px-4`}
        >
          <h1>{apiResponse}</h1>
        </div>
      )}
    </div>
  );
}
