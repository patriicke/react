import { useState } from "react";

const App = () => {
  return (
    <>
      <div className="flex items-center h-[100vh] justify-center  flex-col gap-2">
        <div className="group w-[40rem] bg-slate-400 h-[30em] flex flex-col p-2 space-y-8">
          <div className="w-[10em] h-[20em] bg-white group-hover:translate-x-[29em] transition ease-in-out delay-100 duration-700">1</div>
          <div className="w-[10em] h-[20em] bg-white group-hover:translate-x-[29em] transition ease-in-out delay-300 duration-700">2</div>
          <div className="w-[10em] h-[20em] bg-white group-hover:translate-x-[29em] transition ease-in-out delay-500 duration-700">3</div>
          <div className="w-[10em] h-[20em] bg-white group-hover:translate-x-[29em] transition ease-in-out delay-1000 duration-700">4</div>
        </div>
        <div className="group w-[40rem] bg-slate-400 h-[30em] flex flex-col p-2 space-y-8">
          <div className="w-[10em] h-[20em] bg-white group-hover:translate-x-[29em] transition ease-in-out delay-100 duration-700">4</div>
          <div className="w-[10em] h-[20em] bg-white group-hover:translate-x-[29em] transition ease-in-out delay-300 duration-700">6</div>
          <div className="w-[10em] h-[20em] bg-white group-hover:translate-x-[29em] transition ease-in-out delay-500 duration-700">7</div>
          <div className="w-[10em] h-[20em] bg-white group-hover:translate-x-[29em] transition ease-in-out delay-1000 duration-700">4</div>
        </div>
      </div>
    </>
  );
};
export default App;
