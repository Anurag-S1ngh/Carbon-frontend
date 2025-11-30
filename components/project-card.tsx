import { X } from "lucide-react";
import { Button } from "./ui/button";

export const ProjectCard = () => {
  return (
    <>
      <div className="border border-primary/20 w-fit p-5 flex flex-col gap-8">
        <div className="flex gap-2">
          <div className="size-10 bg-blue-500 rounded-full"></div>
          <div>
            <h3 className="font-medium">Project Name</h3>
            <p className="text-xs">lorem.anurag.me</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button>Re-Deploy</Button>
          <Button variant={"destructive"}>
            Delete
            <X />
          </Button>
        </div>
      </div>
    </>
  );
};
