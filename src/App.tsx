import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ArticlesProvider from "./providers/ArticlesProvider";

function App(): JSX.Element {
  return (
    <>
      <ArticlesProvider>
        <Header />
        <MainContent />
      </ArticlesProvider>
    </>
  );
}

export default App;
