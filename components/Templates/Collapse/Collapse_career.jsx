import styled from "styled-components";

import { Collapse } from "antd";

const { Panel } = Collapse;

const Button = styled.button`
  margin: 0 auto;
  padding: 10px 40px;
  font-size: 18px;
  width: 100%;
  color: ${(props) => props.theme.gray};
  border: 1px solid ${(props) => props.theme.gray};
  border-radius: 3px;
  cursor: pointer;
  margin-top: 30px;
  background-color: #fff;

  @media screen and (max-width: 912px) {
    font-size: 16px;
  }
`;

function callback(key) {
  console.log(key);
}
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function Collapse_career() {
  const header = () => {
    return (
      <div>
        <p>디자인</p>
        <p>브랜드 경험 디자이너</p>
        <p>정규직</p>
      </div>
    );
  };

  return (
    <>
      <Collapse defaultActiveKey={["1"]} onChange={callback}>
        <Panel header={header} key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>
      <Button className="mobile">더보기</Button>
    </>
  );
}
export default Collapse_career;
