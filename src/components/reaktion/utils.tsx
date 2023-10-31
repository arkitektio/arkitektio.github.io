import {
  EdgeInput,
  FlowFragment,
  FlowNodeFragment,
  GlobalFragment,
  GlobalInput,
  NodeInput,
  PortChildFragment,
  PortFragment,
  StreamItem,
  StreamItemChild,
  StreamKind,
} from "./api";
import { FlowEdge, FlowNode } from "./types";

export const flussPortChildToStreamItem = (
  port: PortChildFragment,
): StreamItemChild => {
  return {
    kind: port.kind,
    identifier: port.identifier,
    nullable: port.nullable,
    scope: port.scope,
    variants: port?.variants
      ?.filter(notEmpty)
      .map((x) => flussPortChildToStreamItem(x)),
    child: port.child && flussPortChildToStreamItem(port.child),
  };
};

export const flussPortToStreamItem = (port: PortFragment): StreamItem => {
  return {
    key: port.key,
    kind: port.kind,
    identifier: port.identifier,
    nullable: port.nullable,
    scope: port.scope,
    variants: port?.variants
      ?.filter(notEmpty)
      .map((x) => flussPortChildToStreamItem(x)),
    child: port.child && flussPortChildToStreamItem(port.child),
  };
};

export const globalArgKey = (id: string, key: string) => {
  return `${id}.${key}`;
};

export function notEmpty<TValue>(
  value: TValue | null | undefined,
): value is TValue {
  if (value === null || value === undefined) return false;
  return true;
}

const reg = /\s*,["']__typename["']\s*:\s*["'][\d\w]*["']\s*?/g;
const reg2 = /\s*{["']__typename["']\s*:\s*["'][\d\w]*["']\s*,?/g;

export function noTypename<T extends { [key: string]: any }>(obj: T): T {
  console.log(JSON.stringify(obj));
  const str = JSON.stringify(obj).replace(reg, "").replace(reg2, "{");
  console.log(str);
  let z = JSON.parse(str);
  console.log(z);
  return z;
}

export function keyInObject(
  key: string,
  obj: any,
): obj is {
  [key: string]: any;
} {
  return obj && key in obj;
}

export const nodes_to_flownodes = (
  nodes: (FlowNodeFragment | null | undefined)[] | null | undefined,
): FlowNode[] => {
  const nodes_ =
    nodes
      ?.map((node) => {
        if (node) {
          const { id, position, __typename, ...rest } = node;
          const node_: FlowNode = {
            type: __typename,
            id: id,
            position: position,
            data: {
              __typename: __typename,
              ...rest,
            },
            dragHandle: ".custom-drag-handle",
            parentNode: rest.parentNode ? rest.parentNode : undefined,
          };
          return node_;
        }
        return undefined;
      })
      .filter(notEmpty) || [];

  return nodes_;
};

export const edges_to_flowedges = (
  edges: FlowFragment["graph"]["edges"],
): FlowEdge[] => {
  const flowedges =
    edges
      ?.map((edge) => {
        if (edge) {
          const {
            id,
            source,
            sourceHandle,
            target,
            targetHandle,
            __typename,
            ...rest
          } = edge;
          const flowedge: FlowEdge = {
            id,
            type: __typename,
            source,
            sourceHandle,
            target,
            targetHandle,
            data: {
              __typename: __typename,
              ...rest,
            },
          };
          return flowedge;
        }
        return undefined;
      })
      .filter(notEmpty) || [];

  return flowedges;
};

export const flownodes_to_nodes = (nodes: FlowNode[]): NodeInput[] => {
  const nodes_ =
    nodes
      ?.map((node) => {
        if (node) {
          const {
            id,
            position,
            type,
            parentNode,
            data: { outstream, constream, instream, ...rest },
          } = node;
          const node_: NodeInput = {
            outstream: outstream?.map((s) =>
              s ? s.filter(notEmpty).map(noTypename) : [],
            ) || [[]], //InputType do not have a __typename
            constream: constream?.map((s) =>
              s ? s.filter(notEmpty).map(noTypename) : [],
            ) || [[]], //
            instream: instream?.map((s) =>
              s ? s.filter(notEmpty).map(noTypename) : [],
            ) || [[]], //
            id,
            position: { x: position.x, y: position.y },
            typename: type || "Fake type",
            name: (rest as any).name,
            description: (rest as any).description,
            hash: (rest as any).hash,
            implementation: (rest as any).implementation,
            kind: (rest as any).kind,
            defaults: (rest as any).defaults,
            mapStrategy: (rest as any).mapStrategy,
            allowLocal: (rest as any).allowLocal,
            maxRetries: (rest as any).maxRetries,
            retryDelay: (rest as any).retryDelay,
            binds: (rest as any).binds,
            parentNode: parentNode,
            interface: (rest as any).interface,
          };
          return node_;
        }
      })
      .filter(notEmpty) || [];

  return nodes_ || [];
};

export const flowedges_to_edges = (flowedges: FlowEdge[]): EdgeInput[] => {
  const edges =
    flowedges
      ?.map((edge) => {
        console.log(edge);
        if (edge) {
          const { id, source, sourceHandle, target, targetHandle, type, data } =
            edge;
          const input: EdgeInput = {
            id,
            typename: type || "Fake type",
            source,
            sourceHandle: sourceHandle || "returns",
            target,
            targetHandle: targetHandle || "args",
            stream: data?.stream.filter(notEmpty).map(noTypename) || [],
          };
          return input;
        }
        return undefined;
      })
      .filter(notEmpty) || [];

  return edges;
};

export const flowglobals_to_globals = (
  globals: (GlobalFragment | null | undefined)[] | null | undefined,
): GlobalInput[] => {
  const edges =
    globals
      ?.map((global) => {
        console.log(global);
        if (global) {
          const input: GlobalInput = {
            toKeys: global.toKeys,
            port: noTypename(global.port),
          };
          return input;
        }
        return undefined;
      })
      .filter(notEmpty) || [];

  return edges;
};
