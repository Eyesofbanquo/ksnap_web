import React from "react";
import icon from "../resources/icon_ky.svg";
import { Container } from "@material-ui/core";

export const KView: React.FC = () => {
  const random = 1;

  return (
    <div className="App-header">
      <img src={icon} alt="logo" className="Lock" />

      <p>
        Forever yours
        <span className="Kiss"> 😘</span>
      </p>
      <p>Love, Markim</p>
    </div>
  );
};
