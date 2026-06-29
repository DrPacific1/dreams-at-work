import ULThemeSeparator from "@/components/ULThemeSeparator";
import { extractTokenValue } from "@/utils/helpers/tokenUtils";
import { applyAuth0Theme } from "@/utils/theme/themeEngine";

import AlternativeLogins from "./components/AlternativeLogins";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginPasswordForm from "./components/LoginPasswordForm";
import { useLoginPasswordManager } from "./hooks/useLoginPasswordManager";

function LoginPasswordScreen() {
  const { loginPassword, texts, locales, alternateConnections } =
    useLoginPasswordManager();

  const showSeparator = alternateConnections && alternateConnections.length > 0;
  const separatorText = texts?.separatorText || locales?.page?.orText;
  document.title = texts?.pageTitle || locales?.page?.title;

  applyAuth0Theme(loginPassword);

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
          <LoginPasswordForm />
          <Footer />
          {socialLoginAlignment === "bottom" && renderSocialLogins("bottom")}
        </div>
      </div>

      {/* Right panel — looping video */}
      <div className="relative flex-1 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/password-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default LoginPasswordScreen;
