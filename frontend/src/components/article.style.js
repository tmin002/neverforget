import { styled } from "styled-components";

// Article
export const ArticleLayout = styled.div`
  width: 100vw;
  max-width: 900px;
  padding-left: var(--global-padding-left);
  padding-right: var(--global-padding-left);
  box-sizing: border-box;
`;
export const ArticleRoot = styled.div`
  width: auto;
  margin-top: 20px;
  background: url(/images/paper_texture.jpg);
  padding: 30px 30px 30px 30px;
  box-shadow: 0px 0px 20px 1px black;
  font-size: 1.2em;

  h1 {
    font-size: 2em;
    font-weight: 200;
  }

  p,
  a {
    font-size: 1em;
  }
`;
export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: first baseline;
`;
export const TitleText = styled.div`
  font-size: 1.5em;
  font-weight: bolder;
  margin: 0;
`;
export const HeaderSeparator = styled.hr`
  margin-bottom: 0;
  border-width: 1px 0 0 0;
  border-color: black;
`;

// Article metadata
export const ArticleMetaDataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  width: 100%;
  margin-top: 20px;
`;

export const DateText = styled.div`
  font-size: 0.8em;
  text-align: right;
  margin: 0;
`;

// PathText
export const PathTextRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  text-align: left;
  margin: 0;
`;

export const PathTextItem = styled.a`
  color: var(--font-color);
  font-weight: bold;
  text-decoration: none;
  margin: 0;
`;
