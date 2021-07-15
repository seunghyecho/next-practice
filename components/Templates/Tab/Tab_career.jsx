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

function Tab() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  console.log(selectedIdx, setSelectedIdx);

  return (
    <div className="Tab career">
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
          {content[selectedIdx].content01}
        </h2>
        <h3 className="animated fadeInUp">{content[selectedIdx].content02}</h3>
      </div>
    </div>
  );
}
export default Tab;
