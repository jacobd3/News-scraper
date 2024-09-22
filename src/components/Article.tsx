import "./Article.css";

type ArticleProps = {
  img?: string;
  cat?: string;
  url: string;
  title: string;
  date: string;
};

export default function Article({
  img,
  cat,
  url,
  title,
  date,
}: ArticleProps): JSX.Element {
  return (
    <a href={url} target="_blank">
      <div className="article" style={{ backgroundImage: `url(${img})` }}>
        <div className="title_wrapper">
          {title}, {cat}, {date[1]}
        </div>
      </div>
    </a>
  );
}
