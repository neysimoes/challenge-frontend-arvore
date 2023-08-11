import Footer from "./components/footer";
import Header from "./components/header";
import { footerAllrightsReserved, helpLink, privacyAndPolicy, termsAndUsage } from "./constants";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer
        text={footerAllrightsReserved}
        privacyText={privacyAndPolicy}
        termsAndUsageText={termsAndUsage}
        helpText={helpLink}
      />
    </>
  );
}

export default App;
