import TextRotate from "@/components/fancy/text/text-rotate";

export const WeAreFor = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <h3 className="text-4xl mb-2">
          We are for
          <br />
        </h3>
        <TextRotate
          texts={[
            "Developers",
            "Students",
            "Startups",
            "Companies",
            "Creators",
            "Everyone",
          ]}
          mainClassName="text-white px-2 sm:px-2 md:px-3 bg-primary overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-6xl"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
    </>
  );
};
