import { applyAuth0Theme } from "@/utils/theme/themeEngine";

import Footer from "./components/Footer";
import Header from "./components/Header";
import SignupPasswordForm from "./components/SignupPasswordForm";
import { useSignupPasswordManager } from "./hooks/useSignupPasswordManager";

function SignupPasswordScreen() {
  const { signupPassword, texts, locales } = useSignupPasswordManager();

  document.title = texts?.pageTitle || locales.page.title;
  applyAuth0Theme(signupPassword);

  return (
    <div className="theme-universal flex h-screen overflow-hidden">
      {/* Left panel — form */}
      <div className="flex w-1/3 shrink-0 flex-col items-center justify-center overflow-y-auto bg-white px-12 py-10">
        <div className="w-full max-w-sm">
          <Header />
          <SignupPasswordForm />
          <Footer />
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

export default SignupPasswordScreen;
