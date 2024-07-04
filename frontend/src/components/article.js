import { useState, useRef } from "react";
import * as Style from "./article.style.js";

function Article({ title, date, children }) {
  return (
    <Style.ArticleLayout>
      <Style.ArticleRoot>
        <Style.TitleBox>
          <Style.TitleText>{title}</Style.TitleText>
          <Style.ArticleMetaDataBox>
            <PathText articleTitle={title} path={"/일기/2407"} />
            <Style.DateText>{date}</Style.DateText>
          </Style.ArticleMetaDataBox>
        </Style.TitleBox>
        <Style.HeaderSeparator />
        {children}
      </Style.ArticleRoot>
    </Style.ArticleLayout>
  );
}

// path: "/일기/2407/ -> 일기 > 2407
function PathText({ articleTitle, path }) {
  // Path parse
  let pathArray = String(path).split("/");
  let pathParsedArray = [];

  pathArray.forEach((folder, index) => {
    if (folder.trim() !== "") {
      let text = folder;
      if (index !== pathArray.length - 1) text += " >";

      let href = "/posts/";
      for (let i = 0; i <= index; i++) href += pathArray[i] + "/";

      pathParsedArray.push(
        <Style.PathTextItem
          key={`path-${path}-${index}-${articleTitle}`}
          href={href}
        >
          &nbsp;{text}
        </Style.PathTextItem>,
      );
    }
  });

  // Return
  return <Style.PathTextRoot>{pathParsedArray}</Style.PathTextRoot>;
}
export default Article;
