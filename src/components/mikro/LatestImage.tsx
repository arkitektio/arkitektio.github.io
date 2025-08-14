import { useImagesQuery } from "@site/src/lib/mikro/api/graphql";
import React from "react";

export const LatestImage = () => {
  const { data } = useImagesQuery({});

  return (
    <div className="">
      Nothing
      {data?.images?.map((rep) => <> {rep.__typename} </>)}
    </div>
  );
};
