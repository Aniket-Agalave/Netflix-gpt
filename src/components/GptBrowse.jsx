import React from "react";
import { BG_URL } from "../utils/constants";
import GptSearchbar from "./GptSearchbar";
import GptSuggetion from "./GptSuggetion";

const GptBrowse = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="" className="" />
      </div>
      <GptSearchbar />
      <GptSuggetion />
    </div>
  );
};

export default GptBrowse;
