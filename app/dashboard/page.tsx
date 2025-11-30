import Navbar from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <div className="mt-8 px-24">
        <div className="flex gap-4">
          <Input placeholder="Search Projects..." />
          <Button>
            Add New
            <Plus />
          </Button>
        </div>
        <div className="mt-8">
          <ProjectCard />
        </div>
      </div>
    </>
  );
}
