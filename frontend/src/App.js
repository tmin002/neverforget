import Article from "./components/article";
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
        <Article
          title="상당히 지저분한 이야기를 해보려고 한다."
          date="2024년 7월 3일 월요일"
        >
          <h3>안녕</h3>
          대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이
          노력하여 가격안정을 도모함으로써
          <h3>나야</h3>
          농·어민의 이익을 보호한다. 전직대통령의 신분과 예우에 관하여는 법률로
          정한다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이
          농·어민의 이익을 보호한다. 전직대통령의 신분과 예우에 관하여는 법률로
          농·어민의 이익을 보호한다. 전직대통령의 신분과 예우에 관하여는 법률로
          농·어민의 이익을 보호한다. 전직대통령의 신분과 예우에 관하여는 법률로
          정한다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이
          체포 또는 구금되지 아니한다. 국무총리·국무위원 또는 정부위원은 국회나
          그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에
          응답할 수 있다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는
          복권을 명할 수 있다. 헌법개정안이 제2항의 찬성을 얻은 때에는
          헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다. 국회는
          헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며, 국회의
          의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다. 언론·출판에 대한
          허가나 검열과 집회·결사에 대한 허가는 인정 정한다. 국회의원은
          현행범인인 경우를 제외하고는 회기중 국회의 동의없이 체포 또는 구금되지
          아니한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에
          출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수
          있다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수
          있다. 헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은 확정되며,
          대통령은 즉시 이를 공포하여야 한다. 국회는 헌법개정안이 공고된
          날로부터 60일 이내에 의결하여야 하며, 국회의 의결은 재적의원 3분의 2
          이상의 찬성을 얻어야 한다. 언론·출판에 대한 허가나 검열과 집회·결사에
          대한 허가는 인정 정한다. 국회의원은 현행범인인 경우를 제외하고는
          회기중 국회의 동의없이 체포 또는 구금되지 아니한다. 국무총리·국무위원
          또는 정부위원은 국회나 그 위원회에 출석하여 국정처리상황을 보고하거나
          의견을 진술하고 질문에 응답할 수 있다. 대통령은 법률이 정하는 바에
          의하여 사면·감형 또는 복권을 명할 수 있다. 헌법개정안이 제2항의 찬성을
          얻은 때에는 헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다.
          국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며,
          국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다. 언론·출판에
          대한 허가나 검열과 집회·결사에 대한 허가는 인정 체포 또는 구금되지
          아니한다. 국무총리·국무위원 또는 정부위원은 국회나 그 위원회에
          출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에 응답할 수
          있다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수
          있다. 헌법개정안이 제2항의 찬성을 얻은 때에는 헌법개정은 확정되며,
          대통령은 즉시 이를 공포하여야 한다. 국회는 헌법개정안이 공고된
          날로부터 60일 이내에 의결하여야 하며, 국회의 의결은 재적의원 3분의 2
          이상의 찬성을 얻어야 한다. 언론·출판에 대한 허가나 검열과 집회·결사에
          대한 허가는 인정
          <h3>나야</h3>
          농·어민의 이익을 보호한다. 전직대통령의 신분과 예우에 관하여는 법률로
          정한다. 국회의원은 현행범인인 경우를 제외하고는 회기중 국회의 동의없이
          체포 또는 구금되지 아니한다. 국무총리·국무위원 또는 정부위원은 국회나
          그 위원회에 출석하여 국정처리상황을 보고하거나 의견을 진술하고 질문에
          응답할 수 있다. 대통령은 법률이 정하는 바에 의하여 사면·감형 또는
          복권을 명할 수 있다. 헌법개정안이 제2항의 찬성을 얻은 때에는
          헌법개정은 확정되며, 대통령은 즉시 이를 공포하여야 한다. 국회는
          헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며, 국회의
          의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다. 언론·출판에 대한
          허가나 검열과 집회·결사에 대한 허가는 인정
        </Article>
      </Style.ArticleBox>
    </>
  );
}

export default App;
