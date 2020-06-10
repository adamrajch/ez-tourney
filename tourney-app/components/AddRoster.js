import ArrowDiv from "./ArrowDiv";
import RosterList from "./RosterList";
const AddRoster = (props) => {
  return (
    <>
      <RosterList typeOfTourney={props.state.type} />
      <ArrowDiv nextStep={props.nextStep} prevStep={props.prevStep} />
    </>
  );
};

export default AddRoster;
