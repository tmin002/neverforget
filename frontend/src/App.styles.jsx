import { styled } from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: calc(var(--global-padding-left) + 30px);
  padding-top: env(safe-area-inset-top);

  display: flex;
  flex-direction: row;
  align-items: center;

  background: var(--body-background-color);
  box-shadow: 3px 3px 20px var(--body-background-color);
`;
export const TitleText = styled.h1`
  color: white;
  font-family: AppleMyungjo;
  font-size: 2em;
`;
export const ButtonBox = styled.div`
  margin-left: auto;
  padding-right: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

// todo: to be moved
export const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
