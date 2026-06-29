import ULThemeLogo from "@/components/ULThemeLogo";
import ULThemeSubtitle from "@/components/ULThemeSubtitle";
import ULThemeTitle from "@/components/ULThemeTitle";

import { useSignupPasswordManager } from "../hooks/useSignupPasswordManager";

function Header() {
  const { texts, locales } = useSignupPasswordManager();

  const logoAltText = texts?.logoAltText || locales.header.logoAlt;
  const title = texts?.title || locales.header.title;

  return (
    <>
      <ULThemeLogo altText={logoAltText} />
      <ULThemeTitle>{title}</ULThemeTitle>
      <ULThemeSubtitle>
        Set your password for your sandbox to test SaaStart
      </ULThemeSubtitle>
    </>
  );
}

export default Header;
