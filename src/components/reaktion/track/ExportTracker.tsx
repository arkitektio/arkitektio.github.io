import React, { useEffect, useState } from "react";
import { FiPlay } from "react-icons/fi";
import { RiStopLine } from "react-icons/ri";
import ReactSlider from "react-slider";
import Timestamp from "react-timestamp";
import { useTrackRiver } from "./context";
import { ExportRunFragment, RunEventFragment } from "../api";

export const ExportTracker = ({ run }: { run: ExportRunFragment }) => {
  const { setRunState } = useTrackRiver();

  const [t, setT] = useState(0);
  const [play, setPlay] = useState(false);
  const [triggerRange, setTriggerRange] = useState({ min: 0, max: 10 });

  const [range, setRange] = useState({ min: 0, max: 100, marks: [0] });

  const latestEvent = run.events ? run.events[0] : null;
  const firstEvent = run.events ? run.events[run.events.length - 1] : null;

  useEffect(() => {
    let newEvents = run.events?.reduce((prev, event) => {
      if (event && event.t <= t) {
        let prev_node = prev?.find((i) => i.source === event?.source);
        if (prev_node) {
          if (prev_node.t <= event.t) {
            return prev.map((i) => (i.source === event.source ? event : i));
          }
          return prev;
        }
        return [...prev, event];
      }
      return prev;
    }, [] as RunEventFragment[]);

    console.log(newEvents);
    setRunState({ t: t, events: newEvents });
  }, [t]);

  return (
    <div className="flex flex-row">
      <div
        className="flex-initial my-auto mr-4 dark:text-white cursor-pointer"
        onClick={() => setPlay(!play)}
      >
        {play ? <RiStopLine size={"1em"} /> : <FiPlay size={"1em"} />}
      </div>

      <div className="flex-grow my-auto">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb rounded text-white border-[5px] border border-gray-100 transition-all duration-300 ease-linear"
          markClassName="example-thumb border border-indigo-700 bg-indigo-500 cursor-pointer rounded-xs "
          trackClassName="example-track bg-gray-700 cursor-pointer"
          onChange={(val) => {
            setT(val), setPlay(false);
          }}
          value={t}
          step={1}
          renderThumb={(props, state) => (
            <div
              {...props}
              key={props.key}
              className={props.className + "group relative"}
            >
              <div className="absolute bottom-1 group-hover:block -translate-x-[50%] w-[10rem] p-2 text-center  rounded">
                <Timestamp
                  relative
                  relativeTo={new Date(firstEvent?.createdAt)}
                  date={
                    run.events?.find((e) => e?.t === state.valueNow)?.createdAt
                  }
                />
              </div>
            </div>
          )}
          max={latestEvent.t}
          min={firstEvent.t}
        />
      </div>
      <div className="flex-initial my-auto ml-4">
        {t}/{latestEvent.t}
      </div>
    </div>
  );
};
