import React from "react";

// Stub: the interactive reaktion workflow viewer (reactflow-based) has not been
// ported yet. Renders a placeholder so docs that embed it still build.
export const DisplayWorkflow = (_props: Record<string, unknown>) => {
  return (
    <div className="my-4 rounded-md border border-fd-border bg-fd-card p-4 text-sm text-fd-muted-foreground">
      Interactive workflow preview is not available in this documentation build.
    </div>
  );
};

export default DisplayWorkflow;
