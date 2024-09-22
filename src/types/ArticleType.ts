type ArticleType =
  | {
      img?: string;
      cat: string;
      url: string;
      title: string;
      date: string;
    }[]
  | [];

export default ArticleType;
