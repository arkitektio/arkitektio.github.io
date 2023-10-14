import { Timeline } from "../../../dashboard/Timeline";
import { useTrackRiver } from "../context";

export const TimelineSidebar = (props: {}) => {
  const { run, runState } = useTrackRiver();

  return (
    <div className="h-full overflow-y-auto flex flex-col text-white p-3">
      {run?.id && <Timeline id={run?.id} />}
    </div>
  );
};
