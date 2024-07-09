import Preloader from "@/src/components/Preloader";
import Switcher from "@/src/components/Switcher";
import FissionFoxHead from "@/src/FissionFoxHead";
import "@/styles/globals.css";
import { Fragment } from "react";

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <FissionFoxHead />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
