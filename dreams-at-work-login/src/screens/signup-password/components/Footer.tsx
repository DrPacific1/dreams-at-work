import ULThemeLink from "@/components/ULThemeLink";

import { useSignupPasswordManager } from "../hooks/useSignupPasswordManager";

function Footer() {
  const { editLink, loginLink, texts, locales } = useSignupPasswordManager();
  const backButtonText = texts?.backButtonText || locales.footer.backButton;

  return (
    <div className="mt-2">
      {/* Separator */}
      <div className="my-4 h-px bg-gray-200" />

      {/* Terms */}
      <p className="text-center text-xs leading-relaxed text-gray-500">
        By creating an account you&apos;re confirming you&apos;ve read,
        understood and agree to the Dreams@Work{" "}
        <a href="#" className="font-semibold" style={{ color: "#88BB00" }}>
          Privacy Policy
        </a>{" "}
        and{" "}
        <a href="#" className="font-semibold" style={{ color: "#88BB00" }}>
          Terms of Use.
        </a>
      </p>

      {/* Already have an account */}
      <p className="mt-4 text-center text-sm text-gray-700">
        Already have an account?{" "}
        <a
          href={loginLink || "#"}
          className="font-bold"
          style={{ color: "#88BB00" }}
        >
          Login
        </a>
      </p>

      {/* Back / edit link if present */}
      {editLink && (
        <div className="mt-3 text-center">
          <ULThemeLink href={editLink}>{backButtonText}</ULThemeLink>
        </div>
      )}
    </div>
  );
}

export default Footer;
