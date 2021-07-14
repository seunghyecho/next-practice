import "antd/dist/antd.css";

import { Table } from "antd";

const columns = [
  {
    title: "field",
    dataIndex: "field",
    key: "field",
    render: (text) => 
    <a>
      {text}
      <div className="field mobile">
        <span>개발</span>
        <span>정규직</span>
      </div>
    </a>,
  },
  {
    title: "position",
    dataIndex: "position",
    key: "position",
    responsive: ["md"],
  },
  {
    title: "state",
    dataIndex: "state",
    key: "state",
    responsive: ["lg"],
  },
];

const data = [
  {
    key: "1",
    field: "개발",
    position: "웹퍼블리셔(프론트엔드)",
    state: "정규직",
    description:"Everything that has a beginning, has an end."
  },
  {
    key: "2",
    field: "경영지원",
    position: "커뮤니케이션 담당자",
    state: "정규직",
    description:"Everything that has a beginning, has an end."
  },
  {
    key: "3",
    field: "디자인",
    position: "UI/UX 디자이너",
    state: "정규직",
    description:"Everything that has a beginning, has an end."
  },
  {
    key: "4",
    field: "마케팅",
    position: "콘텐츠 크리에이터",
    state: "정규직",
    description:"Everything that has a beginning, has an end."
  },
  {
    key: "5",
    field: "디자인",
    position: "브랜드 경험 디자이너",
    state: "정규직",
    description:"Everything that has a beginning, has an end."
  },
];

function TableCareer() {

  const onRow = (record, rowIndex) => {
    return {
      onClick: (event) => {
          // record: row의 data
          // rowIndex: row의 index
          // event: event prototype
        console.log(record, rowIndex, event);
        <tr>
          <td>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, autem.
          </td>
        </tr>
      },
    };
  };

  return (
      <Table columns={columns} dataSource={data} onRow={onRow}/>
  );
}

export default TableCareer;
