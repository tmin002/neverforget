import Article from "./components/article";
import { ArticleDemo } from "./components/article";
import ImageButton from "./components/imageButton";
import TextButton from "./components/textButton";
import * as Style from "./App.styles";
import "./css/App.css";

function App() {
  return (
    <>
      <Style.Header>
        <Style.TitleText>neverforget</Style.TitleText>
        <Style.ButtonBox>
          <ImageButton
            width={23}
            height={23}
            src={process.env.PUBLIC_URL + "/icons/search.png"}
          />
          <ImageButton
            width={23}
            height={23}
            src={process.env.PUBLIC_URL + "/icons/menu.png"}
          />
        </Style.ButtonBox>
      </Style.Header>
      <Style.ArticleBox>
        <ArticleDemo />
        <ArticleDemo />
        <ArticleDemo />
        <ArticleDemo />
      </Style.ArticleBox>
    </>
  );
}

export default App;
