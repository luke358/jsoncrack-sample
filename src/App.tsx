import Panes from './containers/Editor/Panes';
import styled from 'styled-components';
import React from 'react';
import useJson from './store/useJson';
import { Loading } from './components/Loading';

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - 28px);
  width: 100%;

  @media only screen and (max-width: 768px) {
    position: fixed;
    height: -webkit-fill-available;
    flex-direction: column;
  }
`;

export const StyledEditorWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
function App() {

  const fetchJson = useJson(state => state.fetchJson);
  const loading = useJson(state => state.loading);
  React.useEffect(() => {
    // Fetch JSON by query
    // Check Session User
      // fetchJson(query.json);
      fetchJson();
  }, [fetchJson]);

  if (loading) return <Loading message="Fetching JSON from cloud..." />;
  return <StyledEditorWrapper>
    <StyledPageWrapper>
      <StyledEditorWrapper>
        <Panes />
      </StyledEditorWrapper>
    </StyledPageWrapper>
  </StyledEditorWrapper>
}

export default App
