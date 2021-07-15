import { useState } from "react";

const content = [
  {
    tab: "Happiness",
    content01: "우리는 행복을 위해 일합니다.",
    content02:
      "나의 행복은 선한 바이러스가 되어 내 동료를 행복하게 하는 것을 알기에 각자가 노력합니다.",
  },
  {
    tab: "Respect",
    content01: "우리는 서로를 존중하고 이해할 수 있습니다.",
    content02:
      "말로부터 시작되는 존중은 우리의 품격을 높여주고 우리는 품격을 갖기 위해 노력합니다.",
  },
  {
    tab: "Expert",
    content01: "우리는 프로이자 전문가입니다.",
    content02:
      "나의 가치를 인정해주는 사람들과 함께 하기에 더 나은 실력을 만들기 위한 열정으로 배움을 게을리하지 않습니다.",
  },
  {
    tab: "Challenge",
    content01: "우리는 끊임없이 도전 하는 것을 멋으로 생각합니다.",
    content02:
      "현재 성과에 안주하지 않고 더 나은 결과를 위해 새로움과 낯섦, 그리고 불편함을 두려워하지 않습니다.",
  },
  {
    tab: "Responsibility",
    content01: "우리는 강한 책임감을 갖고 있습니다.",
    content02:
      "우리가 성장을 갈구하는 것과 같이 클라이언트의 성공을 위해 끊임없이 노력합니다.",
  },
];

function Tab() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  console.log(selectedIdx, setSelectedIdx);

  return (
    <div className="Tab">
      <div className="Tab-wrap">
        {content.map((section, index) => (
          <button
            key={index}
            className={"round rr-f " + (selectedIdx !== index ? "" : "active")}
            onClick={() => {
              setSelectedIdx(index);
            }}
          >
            {section.tab}
          </button>
        ))}
      </div>
      <div className="content">
        <h2 className="animated fadeInUp ff-r">
          {" "}
          {content[selectedIdx].content01}
        </h2>
        <h3 className="animated fadeInUp"> {content[selectedIdx].content02}</h3>
      </div>
    </div>
  );
}
export default Tab;
