import React from "react";
import styled from "styled-components";
import { GraphCanvas } from "./GraphCanvas";
import { Tools } from "./Tools";

const StyledLiveEditor = styled.div`
  position: relative;
  height: 100%;
`;

const LiveEditor: React.FC = () => {
  return (
    <StyledLiveEditor>
      <Tools />
      <GraphCanvas />
    </StyledLiveEditor>
  );
};

export default LiveEditor;
