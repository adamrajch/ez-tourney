import ArrowDiv from "./ArrowDiv";
import RosterList from "./RosterList";
const AddRoster = (props) => {
  return (
    <div className="roster-wrap">
      <RosterList
        typeOfTourney={props.state.type}
        addPlayer={props.addPlayer}
        players={props.players}
      />
      <ArrowDiv nextStep={props.nextStep} prevStep={props.prevStep} />
      <style jsx>{`
        .roster-wrap {
          display: flex;
          flex-direction: column;
          // justify-content: center;
          height: 70vh;
        }
      `}</style>
    </div>
  );
};

export default AddRoster;
