const ArrowDiv = (props) => {
  return (
    <div className="arrow-div">
      <i className="gg-arrow-left-o" onClick={props.prevStep} />
      <i className="gg-arrow-right-o" onClick={props.nextStep} />
      <style jsx>{`
        .arrow-div {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          //   align-items: center;
          padding-top: 2em;
        }
      `}</style>
    </div>
  );
};
export default ArrowDiv;
