
import styled from "styled-components";

import closeBtn from "../../../assets/icons/close.png";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const PrivacyArea = styled.div`
  padding: 10px 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90%;
  background-color: #fff;
  border-radius: 3px;
`;
const PrivacyInner = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const PrivacyTop = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PrivacyCon = styled.div`
  height: 80%;
  overflow-y: auto;
`;
const CloseBtn = styled.button`
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-size: 14px 14px;
  background-position: center;
  background-image: url(../../../assets/icons/close.png);
`;

function Privacy({ close }) {
  return (
    <Modal id="modal">
      <PrivacyArea className="privacy ff-r">
        <PrivacyInner className="inner">
          <PrivacyTop className="top">
            <h4>(주)에프엘이에스 개인정보 처리방침</h4>
            <CloseBtn onClick={() => close(false)}>X</CloseBtn>
          </PrivacyTop>
          <PrivacyCon class="content">
            <p>
              (주)에프엘이에스는 개인정보 보호법 제30조에 따라 정보주체(고객)의
              개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수
              있도록 하기 위하여 다음과 같이 개인정보 처리지침을
              수립․공개합니다.
            </p>
            <h5>1. 개인정보의 처리목적 </h5>
            <p>
              (주)에프엘이에스은 다음의 목적을 위하여 개인정보를 처리하고
              있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.{" "}
            </p>
            <p>
              - 고객에 대한 서비스 제공에 따른 본인 식별․인증, 물품 또는 서비스
              공급에 따른 금액 결제, 물품 또는 서비스의 공급․배송 등
            </p>
            <h5>2. 개인정보의 처리 및 보유기간 </h5>
            <p>
              ① (주)에프엘이에스은 정보주체로부터 개인정보를 수집할 때 동의받은
              개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간
              내에서 개인정보를 처리/보유합니다.{" "}
            </p>
            <p>② 구체적인 개인정보 처리 및 보유 기간은 다음과 같습니다. </p>
            <p>
              - 전자상거래에서의 계약․청약철회, 대금결제, 재화 등 공급기록 : 5년
            </p>
            <h5>3. 개인정보의 제3자 제공 </h5>
            <p>
              (주)에프엘이에스는 정보주체의 별도 동의, 법률의 특별한 규정 등
              개인정보 보호법 제17조에 해당하는 경우 외에는 개인정보를 제3자에게
              제공하지 않습니다.
            </p>
            <h5>4. 정보주체와 법정대리인의 권리․의무 및 행사방법 </h5>
            <p>
              정보주체는 (주)에프엘이에스에 대해 언제든지 다음 각 호의 개인정보
              보호 관련 권리를 행사할 수 있습니다.{" "}
            </p>
            <p>
              1. 개인정보 열람요구
              <br />
              2. 오류 등이 있을 경우 정정 요구
              <br />
              3. 삭제요구
              <br />
              4. 처리정지 요구
            </p>
            <h5>
              5. 처리하는 개인정보 항목 (주)에프엘이에스는 다음의 개인정보
              항목을 처리하고 있습니다.{" "}
            </h5>
            <p>- 성명, 전화번호, 휴대전화번호, 이메일주소 등</p>
            <h5>6. 개인정보의 파기 </h5>
            <p>
              ① (주)에프엘이에스는 개인정보 보유기간의 경과, 처리목적 달성 등
              개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를
              파기합니다.
            </p>
            <p>② (주)에프엘이에스는 다음의 방법으로 개인정보를 파기합니다. </p>
            <p>
              - 전자적 파일 : 파일 삭제, 디스크 포맷
              <br />- 종이 문서 : 분쇄하거나 소각
            </p>
            <h5>7. 개인정보의 안전성 확보조치</h5>
            <p>
              (주)에프엘이에스는 개인정보의 안전성 확보를 위해 다음과 같은
              조치를 취하고 있습니다.{" "}
            </p>
            <p>
              {" "}
              - 관리적 조치 : 내부관리계획 수립․시행, 직원․종업원 등에 대한
              정기적 교육
            </p>
            <p>
              - 기술적 조치 : 개인정보처리시스템(또는 개인정보가 저장된
              컴퓨터)의 비밀번호 설정 등 접근권한 관리, 백신소프트웨어 등
              보안프로그램 설치, 개인정보가 저장된 파일의 암호화{" "}
            </p>
            <p>
              - 물리적 조치 : 개인정보가 저장․보관된 장소의 시건, 출입통제 등
            </p>
            <h5>8. 개인정보 보호책임자 </h5>
            <p>
              (주)에프엘이에스는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
              개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제를 처리하기
              위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.{" "}
            </p>
            <p>
              개인정보 보호책임자
              <br />
              성명 : 김우현
              <br />
              직책 : 대표이사
              <br />
              연락처 : 010-5068-1090, cosmokwh@fles.co.kr, 02-2026-0595
            </p>
            <h5>9. 개인정보 처리방침 변경 </h5>
            <p>이 개인정보 처리방침은 2019. 03. 25부터 적용됩니다.</p>
          </PrivacyCon>
        </PrivacyInner>
      </PrivacyArea>
    </Modal>
  );
}

export default Privacy;
