import { useState } from "react";

const content = [
  {
    tab: "입사지원",
  },
  {
    tab: "서류전형",
  },
  {
    tab: "1차 면접",
  },
  {
    tab: "2차 면접",
  },
  {
    tab: "최종합격",
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
    <div className="Tab career">
      <div className="Tab-wrap">
        {content.map((section, index) => (
          <button className="round" onClick={() => contentChange(index)}>
            {section.tab}
          </button>
        ))}
      </div>
      <div className="content">
        <h2 className="ff-r">{contentItem.content01}</h2>
        <h3>{contentItem.content02}</h3>
      </div>
    </div>
  );
}
export default Tab;
