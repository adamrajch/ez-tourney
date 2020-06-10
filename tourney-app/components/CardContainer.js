import React, { useEffect, useState } from "react";
import Card from "./ChoiceCard";

import ArrowDiv from "./ArrowDiv";

const CardContainer = (props) => {
  const tournaments = ["Team", "Solo"];
  const [color, setColor] = useState("");

  useEffect(() => {
    console.log(color);
  }, [color]);

  const tapper = (ev) => {
    setColor(ev);
  };
  return (
    <div className="create-wrap">
      {tournaments.map((choice) => {
        return (
          <button
            className={choice == color ? "highlight base" : "base"}
            title={choice}
            onClick={() => {
              tapper(choice);
              props.updateSpecific(choice);
            }}
            key={choice}
          >
            {choice}
          </button>
        );
      })}

      {/* <button onClick={props.prevStep}>Previous</button>
      <button onClick={props.nextStep}>Next</button> */}
      <ArrowDiv nextStep={props.nextStep} prevStep={props.prevStep} />

      <style jsx>{`
        .create-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .base {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 274px;
          height: 274px;
          background-color: transparent;
          color: white;
          cursor: pointer;
          outline: none;
          margin-top: 2em;
          border: 2px solid white;
        }
        .highlight {
          border: 4px solid #32e0c4;
        }
      `}</style>
    </div>
  );
};
export default CardContainer;
