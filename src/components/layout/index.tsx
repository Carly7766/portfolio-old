import React from "react";
import styled from "@emotion/styled";
import Wave from "react-wavify";
import { colors } from "../../utils/variable";

import "ress";

type LayoutProps = {
  hideWave?: boolean;
};

class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <>
        <LayoutWrapper>{this.props.children}</LayoutWrapper>
        {this.props.hideWave ? null : <Wave fill={colors.main} />}
      </>
    );
  }
}

const LayoutWrapper = styled.div`
  background-color: ${colors.base};
`;

export default Layout;
