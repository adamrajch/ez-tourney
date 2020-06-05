import React, { useEffect, useState } from "react";
import Card from "./ChoiceCard";

const CardContainer = () => {
  const tournaments = ["Team", "Solo"];
  const [color, setColor] = useState("");
  const types = ["Single Elimination", "Double Elimination"];
  const [teamType, setTeam] = useState("");
  const [bracketType, setBracket] = useState("");

  const handleTeam = (ev) => {
    setTeam(ev);
  };

  useEffect(() => {
    console.log(teamType);
  }, [teamType]);

  useEffect(() => {
    console.log(color);
  }, [color]);
  const handleBracket = (ev) => {
    // setColor(ev);
    setTourney(ev, console.log(tourney));
  };

  const tapper = (ev) => {
    // console.log("hello");
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
              handleTeam(choice);
            }}
            key={choice}
          >
            {choice}
          </button>
        );
      })}
      <style jsx>{`
        .create-wrap {
          width: 100%;
          display: flex;
          justify-content: center;
          //   background-color: blue;
        }
        .base {
          height: 25vh;
          border: 4px solid white;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 33%;
          margin: 0 2em 0 2em;
          background-color: transparent;
          color: white;
          cursor: pointer;
          outline: none;
        }
        .highlight {
          border: 4px solid gold;
        }
      `}</style>
    </div>
  );
};
export default CardContainer;
