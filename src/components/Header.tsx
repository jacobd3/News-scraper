import "./Header.scss";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SearchField from "./SearchField";

export default function Header(): JSX.Element {
  return (
    <header>
      <div>
        <NewspaperIcon sx={{ fontSize: "3rem" }} />
        <h1>NEWS SCRAPER</h1>
        <SearchField />
      </div>
    </header>
  );
}
