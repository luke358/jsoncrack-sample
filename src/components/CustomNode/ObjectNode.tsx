import React from "react";
import { CustomNodeProps } from ".";
import useGraph from "../../store/useGraph";
// import { useInViewport } from "react-in-viewport";
import * as Styled from "./styles";

const inViewport = true;

const ObjectNode: React.FC<CustomNodeProps> = ({ node, x, y }) => {
  const { text, width, height, data } = node;
  const ref = React.useRef(null);
  const performanceMode = useGraph(state => state.performanceMode);
  // const { inViewport } = useInViewport(ref);

  if (data.isEmpty) return null;

  return (
    <Styled.StyledForeignObject width={width} height={height} x={0} y={0} ref={ref} isObject>
      {(!performanceMode || inViewport) &&
        text.map((val: any, idx: number) => (
          <Styled.StyledRow data-key={JSON.stringify(val[1])} data-x={x} data-y={y} key={idx}>
            <Styled.StyledKey objectKey>
              {JSON.stringify(val[0]).replaceAll('"', "")}:{" "}
            </Styled.StyledKey>
            <Styled.StyledLinkItUrl>{JSON.stringify(val[1])}</Styled.StyledLinkItUrl>
          </Styled.StyledRow>
        ))}
    </Styled.StyledForeignObject>
  );
};

function propsAreEqual(prev: CustomNodeProps, next: CustomNodeProps) {
  return String(prev.node.text) === String(next.node.text) && prev.node.width === next.node.width;
}

export default React.memo(ObjectNode, propsAreEqual);
