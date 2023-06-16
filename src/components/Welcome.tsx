import data from "@/data";
import type { FC } from "react";

const Welcome: FC = ({}) => {
  return (
    <div className="my-2">
      <pre className="font-mono whitespace-pre text-white glow-white">
        {data.art}
      </pre>
      <p>
        type{" "}
        <code className="bg-black/10 rounded px-2 py-1 glow-white">help</code>{" "}
        and start hacking!
      </p>
    </div>
  );
};

export default Welcome;
