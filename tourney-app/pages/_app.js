import Nav from "../components/Nav";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <div className="wrap">
      <Head>
        <title>Tournament McGee</title>
        <link
          href="https://css.gg/css?=|add|arrow-down|arrow-left-o|arrow-long-left|arrow-long-right|arrow-right-o|trash"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="container">
        <Nav />
        <Component {...pageProps} />
      </div>

      <style jsx>{`
        .wrap {
          height: 100%;
          min-height: 100vh;
          background-color: black;
          color: white;
        }
        .container {
          display: block;
          width: 66%;
          margin: auto;
        }
      `}</style>
      <style jsx global>
        {`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            // color: #bbe1fa;
          }
          html,
          body {
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
