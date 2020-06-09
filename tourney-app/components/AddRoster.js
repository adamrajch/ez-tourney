import ArrowDiv from "./ArrowDiv";

const AddRoster = (props) => {
  return (
    <>
      <ArrowDiv nextStep={props.nextStep} prevStep={props.prevStep} />
    </>
  );
};

export default AddRoster;
