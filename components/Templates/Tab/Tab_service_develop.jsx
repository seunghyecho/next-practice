import { useState } from "react";

const content = [
  {
    tab: "Idea",
    content01: "많은 분들이 좋은 아이디어가 떠올랐지만, PLAN 단계까지 발전하지 못합니다.",
    content02:
      "아이디어를 구체화할 수 있는 전문 기획자와 개발자의 자문을 통해 실현가능성을 검증해보세요.",
  },
  {
    tab: "Plan",
    content01: "RFP? WBS? STORYBORAD? 생소한 IT용어에 당황스러우시죠. 걱정하지마세요.",
    content02:
      "계획을 현실화하는데 최고의 파트너가 여기 있습니다. 합리적인 비용과 기간산정, 리스크 분석까지 해결해드립니다.",
  },
  {
    tab: "Development",
    content01: "IT비즈니스의 핵심은 믿을 수 있는 개발팀을 만나는 것입니다.",
    content02:
      " FLES는 그동안 단 한 개의 프로젝트도 포기하지 않고 끝까지 완수하였습니다.",
  },
  {
    tab: "Marketing",
    content01: "마케팅 채널은 많아지고 개별적으로 성과를 분석하기도 힘듭니다.",
    content02:
      "FLES의 솔루션을 통해 예산계획부터 집행, 성과측정, ROI 관리까지 한번에 해결하세요.",
  },
  {
    tab: "Investment & IP",
    content01: "훌륭한 PRODUCT도 시장을 선점하기 위해서는 자본과 권리보호가 필요합니다.",
    content02:
      "FLES의 네트워킹을 통해 파트너사의 비즈니스 성장을 위한 전략을 컨설팅 해드립니다.",
  },
];

const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex,
  };
};

function Tab() {
  const { contentItem, contentChange } = useTabs(0, content);
  return (
    <div className="Tab philosophy">
      <div className="Tab-wrap">
        {content.map((section, index) => (
          <button className="round ff-r" onClick={() => contentChange(index)}>
            {section.tab}
          </button>
        ))}
      </div>
      <div className="content">
        <h2 className="animated fadeInUp ff-r">{contentItem.content01}</h2>
        <h3 className="animated fadeInUp">{contentItem.content02}</h3>
      </div>
    </div>
  );
}
export default Tab;
