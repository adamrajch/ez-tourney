const AI = (props) => {
  return (
    <div className="form">
      <input
        // type="text"
        name={props.name}
        autoComplete="off"
        className="input-name"
        placeholder=" "
        value={props.state}
        onChange={props.inputChange}
      />
      <label type="text" name={props.name} className="label-name">
        <span className="span-name">{props.name}</span>
      </label>

      <style jsx>{`
        .form {
          position: relative;
          overflow: hidden;
          width: 80%;
        }
        .form input {
          width: 100%;
          height: 100%;
          border: none;
          padding-top: 16px;
          color: white;
          background-color: transparent;
          outline: none;
          text-align: center;
        }
        .form label {
          position: absolute;
          bottom: 0px;
          left: 0%;
          width: 100%;
          height: 100%;
          pointer-events: none;
          border-bottom: 1px solid white;
        }
        .form label::after {
          content: "";
          position: absolute;
          left: 0px;
          bottom: -1px;
          height: 100%;
          width: 100%;
          border-bottom: 2px solid #32e0c4;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        .span-name {
          position: absolute;
          bottom: 5px;
          left: 0px;
          transition: all 0.3s ease;
          font-size: 14px;
        }
        .form input:focus + .label-name .span-name,
        .form input:not(:placeholder-shown) + .label-name .span-name {
          transform: translateY(-120%);
          font-size: 10px;
          color: #32e0c4;
        }
        .form input:focus + .label-name::after {
          transform: translateX(0%);
        }
      `}</style>
    </div>
  );
};

export default AI;
