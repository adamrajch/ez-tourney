import Toolbar from "./RosterToolbar";
const RosterList = (props) => {
  let players = props.players;
  // const playerList = props.players.map((player, i) => {
  //   return (
  //     <div id={i} key={i}>
  //       {i} {player.name}
  //     </div>
  //   );
  // });
  return (
    <div className="cont">
      <Toolbar addPlayer={props.addPlayer} />
      <div className="wrap">
        {props.typeOfTourney == "Solo" ? <div>hi</div> : <div>yo</div>}
        {players.length > 0 ? (
          players.map((player, i) => {
            return (
              <div key={i}>
                {player.id} {player.name}
              </div>
            );
          })
        ) : (
          <div>Add participants</div>
        )}
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
