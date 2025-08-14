import { Alias } from "../fakts/faktsSchema";

export const aliasToHttpPath = (alias: Alias, append: string): string => {
  let url = alias.ssl ? "https://" : "http://";

  url += alias.host;
  if (alias.port) {
    url += `:${alias.port}`;
  }

  if (alias.path) {
    url += `/${alias.path}`;
  }

  if (append) {
    url += `/${append}`;
  }

  return url;
};

export const aliasToWsPath = (alias: Alias, append: string): string => {
  let url = alias.ssl ? "wss://" : "ws://";

  url += alias.host;
  if (alias.port) {
    url += `:${alias.port}`;
  }

  if (alias.path) {
    url += `/${alias.path}`;
  }

  if (append) {
    url += `/${append}`;
  }

  return url;
};
