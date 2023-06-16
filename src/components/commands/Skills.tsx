import data from "@/data";
import type { FC } from "react";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div className="command-container">
      <p className="text-zinc-300">
        here are the different technologies that i'm experienced with:
      </p>
      <ul role="list" className="ml-4 list-decimal grid grid-cols-2 gap-y-2">
        {data.skills.map((category, index) => (
          <div key={index}>
            <h4 className="font-medium space-x-1 glow-white">
              <span>{category.icon}</span>
              <span>{category.category}</span>
            </h4>
            <ul className="list-decimal">
              {category.content.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
      <p className="space-x-2 udnerline">
        <strong>note:</strong>
        <span>
          there are a bunch of techs i didn't mention because i couldn't find a
          category to fit them into, but you get the idea. i think those are the
          most significant.
        </span>
      </p>
    </div>
  );
};

export default Skills;
