import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import config from "react-reveal/globals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

config({ ssrFadeout: true });

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
