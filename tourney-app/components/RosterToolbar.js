const Toolbar = (props) => {
  return (
    <div className="toolbar">
      <span>Tournament Roster</span>
      <button className="btn" onClick={() => console.log("hi")}>
        <i className="gg-add" />
      </button>
      <style jsx>{`
        .toolbar {
          display: flex;
          justify-content: space-between;
          border: 1px solid white;
          padding: 1em;
        }
        .btn {
          outline: none;
          background: transparent;
          cursor: pointer;
          border: none;
          //   color: ;
        }
        i {
          color: white;
        }
        i:hover {
          color: #32e0c4;
        }
      `}</style>
    </div>
  );
};

export default Toolbar;
