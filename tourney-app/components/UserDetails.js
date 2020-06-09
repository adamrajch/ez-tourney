import ArrowDiv from "./ArrowDiv";
import Ai from "./AnimatedInput";
const UserDetails = (props) => {
  return (
    <div className="container">
      <div> Make a Tournament</div>
      {/* <label for="tname">Tournament Name </label>
      <input
        name="name"
        value={props.state.name}
        onChange={props.updateField}
      ></input>
      <label for="admin">Administrator</label>
      <input
        name="admin"
        value={props.state.admin}
        onChange={props.updateField}
      ></input>
      <label for="event">Event</label>
      <input
        name="event"
        placeholder="golf, super smash bros"
        value={props.state.event}
        onChange={props.updateField}
      ></input> */}
      <Ai
        name="name"
        inputChange={props.updateField}
        state={props.state.name}
      />
      <Ai
        name="admin"
        inputChange={props.updateField}
        state={props.state.admin}
      />
      <Ai
        name="event"
        inputChange={props.updateField}
        state={props.state.event}
      />
      <div className="arrow">
        <i className="gg-arrow-right-o" onClick={props.nextStep} />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          align-content: space-around;
          height: 85vh;
        }
        input {
          background: transparent;
          border: none;
          border-bottom: 1px solid white;
          outline: none;
          text-align: center;
          color: white;
          width: 70%;
          padding: 3px;
        }
        input:focus {
          border: 2px solid white;
          border-radius: 12px;
        }
        ::placeholder {
          /* Chrome, Firefox, Opera, Safari 10.1+ */
          color: white;
          opacity: 1; /* Firefox */
        }
        .arrow {
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }
      `}</style>
    </div>
  );
};

export default UserDetails;
