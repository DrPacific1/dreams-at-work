import ULThemeLogo from "@/components/ULThemeLogo";
import ULThemeSubtitle from "@/components/ULThemeSubtitle";
import ULThemeTitle from "@/components/ULThemeTitle";

import { useSignupIdManager } from "../hooks/useSignupIdManager";

function Header({ hideLogo = false }: { hideLogo?: boolean }) {
  const { texts, locales } = useSignupIdManager();

  const logoAltText = texts?.logoAltText || locales.header.logoAlt;
  const title = texts?.title || locales.header.title;

  return (
    <>
      {!hideLogo && <ULThemeLogo altText={logoAltText} />}
      <ULThemeTitle>{title}</ULThemeTitle>
      <ULThemeSubtitle>
        Sign up to Dreams@Work to continue to SaaStart
      </ULThemeSubtitle>
    </>
  );
}

export default Header;
