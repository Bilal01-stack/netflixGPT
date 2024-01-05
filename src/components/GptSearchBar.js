import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

export default function GptSearchBar() {
    const langKey = useSelector((store)=>store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        />
        <button className="py-2 px-4 m-4 bg-red-500 text-white rounded-lg col-span-3">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
}
