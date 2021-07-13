import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Detail() {
  return (
    <div className="detail">
      <div className="header" />
      <div className="body">
        <div className="title">
          <h1 className="tit">Detail_title</h1>
          <p className="date">2021.07.13</p>
        </div>
        <div className="content"></div>
      </div>
    </div>
  );
}

export default Detail;
