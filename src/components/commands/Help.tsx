import { Fragment, type FC } from "react";
import Commands from "@/components/commands";

interface HelpProps {}

const Help: FC<HelpProps> = ({}) => {
  return (
    <div className="command-container">
      <p>here's a list of all commands you can use</p>
      <ul className="grid grid-cols-12 ml-4">
        {Array.from(Commands).map(([cmd, { description, hidden }], i) => {
          if (!hidden) {
            return (
              <Fragment key={i}>
                <div className="col-span-3" role="row">
                  <span className="glow-white text-white">{cmd}</span>
                </div>
                <div className="col-span-9" role="row">
                  <span>{description}</span>
                </div>
              </Fragment>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default Help;
