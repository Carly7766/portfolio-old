import React from "react";
import { css } from "@emotion/react";

class Index extends React.Component {
  render() {
    return <div css={HelloWorldCSS}>Hello world!</div>;
  }
}

const HelloWorldCSS = css`
  color: #f00;
`;

export default Index;
