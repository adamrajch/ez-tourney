import Toolbar from "./RosterToolbar";
const RosterList = (props) => {
  return (
    <div className="cont">
      <Toolbar />
      <div className="wrap">
        {props.typeOfTourney == "Solo" ? <div>hi</div> : <div>yo</div>}
      </div>
      <style jsx>{`
        .cont {
          height: 100%;
        }
        .wrap {
          display: flex;
          direction: column;
          border: 1px solid white;
          height: 80%;
        }
      `}</style>
    </div>
  );
};
export default RosterList;
