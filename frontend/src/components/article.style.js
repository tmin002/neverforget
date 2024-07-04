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
  color: black;
  padding: 30px 30px 30px 30px;
  box-shadow: 0px 0px 20px 1px black;
`;
export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: last baseline;
`;
export const TitleText = styled.h2`
  margin: 0;
`;

// Article metadata
export const ArticleMetaDataBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
`;

export const DateText = styled.p`
    font-size: small;
    text-align: right;
    margin: 0;
`;

// PathText
export const PathTextRoot = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    text-align: right;
    margin: 0;
`;

export const PathTextItem = styled.a`
    font-size: small;
    font-weight: bold;
    text-decoration: none;
    color: black;
    margin: 0;
`;