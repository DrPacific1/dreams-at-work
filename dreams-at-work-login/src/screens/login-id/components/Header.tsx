import ULThemeLogo from "@/components/ULThemeLogo";
import ULThemeSubtitle from "@/components/ULThemeSubtitle";
import ULThemeTitle from "@/components/ULThemeTitle";

import { useLoginIdManager } from "../hooks/useLoginIdManager";

function Header({ hideLogo = false }: { hideLogo?: boolean }) {
  const { texts, locales } = useLoginIdManager();

  const logoAltText = texts?.logoAltText || locales?.heading?.logoAltText;

  return (
    <>
      {!hideLogo && <ULThemeLogo altText={logoAltText} />}
      <ULThemeTitle>{texts?.title || locales?.heading?.title}</ULThemeTitle>
      <ULThemeSubtitle>
        {texts?.description || locales?.heading?.description}
      </ULThemeSubtitle>
    </>
  );
}

export default Header;
