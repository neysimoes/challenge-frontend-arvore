import Footer from "../../components/footer";
import Header from "../../components/header";
import { footerAllrightsReserved, helpLink, privacyAndPolicy, termsAndUsage } from "../../constants";
import { Outlet } from "react-router-dom";

function Root() {
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

export default Root;
