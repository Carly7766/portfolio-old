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
        {this.props.hideWave ? null : (
          <LayoutWave
            fill={colors.main}
            options={{
              height: 75,
              amplitude: 20,
              speed: 0.15,
              points: 3,
            }}
          ></LayoutWave>
        )}
      </>
    );
  }
}

const LayoutWrapper = styled.div`
  /* NOTE: background関連の指定があるとLayoutWaveが表示されない、Wave以外の要素にしても同じなので仕様？ */
  /* background-color: ${colors.base}; */
  z-index: 0;
`;

const LayoutWave = styled(Wave)`
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 30vh;
  z-index: -1;
`;

export default Layout;
