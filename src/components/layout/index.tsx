import React from "react";
import styled from "@emotion/styled";

class Layout extends React.Component {
  render() {
    return (
      <>
        <LayoutWrapper>{this.props.children}</LayoutWrapper>
      </>
    );
  }
}

const LayoutWrapper = styled.div`
  background-color: #808080;
`;

export default Layout;
