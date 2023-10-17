import { useMikroQuery} from "@jhnnsrs/mikro";
import gql from "graphql-tag";
import React from "react";

export const LatestImage = () => {

    const {data} = useMikroQuery(
        gql`{
            representations(limit: 1){
                store
                name
            }
        }`
    )




    return <div className="">
        Nothing
    {data?.representations?.map((rep) => <> {rep.name} </>)}
    
    
    
    </div>

}


