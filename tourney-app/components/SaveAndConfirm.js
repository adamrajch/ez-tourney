const SaC = (props) => {
  return (
    <>
      <div>hello save here</div>
      <button onClick={props.prevStep}>Previous</button>
      <button onClick={props.nextStep}>Next</button>
    </>
  );
};

export default SaC;
