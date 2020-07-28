import Link from "next/link";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Nav = () => {
  const user = true;
  const router = useRouter();
  function isActive(route) {
    if (route === router.pathname) {
      return "active";
    }
    return "inactive";
  }

  return (
    <nav className="nav">
      <span className="logo">
        <Link href="/">
          <a className={isActive("/")}>Ez Tourney</a>
        </Link>
      </span>
      <ul className="navlinks">
        {user && (
          <li>
            <Link href="/create">
              <a className={isActive("/create")}>Create</a>
            </Link>
          </li>
        )}
        <li>
          <Link href="/about">
            <a className={isActive("/about")}>About</a>
          </Link>
        </li>
        {user ? (
          <>
            <li>
              <Link href="/account">
                <a className={isActive("/account")}>Account</a>
              </Link>
            </li>
            <li>
              <Link href="/logout">
                <a className={isActive("/logout")}>Logout</a>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/login">
                <a className={isActive("/login")}>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/Sing Up">
                <a className={isActive("/signup")}>Sign Up</a>
              </Link>
            </li>
          </>
        )}
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
        }
        li:hover a:hover {
          color: red;
          background-color: white;
        }
        .active {
          background: grey;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
