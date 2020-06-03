import Link from "next/link";
const Nav = () => {
  return (
    <nav className="nav">
      <span className="logo">
        <Link href="/">
          <a>Ez Tourney</a>
        </Link>
      </span>
      <ul className="navlinks">
        <li>
          <Link href="/create">
            <a>Create</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 8vh;
          min-width: 100%;
        }
        .navlinks {
          display: flex;
          justify-content: space-around;
          list-style-type: none;
          width: 30%;
        }

        a {
          text-decoration: none;
          color: white;
          padding: 0.5em;
          border-radius: 4em;
        }
        li:hover a:hover {
          color: red;
          background-color: white;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
