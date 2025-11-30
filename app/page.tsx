import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { ChevronRightSquareIcon, Zap } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div className="fixed -z-10 h-screen w-full overflow-hidden"> */}
      {/*   <DotPattern className="text-primary/60" glow width={6} height={6} /> */}
      {/* </div> */}
      <div className="absolute w-full flex flex-col top-0 left-0 gap-6 justify-center items-center min-h-screen">
        <h1 className="font-bold text-6xl text-center capitalize">
          Deploy your web app
          <br />
          faster than ever
        </h1>
        <p className="w-lg text-center">
          Provides a streamlined platform for building, deploying, and operating
          high-performance applications at scale
        </p>
        <div className="flex gap-4">
          <Button size={"lg"}>
            Deploy Now
            <Zap />
          </Button>
          <Button className="bg-white" variant={"outline"} size={"lg"}>
            Explore Features
            <ChevronRightSquareIcon />
          </Button>
        </div>
      </div>
    </>
  );
}
