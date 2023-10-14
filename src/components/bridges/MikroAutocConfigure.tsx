import { useFakts } from "@jhnnsrs/fakts";
import { useHerre } from "@jhnnsrs/herre";
import { useMikro } from "mikrots";
import React, { useEffect } from "react";

const possibleTypes = {
  Descendent: ["Leaf", "MentionDescendent", "ParagraphDescendent"],
  Node: ["MentionDescendent", "ParagraphDescendent"],
};

export const MikroAutoConfigure: React.FC<{}> = (props) => {
  const { configure } = useMikro();
  const { token } = useHerre();
  const { fakts } = useFakts();

  useEffect(() => {
    if (token && fakts.mikro) {
      configure({
        secure: fakts.mikro.secure,
        datalayer: fakts.mikro.datalayer,
        wsEndpointUrl: fakts.mikro.ws_endpoint_url,
        endpointUrl: fakts.mikro.endpoint_url,
        possibleTypes: possibleTypes,
        retrieveToken: () => token,
        s3resolve: (path?: string | null) => {
          if (path) {
            return fakts.s3.resolve(path);
          }
          return "fallback";
        },
      });
    }
  }, [token, fakts]);

  return <></>;
};
