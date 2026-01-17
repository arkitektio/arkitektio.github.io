import { anySignal } from "any-signal";
import { AppContext, EnhancedManifest, ReportRequest, Service } from "./types";
import { ApolloClient, NormalizedCache } from "@apollo/client";
import { Manifest } from "./fakts/manifestSchema";
import { Alias } from "./fakts/faktsSchema";


function mstimeout(ms: number) {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject(Error(`Timeout after ${ms}`)), ms),
  );
}


export const selectService = (context: AppContext, name: string): Service => {
  const client = context.connection?.serviceMap[name];
  if (!client) {
    throw new Error(`Client ${name} not found`);
  }
  return client;
}

export const selectAlias = (context: AppContext, name: string): Alias => {
  const alias = context.connection?.aliasMap[name];
  if (!alias) {
    throw new Error(`Alias ${name} not found`);
  }
  return alias;
}



export const selectApolloClient = (
  context: AppContext,
  name: string,
): ApolloClient<NormalizedCache> => {
  const client = selectService(context, name).client;
  return client as ApolloClient<NormalizedCache>;
}


export async function awaitWithTimeout<T>(
  promise: Promise<T>,
  ms: number,
): Promise<T> {
  return (await Promise.race([promise, mstimeout(ms)])) as T;
}

type ExpandedRequestInit = RequestInit & {
  timeout: number;
  controller: AbortController;
};

export async function fetchWithTimeout(
  resource: RequestInfo,
  options: ExpandedRequestInit,
) {
  let id: NodeJS.Timeout | undefined = undefined;
  let timeoutController: AbortController | undefined = undefined;
  if (options?.timeout) {
    timeoutController = new AbortController();

    id = setTimeout(
      () =>
        timeoutController &&
        timeoutController.abort(new Error("Timeout Error")),
      options.timeout,
    );
    options.signal = anySignal([
      options.controller.signal,
      timeoutController.signal,
    ]);
  } else {
    options.signal = options?.controller.signal;
  }

  try {
    const response = await fetch(resource, {
      ...options,
    });
    if (id) {
      clearTimeout(id);
    }
    return response;
  } catch (e) {
    if (id) {
      clearTimeout(id);
    }

    if (options.controller.signal.aborted) {
      throw new Error("User Cancelled");
    }

    if (timeoutController) {
      if (timeoutController.signal.aborted) {
        throw new Error("Timeout Error");
      }
    }

    throw e;
  }
}

export const enhanceManifest = async (
  manifest: Manifest,
): Promise<EnhancedManifest> => {
  // Add any enhancements to the manifest here
  let node_id: string | undefined = undefined;
  try {
    node_id = await window.api.getNodeId();
  } catch (e) {
    console.error("Failed to get node ID:", e);
    node_id = undefined
  }




  return {
    ...manifest,
    node_id: node_id,
  };
};


export const report = async (
  url: string,
  reportRequest: ReportRequest,
): Promise<void> => {
  try {
    const response = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reportRequest),
    });

    if (!response.ok) {
      console.warn(
        `Report request failed: ${response.status} ${response.statusText}`,
      );
    }
  } catch (e) {
    console.error("Report request error:", e);
  }
}

