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

export function ArticleDemo() {
  return (
    <Article title={"안녕하세요"} date={"2024년 7월 23일 월요일"}>
      <h1>노홍철의 일기</h1>
      박니는 등을합니다. 벌펖이를 맣갈손 녀느우머의 진헤 이일뚸아에서부터
      앟오제생 다즘돌을 엥헬고 샂스젠 신이라고. 하껏슬와민지 아며애알에,
      임구나도가, 랠졸이뮈마발세 드모자브근는지. 놱젔아바너딫다 조겨인, 개눵은
      잘눔우 가아하킁겹은 핼으당치츤. 른고는 를서모 니끼효가 나힙 자굼파틴
      댸더졀링차다 하달전는 나지단다 줄독다 자퉀셕다. 아흐를 모티즈나 이어르솬
      핬인 뉘션듼구다 고에과는지만 미샙이사 빔구 본서주다. 인듹 먼이밸의
      패다에아티호다 작아요즈임노근인, 빌즈오옵 암인걸헛은 툐앗왹이 짔인은
      키샐거든, 촌아차데가로. 라더항 혈땅애겨를 욍픽여킨앰을 자이감은 도런지와
      호파난뒸을, 짔뤼가. 보히단갈네길송을 거흐나지 오아굡센과 궈랑룬우 기사가
      은하다. 뻬어곤 엔쟈집호면 퇴와나여는 파리멈이혜저다 디울염이니까
      의마만니의 게속과 곤어엄 오샀는, 가사륻잉에서 자쩔겅즛는다. 모가이
      갈우힌연는 왹아억은 즌나져비, 닜적파흘 줔덩근어마다 흩져에.
      다가모강횡에헤를 태부주주만, 후겅도휴다 난우에 간으라. 휴나아 너된디쨔로
      해깅진에서 햔오르달바라도 시아른이고 기아를 어아믱다 드오다.
      너이뻐자울에서 딘을몬엥허에서 나읏이 껀빈에 엔가누빙 이아는 오이 다자쿗
      금얼린쩔과. 클강저미가 오잭숨민 개대호다 소이막아고 딘파굼릐. 즐미햐신지
      딩빙아 젱안가젼 이딕에 어노손운과 널에다. 든이 티틸군났의 총슈딘데, 르공이
      거츠이는 말눌. 셔히니에서 치조 안번발끌 아솝니다 앤이두쯜을 벨니솽파
      다익잰뵤다 식아삭과, 숴연너티의 번프는 아와시마벤다. 이서춰힌 묠기간설륵에
      탄댜나는 어쳐텬바에 쯔궁아앙졸 산학나다 애즐래의 구팦아도 인매나마
      이안뱆온이 테덩니를.
    </Article>
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
          alt={`${href}로 이동`}
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
