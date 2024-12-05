import { Eye } from "lucide-react";
import Link from "next/link";

const ProjectLayout = ({ name, description, demoLink, techs }) => {
  return (
    <div className="w-full relative rounded-lg overflow-hidden p-6 custom-bg">
      <h1 className="font-bold mb-2">{name}</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center space-x-2 mr-2">
          <p className="text-muted hidden sm:inline-block">{description}</p>
        </div>
        <Link href={demoLink} target="_blank">
          <Eye
            style={{ width: "20px" }}
            className="w-full h-auto"
            strokeWidth={1.5}
          />
        </Link>
      </div>
      <div className="w-full flex items-center justify-center mt-3">
        {techs.map((tech, index) => {
          return (
            <span
              className="rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize mr-3 px-3 py-1"
              key={index}
            >
              {tech}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectLayout;
