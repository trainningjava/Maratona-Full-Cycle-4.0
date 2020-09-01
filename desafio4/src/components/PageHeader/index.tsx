import React from "react";
import logoImg from "../../assets/images/logo-fullcycle.png";

import "./styles.css";

function PageHeader() {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <img src={logoImg} className="logo" alt="Full Cycle" />
      </div>
    </header>
  );
}

export default PageHeader;
