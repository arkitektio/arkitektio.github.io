import { anySignal } from "any-signal";

function mstimeout(ms: number) {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject(Error(`Timeout after ${ms}`)), ms),
  );
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
