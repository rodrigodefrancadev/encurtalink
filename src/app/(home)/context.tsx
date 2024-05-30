import {
  FunctionComponent,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

interface IHomeContext {
  shortLink: string | null;
  setSlug: (slug: string) => void;
}

const defaultValues: IHomeContext = {
  shortLink: null,
  setSlug(slug) {},
};

const HomeContext = createContext(defaultValues);

export const HomeContextProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [slug, setSlug] = useState<string | null>(null);

  const shortLink = useMemo(() => {
    if (!slug) {
      return null;
    }
    return `${getBaseUrl()}/${slug}`;
  }, [slug]);

  const value: IHomeContext = {
    setSlug,
    shortLink,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export function useHomeContext() {
  const homeContext = useContext(HomeContext);
  return homeContext;
}

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SHORT_LINK_BASE_URL || location.origin;
}
