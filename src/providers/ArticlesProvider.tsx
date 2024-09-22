import { createContext, useState } from "react";
import ArticleType from "../types/ArticleType";
type ArticlesProviderProps = { children: React.ReactNode };
type ArticlesContextType = [
  ArticleType,
  React.Dispatch<React.SetStateAction<ArticleType>>
];

export const ArticlesContext = createContext<ArticlesContextType>([
  [],
  () => [],
]);

export default function ArticlesProvider({ children }: ArticlesProviderProps) {
  const [articles, setArticles] = useState<ArticleType>([]);

  return (
    <ArticlesContext.Provider value={[articles, setArticles]}>
      {children}
    </ArticlesContext.Provider>
  );
}
