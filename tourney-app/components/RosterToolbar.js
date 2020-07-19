import AddDialog from "./AddDialog";
const Toolbar = (props) => {
  return (
    <div className="toolbar">
      <span>Tournament Roster</span>

      <AddDialog addPlayer={props.addPlayer} />

      <style jsx>{`
        .toolbar {
          display: flex;
          justify-content: space-between;
          // border: 1px solid white;
          padding: 1em;
          margin-top: 2em;
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
