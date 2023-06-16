import { getProjects } from "@/lib/sanity";
import { useQuery } from "@tanstack/react-query";
import type { FC } from "react";

const Projects: FC = ({}) => {
  const projects = useQuery<Project[]>({
    queryFn: getProjects,
    queryKey: ["project"],
  });

  if (projects.isLoading) {
    return <div>loading binaries ...</div>;
  }

  console.log(projects.data);

  const data = projects.data?.sort(
    (prev, next) =>
      new Date(next.createdAt).getTime() - new Date(prev.createdAt).getTime()
  );

  console.log(data);

  return (
    <div className="lowercase">
      <ul className="space-y-2 gap-x-4 columns-2">
        {data?.map((project) => (
          <li key={project._id} className="break-inside-avoid">
            <h4 className="space-x-2">
              <a
                href={project.url}
                target="_blank"
                className="glow-white font-medium inline-flex items-center hover:underline"
              >
                <span>{project.name}</span>
              </a>
              <span className="font-light text-zinc-400">
                {project.createdAt}
              </span>
            </h4>
            <p className="ml-4">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
