import gql from "graphql-tag";
import React from "react";
import { useService } from "../lib/arkitekt/provider";

const CREATE_MODEL_ZIP = gql`
  mutation ($data: ModelFile!, $kind: ModelKind!, $name: String!) {
    createModel(data: $data, kind: $kind, name: $name) {
      id
      name
    }
  }
`;

const className = "my-2 p-2 rounded-md text-black text-center w-60 ";

export const UploadModelButton = ({
  url,
  name,
  kind,
}: {
  url: string;
  name: string;
  kind: string;
}) => {
  const { client } = useService("mikro").client;

  const handleClick = async () => {
    console.log(url);
    try {
      const responseA = await fetch(url);
      if (!responseA.ok) {
        throw new Error("Failed fetching file from Documentation");
      }
      const fileBlob = await responseA.blob();
      const file = new File([fileBlob], "model.zip", {
        type: fileBlob.type,
      });

      const { data } = await client.mutate({
        mutation: CREATE_MODEL_ZIP,
        variables: { name, kind, data: file },
      });

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={className + "cursor-pointer bg-yellow-200"}
      >
        🪄 Install {name}
      </button>
    </>
  );
};
