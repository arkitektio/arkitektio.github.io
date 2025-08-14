import {
  QueryEditor,
  useCopyQuery,
  useDragResize,
  useEditorContext,
  useExecutionContext,
  UseHeaderEditorArgs,
  useMergeQuery,
  usePluginContext,
  usePrettifyEditors,
  UseQueryEditorArgs,
  UseResponseEditorArgs,
  useSchemaContext,
  useStorageContext,
  useTheme,
  UseVariableEditorArgs,
  WriteableEditorProps,
} from "@graphiql/react";
import { GraphiQLToolbarConfig } from "graphiql/dist/components/GraphiQL";
import "graphiql/graphiql.css";
import React, { ComponentType, ReactNode, useState } from "react";
import "./editor.css";
import "./iql.css";

type AddSuffix<Obj extends Record<string, any>, Suffix extends string> = {
  [Key in keyof Obj as `${string & Key}${Suffix}`]: Obj[Key];
};

export type GraphiQLInterfaceProps = WriteableEditorProps &
  AddSuffix<Pick<UseQueryEditorArgs, "onEdit">, "Query"> &
  Pick<UseQueryEditorArgs, "onCopyQuery"> &
  AddSuffix<Pick<UseVariableEditorArgs, "onEdit">, "Variables"> &
  AddSuffix<Pick<UseHeaderEditorArgs, "onEdit">, "Headers"> &
  Pick<UseResponseEditorArgs, "responseTooltip"> & {
    children?: ReactNode;
    /**
     * Set the default state for the editor tools.
     * - `false` hides the editor tools
     * - `true` shows the editor tools
     * - `'variables'` specifically shows the variables editor
     * - `'headers'` specifically shows the headers editor
     * By default the editor tools are initially shown when at least one of the
     * editors has contents.
     */
    defaultEditorToolsVisibility?: boolean | "variables" | "headers";
    /**
     * Toggle if the headers editor should be shown inside the editor tools.
     * @default true
     */
    isHeadersEditorEnabled?: boolean;
    /**
     * An object that allows configuration of the toolbar next to the query
     * editor.
     */
    toolbar?: GraphiQLToolbarConfig;
  };

export function IQL(props: GraphiQLInterfaceProps) {
  const isHeadersEditorEnabled = props.isHeadersEditorEnabled ?? true;

  const editorContext = useEditorContext({ nonNull: true });
  const executionContext = useExecutionContext({ nonNull: true });
  const schemaContext = useSchemaContext({ nonNull: true });
  const storageContext = useStorageContext();
  const pluginContext = usePluginContext();

  const copy = useCopyQuery({ onCopyQuery: props.onCopyQuery });
  const merge = useMergeQuery();
  const prettify = usePrettifyEditors();

  const { theme, setTheme } = useTheme();

  const PluginContent = pluginContext?.visiblePlugin?.content;

  const pluginResize = useDragResize({
    defaultSizeRelation: 1 / 3,
    direction: "horizontal",
    initiallyHidden: pluginContext?.visiblePlugin ? undefined : "first",
    onHiddenElementChange: (resizableElement) => {
      if (resizableElement === "first") {
        pluginContext?.setVisiblePlugin(null);
      }
    },
    sizeThresholdSecond: 200,
    storageKey: "docExplorerFlex",
  });
  const editorResize = useDragResize({
    direction: "horizontal",
    storageKey: "editorFlex",
  });
  const editorToolsResize = useDragResize({
    defaultSizeRelation: 3,
    direction: "vertical",
    initiallyHidden: (() => {
      if (
        props.defaultEditorToolsVisibility === "variables" ||
        props.defaultEditorToolsVisibility === "headers"
      ) {
        return undefined;
      }

      if (typeof props.defaultEditorToolsVisibility === "boolean") {
        return props.defaultEditorToolsVisibility ? undefined : "second";
      }

      return editorContext.initialVariables || editorContext.initialHeaders
        ? undefined
        : "second";
    })() as any,
    sizeThresholdSecond: 60,
    storageKey: "secondaryEditorFlex",
  });

  const [activeSecondaryEditor, setActiveSecondaryEditor] = useState<
    "variables" | "headers"
  >(() => {
    if (
      props.defaultEditorToolsVisibility === "variables" ||
      props.defaultEditorToolsVisibility === "headers"
    ) {
      return props.defaultEditorToolsVisibility;
    }
    return !editorContext.initialVariables &&
      editorContext.initialHeaders &&
      isHeadersEditorEnabled
      ? "headers"
      : "variables";
  });
  const [showDialog, setShowDialog] = useState<
    "settings" | "short-keys" | null
  >(null);
  const [clearStorageStatus, setClearStorageStatus] = useState<
    "success" | "error" | null
  >(null);

  const onClickReference = () => {
    if (pluginResize.hiddenElement === "first") {
      pluginResize.setHiddenElement(null);
    }
  };

  const modifier =
    window.navigator.platform.toLowerCase().indexOf("mac") === 0 ? (
      <code className="graphiql-key">Cmd</code>
    ) : (
      <code className="graphiql-key">Ctrl</code>
    );

  return (
    <div
      data-testid="graphiql-container"
      className="graphiql-container border border-primary-300 rounded-lg relative"
    >
      {/* <div className="absolute top-0 right-0 bg-primary-300 rounded-bl-lg px-1 z-10">
        PlotQL
      </div> */}
      <div className="graphiql-main">
        <div className="graphiql-sessions">
          <div
            role="tabpanel"
            id="graphiql-session"
            className="graphiql-session"
            aria-labelledby={`graphiql-session-tab-${editorContext.activeTabIndex}`}
          >
            <div ref={editorResize.firstRef}>
              <div
                className={`graphiql-editors${
                  editorContext.tabs.length === 1 ? " full-height" : ""
                }`}
              >
                <div ref={editorToolsResize.firstRef}>
                  <section
                    className="graphiql-query-editor"
                    aria-label="Query Editor"
                  >
                    <div className="graphiql-query-editor-wrapper dark:bg-slate-700">
                      <QueryEditor
                        editorTheme={props.editorTheme}
                        keyMap={props.keyMap}
                        onClickReference={onClickReference}
                        onCopyQuery={props.onCopyQuery}
                        onEdit={props.onEditQuery}
                        readOnly={props.readOnly}
                      />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Determines if the React child is of the same type of the provided React component
function isChildComponentType<T extends ComponentType>(
  child: any,
  component: T
): child is T {
  if (
    child?.type?.displayName &&
    child.type.displayName === component.displayName
  ) {
    return true;
  }

  return child.type === component;
}
