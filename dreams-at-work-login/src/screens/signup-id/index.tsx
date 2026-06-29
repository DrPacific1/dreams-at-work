import ULThemeSeparator from "@/components/ULThemeSeparator";
import { extractTokenValue } from "@/utils/helpers/tokenUtils";
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

import AlternativeLogins from "./components/AlternativeLogins";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignupIdForm from "./components/SignupIdForm";
import { useSignupIdManager } from "./hooks/useSignupIdManager";

function SignupIdScreen() {
  const { signupId, texts, alternateConnections, locales } =
    useSignupIdManager();

  const showSeparator = alternateConnections && alternateConnections.length > 0;
  const separatorText = texts?.separatorText || locales.page.separator;
  document.title = texts?.pageTitle || locales.page.title;

  applyAuth0Theme(signupId);

  const socialLoginAlignment = extractTokenValue(
    "--ul-theme-widget-social-buttons-layout"
  );

  const renderSocialLogins = (alignment: "top" | "bottom") => (
    <>
      {alignment === "bottom" && showSeparator && (
        <ULThemeSeparator text={separatorText} />
      )}
      <AlternativeLogins />
      {alignment === "top" && showSeparator && (
        <ULThemeSeparator text={separatorText} />
      )}
    </>
  );

  return (
    <div className="theme-universal flex h-screen overflow-hidden">
      {/* Left panel — form */}
      <div className="flex w-1/3 shrink-0 flex-col items-center justify-center overflow-y-auto bg-white px-12 py-10">
        <div className="w-full max-w-sm">
          <Header />
          {socialLoginAlignment === "top" && renderSocialLogins("top")}
          <SignupIdForm />
          <Footer />
          {socialLoginAlignment === "bottom" && renderSocialLogins("bottom")}
        </div>
      </div>

      {/* Right panel — full poster image */}
      <div className="relative flex-1 overflow-hidden bg-[#F5F5F5] flex items-center justify-center">
        <img
          src="/signup-banner.png"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
}

export default SignupIdScreen;
