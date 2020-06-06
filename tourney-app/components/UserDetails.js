const UserDetails = (props) => {
  return (
    <>
      <div> Make a Tournament</div>
      <label for="tname">Tournament Name: </label>
      <input name="tname"></input>
      <label for="admin">Administrator:</label>
      <input name="admin"></input>
      <button onClick={props.nextStep}>Next</button>
      <style jsx>{`
        input {
          background: transparent;
          border: none;
          border-bottom: 1px solid white;
          outline: none;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default UserDetails;
