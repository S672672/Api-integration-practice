import React, { useState } from "react";
import "./languagetrlr.css";

export default function Languagetrlr() {
  const [tolanguage, setToLanguage] = useState("");
  const [fromlanguage, setFromLanguage] = useState("");

  const languageOptions = ["English", "Spanish", "French", "German", "Chinese","Nepali","Hindi"]; // Add your language options here

  return (
    <div className="whole">
      <div className="text-black font-semibold text-5xl">
        Language Translator
      </div>
      <div className="Content">
        <div className="langselect">
          <div className="from">
            <label htmlFor="fromLanguage" className="font-bold text-2xl m-2">From Language:</label>
            <select
              id="fromLanguage"
              value={fromlanguage}
              onChange={(e) => setFromLanguage(e.target.value)}
            >
              <option value="" disabled>
                From 
              </option>
              {languageOptions.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
          <div className="text-3xl">&#10140;</div>
          <div className="to">
            <label htmlFor="toLanguage" className="text-2xl font-bold m-2">To Language:</label>
            <select
              id="toLanguage"
              value={tolanguage}
              onChange={(e) => setToLanguage(e.target.value)}
            >
              <option value="" disabled>
                 To 
              </option>
              {languageOptions.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>
        <textarea className="w-1/2 h-1/2 p-4 border border-solid border-gray-500 rounded-md shadow-md font-bold text-2xl" placeholder="Enter the language for translation" />
        <div class="flex items-center justify-center space-x-2">
          <div className="arrow">&#9660;</div>
        </div>
        <textarea
          className="w-1/2 h-1/2 p-4 bg-gray-400 border border-solid border-gray-500 rounded-md shadow-md text-white font-bold text-2xl" placeholder="Translated Language" readOnly/>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Translate
        </button>
      </div>
    </div>
  );
}
