import React from "react";
import { createGlobalStyle } from "styled-components";

const ScrollBarStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  ::-webkit-scrollbar:horizontal {
    height: 4px;
  }

  // ::-webkit-scrollbar-track {
  //   background: #1e1e1e;
  //   border-radius: 4px;
  // }

  ::-webkit-scrollbar-thumb {
    background: #ff7a00;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #ff9a33;
  }
`;

export default function ScrollBar() {
  return <ScrollBarStyles />;
}
