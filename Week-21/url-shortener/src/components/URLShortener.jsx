import { React, useState, useContext } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";
import { DarkModeContext } from '../context/DarkModeContext';
import ThemeToggle from "./ThemeToggle";

function URLShortener() {
    const [shortenedLink, setShortenedLink] = useState("");
    const [userInput, setUserInput] = useState("");
    const {darkMode} = useContext(DarkModeContext)
  
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'post',
          url:`https://api.tinyurl.com/create`,
  
          params:{
            url: userInput,
            api_token:'bxluIyAdmNp0qyXdFeCCTeeATHb5qHfYNP3WyHf5enYOiFFkfp5tkj7QvcLs'
          }
        }
        );
        setShortenedLink(response.data.data.tiny_url);
      } catch (e) {
        console.log('Unable to generate shortened url ', e);
      }
    };
    return (
      <div className={darkMode === "dark" ? `Container-dark` : `Container-light`}>
      <ThemeToggle />
      <div className=" container h-screen flex justify-center items-center">
        <div className=" text-center">
          <h1 className=" text-2xl font-medium text-blue-500 mb-4">
            Raj's <span className=" text-yellow-400">URL Shortener</span>
          </h1>
          <div>
            <input
              className="outline-none border-2 border-blue-500 rounded-md backdrop-blur-xl bg-white/20 shadow-md px-3 py-3"
              type="text"
              placeholder="Enter link to be shortened"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
              }}
            />
            <button
              className=" bg-blue-500 text-white px-8 py-3 ml-4 rounded-md"
              onClick={() => {
                fetchData();
              }}
            >
              Submit URL
            </button>
            <div className=" mt-5">
              {shortenedLink}
              <CopyToClipboard text={shortenedLink}>
                <button className="border-2 border-blue-500 text-blue-500 font-medium px-5 py-2 ml-4 rounded-md">
                  Copy URL to Clipboard
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default URLShortener