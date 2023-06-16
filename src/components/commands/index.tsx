import React from "react";

import Help from "./Help";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";

const Commands = new Map<
  string,
  {
    description?: string;
    output: React.FC;
    hidden?: boolean;
  }
>([
  [
    "help",
    {
      description: "gain some brain cells",
      output: Help,
    },
  ],
  [
    "skills",
    {
      description: "some stuff i'm good at",
      output: Skills,
    },
  ],
  [
    "projects",
    {
      description: "some stuff i built",
      output: Projects,
    },
  ],
  [
    "about",
    {
      description: "stop stalking on me!",
      output: About,
    },
  ],
  [
    "ls",
    {
      output: () => <span>this is a web browser, not a computer!</span>,
      hidden: true,
    },
  ],
  [
    "time",
    {
      output: () => <span className="my-2">{new Date().toISOString()}</span>,
      hidden: true,
    },
  ],
]);

export default Commands;
