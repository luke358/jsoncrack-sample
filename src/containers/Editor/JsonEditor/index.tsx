import React from "react";
import styled from "styled-components";
import { ErrorContainer } from "../../../components/ErrorContainer";
import { MonacoEditor } from "../../../components/MonacoEditor";

const StyledEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  user-select: none;
`;
export const JsonEditor: React.FC = () => {
  return (
    <StyledEditorWrapper>
      <ErrorContainer />
      <MonacoEditor />
    </StyledEditorWrapper>
  );
};
