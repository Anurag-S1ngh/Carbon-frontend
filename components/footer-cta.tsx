import { Button } from "./ui/button";

export const FooterCTA = () => {
  return (
    <>
      <div className="w-full relative">
        {/* Dashed Grid */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        linear-gradient(to right, #e7e5e44d 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e44d 1px, transparent 1px)
      `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
            WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        <div className="flex flex-col gap-6 justify-center items-center h-[50vh] w-full bg-primary">
          <h3 className="text-3xl text-secondary text-center capitalize">
            Get your project
            <br /> online today
          </h3>
          <Button variant={"secondary"}>Start Now</Button>
        </div>
      </div>
    </>
  );
};
