import Link from "next/link";
const Card = (props) => {
  return (
    <button className="card-wrap" onClick={() => testClick}>
      {props.title}
      <style jsx>{`
        .card-wrap {
          height: 25vh;
          border: 4px solid white;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 33%;
          margin: 0 2em 0 2em;
          background-color: transparent;
          color: white;
        }

        .highlight {
          border: 4px solid gold;
        }
      `}</style>
    </button>
  );
};

export default Card;
