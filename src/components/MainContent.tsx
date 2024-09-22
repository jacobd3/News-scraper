import "./MainContent.scss";
import Article from "./Article";
import { useContext } from "react";
import { ArticlesContext } from "../providers/ArticlesProvider";

export default function MainContent(): JSX.Element {
  const [articles] = useContext(ArticlesContext);
  console.log(articles);
  {
    if (articles.length) {
      return (
        <main>
          {articles.map((article) => {
            return (
              <Article
                title={article.title}
                key={article.url}
                img={article.img}
                url={article.url}
                date={article.date}
                cat={article.cat}
              />
            );
          })}
        </main>
      );
    } else {
      return <></>;
    }
  }
}
