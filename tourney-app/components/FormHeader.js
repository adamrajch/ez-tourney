const FormHeader = (props) => {
  // console.log(steps, pages);
  let first, second, third, fourth;
  //  if()
  return (
    <div className="header">
      {props.form.pages.map((page, i) => {
        return (
          <div className="step">
            <span className={props.steps == i + 1 ? "icon highlight" : "icon"}>
              {i + 1}
            </span>
            {page}
          </div>
        );
      })}
      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
        }

        .step {
          display: flex;
          flex-direction: row;
        }
        .icon {
          display: block;
          border-radius: 50%;
          background: transparent;
          color: white;
          height: 25px;
          width: 25px;
          text-align: center;
          border: 2px solid white;
        }
        .highlight {
          color: #32e0c4;
          border: 2px solid #32e0c4;
        }
        hr {
        }
      `}</style>
    </div>
  );
};

export default FormHeader;
