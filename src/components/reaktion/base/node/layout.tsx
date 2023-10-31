// A layout provider for a node on the graph.
// This component provides the layoutstate of the node, e.g if the node is expanded or not

import React, { useContext, useState } from "react";
import { Resizable, ResizeCallbackData } from "react-resizable";
import { NodeProps } from "reactflow";

export interface NodeLayoutState {
  isExpanded: boolean;
  isHovered: boolean;
  isSelected: boolean;
  toggleExpanded: () => void;
  width: number;
  height: number;
}

export const NodeLayoutContext = React.createContext<NodeLayoutState>({
  isExpanded: false,
  isSelected: false,
  isHovered: false,
  toggleExpanded: () => {},
  width: 200,
  height: 70,
});

export const useNodeLayout = () => useContext(NodeLayoutContext);

export type NodeLayoutProviderProps = {
  expandedHeight?: number;
  collapsedHeight?: number;
  expandedWidth?: number;
  collapsedWidth?: number;
  id: string;
  children?: React.ReactNode;
};

const MyHandle = (props: any) => {
  return <div ref={props.innerRef} className="foo" {...props} />;
};

export const NodeLayoutProvider: React.FC<NodeLayoutProviderProps> = ({
  id,
  children,
  expandedHeight = 200,
  expandedWidth = 400,
  collapsedWidth = 170,
  collapsedHeight = 70,
}) => {
  const [state, setState] = useState({
    isExpanded: false,
    isSelected: false,
    isHovered: false,
    width: collapsedWidth,
    height: collapsedHeight,
  });

  // On top layout
  const onResize = (
    event: React.SyntheticEvent,
    { size, handle }: ResizeCallbackData,
  ) => {
    setState((state) => ({
      ...state,
      width: size.width,
      height: size.height,
      isExpanded: size.height > 200 && size.width > 200,
    }));
    event.stopPropagation();
  };

  const toggleExpanded = () => {
    setState((state) => ({
      ...state,
      isExpanded: !state.isExpanded,
      width: !state.isExpanded ? expandedWidth : collapsedWidth,
      height: !state.isExpanded ? expandedHeight : collapsedHeight,
    }));
  };

  return (
    <Resizable
      key={id}
      height={state.height}
      width={state.width}
      onResize={onResize}
      resizeHandles={["se"]}
      handleSize={[40, 40]}
    >
      <NodeLayoutContext.Provider value={{ ...state, toggleExpanded }}>
        <div
          style={{
            width: state.width + "px",
            height: state.height + "px",
          }}
          className="flex flex-col"
        >
          {children}
        </div>
      </NodeLayoutContext.Provider>
    </Resizable>
  );
};

// a HOC to add the layout state to the node
export const withLayout = <P extends NodeProps>(
  Component: React.ComponentType<P>,
) => {
  return (props: P) => {
    return (
      <NodeLayoutProvider id={props.id}>
        <Component {...props} />
      </NodeLayoutProvider>
    );
  };
};
