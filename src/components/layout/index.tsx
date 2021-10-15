import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../utils/variable";

import "ress";

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
  background-color: ${colors.base};
`;

export default Layout;
