import React from "react";
import { useState } from "react";

const SelectField = ({ refer, setRefer, options }) => {
  const [visibility, setVisibility] = useState(false);
  const [search, setSearch] = useState("");
  
  return (
    <div
      className="select"
      onClick={(e) => {
        setVisibility(!visibility);
      }}
    >
      <div className="selected-option">
        <span
          title={refer === "Select" ? "Select" : refer}
          className={refer == "Select" ? "defaultSelectColor" : ""}
        >
          {refer === "Select"
            ? "Select"
            : refer.length <= 20
            ? refer
            : `${refer.slice(0, 20)}...`}
        </span>
        <i className="">
          <svg
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7268 0.0605463L8.60678 6.16721L2.48678 0.0605468L0.606781 1.94055L8.60678 9.94055L16.6068 1.94055L14.7268 0.0605463Z"
              fill="black"
            />
          </svg>
        </i>
      </div>
      {visibility && (
        <div style={{ width: "100%" }}>
          <div className="options">
            <ul>
              {options
                .filter((option) =>
                  option.toLowerCase().includes(search.toLowerCase())
                )
                .map((option, index) => (
                  <li
                    key={index}
                    onClick={() => setRefer(option)}
                  >
                    <div className={refer === option ? "active-option" : ""}>
                      {option}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectField;
