import { FacebookIcon } from "ui";

function App({ Component, pageProps }) {
  return (
    <>
      <FacebookIcon />
      <Component {...pageProps} />
    </>
  );
}

export default App;
