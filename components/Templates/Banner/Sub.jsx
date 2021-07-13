import styled from "styled-components";

function Banner_sub({title,sub}) {
  return (
    <div className="banner sub" id="sub">
      <div className="inner">
        <h1 className="">{title}</h1>
        <h3 className="">{sub}</h3>
      </div>
    </div>
  );
}

export default Banner_sub;
