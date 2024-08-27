import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Header from "./components/Header";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdOutlineCopyAll } from "react-icons/md";
import Markdown from 'react-markdown';
import Animation from "./components/animation";





function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("Your text to copy");
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  async function generateAnswer() {
    setLoading(true);
    console.log("Loading....");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBQBFMdDI-1Ice7SZ3QvsAorj0d690vqr8",
      method: "post",
      data: {
        contents: [
          {
            parts: [
              {
                text:"Humanize this text,use simple words like human and make it easy to read,here is the text:"+question,
              },
            ],
          },
        ],
      },
    });

    setAnswer(response.data.candidates[0].content.parts[0].text);
    setLoading(false);
  }

  return (
    <>
      <div className="bg-slate-950 h-screen w-full overflow-x-hidden">
        <Navbar />
        
        <Header />
        
        
        <div className="mb-3 mt-16">
          <div className="md:ml-16 ml-6 relative mb-4 flex w-full flex-wrap items-stretch">
          <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              type="search"
              className="w-5/6 text-xl font-one rounded-l text-white border border-solid border-neutral-300 bg-slate-900 bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-white focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-slate-500 dark:focus:border-primary"
              placeholder="Enter Your text"
            ></textarea>

          </div>
          <div className="flex justify-center items-center">
          <button onClick={generateAnswer} className="rounded font-one ml-20 bg-violet-700 p-1 m-2 w-1/3">
              <p className="p-2 text-white">Humanize</p>
            </button>
            </div>
        </div>
        {loading ? (
         <Animation/>
        ) : (
          <div>
          <div>
          <div></div>
          <div className="bg-slate-900 overflow-auto text-white w-11/12 pr-4 md:p-6 p-4 m-2 md:ml-12 rounded-2xl">
          <Markdown className="md:text-xl font-second text-xs ">{answer}</Markdown>

            <CopyToClipboard text={answer} onCopy={onCopy}>
           <button className="mt-6"><MdOutlineCopyAll />
           </button>
            </CopyToClipboard>
            {copied ? <p>Copied!</p> : null}
          </div>
    </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
