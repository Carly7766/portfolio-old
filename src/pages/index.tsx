import React from "react";
import { css } from "@emotion/react";
import Layout from "../components/layout";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <h1 css={HelloWorldCSS}>Hello world!</h1>
      </Layout>
    );
  }
}

const HelloWorldCSS = css`
  color: #f00;
`;

export default Index;
