import Toolbar from "./RosterToolbar";
import List from "./RosterTable";
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
        <List players={props.players} />
      </div>
      <style jsx>{`
        .cont {
          height: 100%;
        }
        .wrap {
          display: flex;
          direction: column;
          // border: 1px solid white;
          height: 80%;
        }
      `}</style>
    </div>
  );
};
export default RosterList;
