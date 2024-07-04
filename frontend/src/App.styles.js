import { styled } from "styled-components";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: var(--global-padding-left);
  padding-top: env(safe-area-inset-top);

  display: flex;
  flex-direction: row;
  align-items: center;

  background: var(--background);
    box-shadow: 3px 3px 20px var(--background);
`;
export const TitleText = styled.h1`
    font-family: AppleMyungjo;
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