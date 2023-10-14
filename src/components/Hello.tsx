import { FaktsGuard, useFakts } from "@jhnnsrs/fakts";
import { HerreGuard, useHerre } from "@jhnnsrs/herre";
import {
  ChartRegistry,
  KraphQLProvider,
  MultiComposed,
  SmartRegistry,
  Tree,
  useKraphQL,
} from "@jhnnsrs/kraphql";
import { SmartProps } from "@jhnnsrs/kraphql/dist/types";
import { gql } from "graphql-tag";
import React, { useEffect, useState } from "react";
import { NoFakts } from "../fallbacks/NoFakts";
import { NoHerre } from "../fallbacks/NoHerre";
import { NoMikro } from "../fallbacks/NoMikro";
import { MikroGuard, useMikroQuery } from "@jhnnsrs/mikro";

export const EntryTree: React.FC<{}> = (props) => {
  const { activeTree } = useKraphQL();
  return (
    <div className="overflow-y-auto">
      {activeTree && (
        <Tree
          group={activeTree}
          groupsClassName={() => ""}
          containerClassName={(group) =>
            `w-full h-[300px] ${!group.omit ? " " : ""}`
          }
        />
      )}
    </div>
  );
};

export const Test = () => {
  const { setActiveQueryData } = useKraphQL();

  const { data, error, loading } = useMikroQuery(gql`
    query {
      GROUP: experiment(id: 6) {
        OBJECT: id
        TYPE: __typename
        NAME: name

        GROUPS: samples(tags: "bad", limit: 1) {
          OBJECT: id
          TYPE: __typename
          NAME: name
          DATA: representations(variety: VOXEL) {
            DATUM_AS_TIME: omero {
              VALUE_FROM_DATE: acquisitionDate
            }

            FLATDATUM_OBJECT_AS_INDEX: id
            FLATDATUM_VALUE_FROM_INT_AS_INDEX: id
            FLATDATUM_TYPE_AS_INDEX: __typename

            DATUM_AS_EXPOSURE_TIME: omero {
              OBJECT: id
              TYPE: __typename
              VALUE_FROM_SUM: planes {
                VALUE_FROM_FLOAT: exposureTime
              }
            }
          }
        }
      }
    }
  `);

  useEffect(() => {
    console.log(data);
    setActiveQueryData(data);
  }, [data]);

  if (error) {
    return <>{JSON.stringify(error)}</>;
  }

  if (loading) {
    return <>{JSON.stringify(loading)}</>;
  }

  return <EntryTree />;
};

export const HelloInside = () => {
  const { fakts, setFakts } = useFakts();
  const { login, logout } = useHerre();

  const [chartRegistry, setChartRegistry] = useState<
    ChartRegistry | undefined
  >();
  const [smartRegistry, setSmartRegistry] = useState<
    SmartRegistry | undefined
  >();

  useEffect(() => {
    let x = new ChartRegistry();
    x.registerChart({
      name: "test",
      match: (group) => {
        if (!group.data) {
          return;
        }

        return {
          priority: 1,
          Component: MultiComposed as any,
        };
      },
    });

    setChartRegistry(x);
    let s = new SmartRegistry({
      name: "fallback",
      object: "fallback",
      Component: (props: SmartProps) => (
        <div>{JSON.stringify(props.value)}</div>
      ),
    });

    s.registerSmart({
      name: "Omero",
      object: "Omero",
      Component: (props: SmartProps) => (
        <div className="bg-slate-900 p-3 rounded rounded-md">
          This is the Omero file {JSON.stringify(props.value)}
        </div>
      ),
    });
    setSmartRegistry(s);
  }, []);

  return (
    <div className="mb-20">
      <button onClick={() => setFakts(null)}>Disconnect</button>
      <button onClick={() => logout()}>Logout</button>
      {smartRegistry && chartRegistry && (
        <KraphQLProvider
          chartRegistry={chartRegistry}
          smartRegistry={smartRegistry}
        >
          <Test />
        </KraphQLProvider>
      )}
    </div>
  );
};

export const Hello = () => {
  return (
    <FaktsGuard fallback={<NoFakts />}>
      <HerreGuard fallback={<NoHerre />}>
        <MikroGuard fallback={<NoMikro />}>
          <HelloInside />
        </MikroGuard>
      </HerreGuard>
    </FaktsGuard>
  );
};
