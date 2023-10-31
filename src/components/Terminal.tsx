import React, { useEffect, useRef, useState } from "react";
import "asciinema-player/dist/bundle/asciinema-player.css";
import BrowserOnly from "@docusaurus/BrowserOnly";
type AsciinemaPlayerProps = {
  src: string;
  // START asciinemaOptions
  cols?: string;
  rows?: string;
  autoPlay?: boolean;
  preload?: boolean;
  loop?: boolean | number;
  startAt?: number | string;
  speed?: number;
  idleTimeLimit?: number;
  theme?: string;
  poster?: string;
  fit?: string;
  fontSize?: string;
  // END asciinemaOptions
};

export const InnerTerminal = ({
  src,
  autoPlay = true,
  speed = 1.5,
  ...asciinemaOptions
}: AsciinemaPlayerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [player, setPlayer] = useState<typeof import("asciinema-player")>();
  useEffect(() => {
    import("asciinema-player").then((p) => {
      setPlayer(p);
    });
  }, []);

  useEffect(() => {
    const currentRef = ref.current;
    console.log(src);
    const instance = player?.create(src, currentRef, {
      autoPlay,
      speed,
      ...asciinemaOptions,
    });
    return () => {
      instance?.dispose();
    };
  }, [src, player, asciinemaOptions]);

  return (
    <div
      className="coding inverse-toggle px-1 py-1 shadow-lg text-gray-100 text-sm 
              bg-[#121314] rounded-lg leading-normal overflow-hidden"
    >
      <div className="top mb-2 mt-1 flex">
        <div className="h-2 w-2 bg-red-500 rounded-full"></div>
        <div className="ml-2 h-2 w-2 bg-orange-300 rounded-full"></div>
        <div className="ml-2 h-2 w-2 bg-green-500 rounded-full"></div>
      </div>
      <div className="mt-1 w-full">
        <div ref={ref} />
      </div>
    </div>
  );
};

export const Terminal = (props: AsciinemaPlayerProps) => {
  return (
    <BrowserOnly fallback={<div>Hallo</div>}>
      {() => <InnerTerminal {...props} />}
    </BrowserOnly>
  );
};

export default Terminal;
