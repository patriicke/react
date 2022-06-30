import * as React from "react";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
const App = () => {
  const [darkMode, setDarkMode] = useState("light");
  const [darkBtn, setDarkBtn] = useState(true);
  if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", darkMode);
  }
  useEffect(() => {
    document.documentElement.classList.add(localStorage.getItem("theme"));
  }, [darkMode]);

  return (
    <div className=" h-[100vh] w-[100] flex items-center justify-center dark:bg-gray-900 ">
      <div className="  w-[30em] h-[17em] bg-white shadow-2xl flex flex-col divide-y-4 dark:bg-gray-500 ">
        <div className="h-[80%] w-full p-10">
          <h1 className="text-[2em] font-bold dark:text-white">
            Dark mode is here
          </h1>
          <p className="text-[1.3em] dark:text-white">
            Support for dark mode is now available with two strategies: media
            query and parent class
          </p>
        </div>
        <div className="h-[20%] w-full flex flex-row divide-x-4">
          {darkBtn ? (
            <button
              className="w-full bg-black text-white flex items-center justify-center text-lg font-bold dark:bg-white dark:text-black"
              onClick={() => {
                localStorage.getItem("theme") === "light"
                  ? ""
                  : document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
                setDarkMode("light");
                setDarkBtn((v) => !v);
              }}
            >
              Light Mode
            </button>
          ) : (
            <button
              className="w-full flex items-center justify-center text-lg font-bold bg-black text-white"
              onClick={() => {
                localStorage.getItem("theme") === "dark"
                  ? ""
                  : document.documentElement.classList.remove("light");
                localStorage.setItem("theme", "dark");
                setDarkMode("dark");
                setDarkBtn((v) => !v);
              }}
            >
                Dark Mode
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
