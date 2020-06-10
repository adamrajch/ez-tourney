const RosterList = (props) => {
  return (
    <div className="cont">
      <div className="toolbar">
        <span>Tournament Roster</span>
        <span>
          <i className="gg-add" />
        </span>
      </div>
      <div className="wrap">
        {props.typeOfTourney == "Solo" ? <div>hi</div> : <div>yo</div>}
      </div>
      <style jsx>{`
        .cont {
          display: flex;
          justify-content: center;
          flex-direction: column;
        }
        .toolbar {
          display: flex;

          justify-content: space-between;
          width: 66%;
          border: 1px solid white;
          padding: 1em;
        }

        .wrap {
          width: 66%;
          display: flex;
          direction: column;
          border: 1px solid white;
        }
      `}</style>
    </div>
  );
};
export default RosterList;
