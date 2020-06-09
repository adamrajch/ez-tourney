import React, { useEffect, useState } from "react";
import Card from "./ChoiceCard";
// import { loadGetInitialProps } from "next/dist/next-server/lib/utils"
import ArrowDiv from "./ArrowDiv";

const CardContainer = (props) => {
  const tournaments = ["Team", "Solo"];
  const [color, setColor] = useState("");
  const types = ["Single Elimination", "Double Elimination"];

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
          height: 35vh;
          border: 4px solid white;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin: 0 2em 0 2em;
          background-color: transparent;
          color: white;
          cursor: pointer;
          outline: none;
          margin-top: 2em;
        }
        .highlight {
          border: 4px solid #32e0c4;
        }
      `}</style>
    </div>
  );
};
export default CardContainer;
