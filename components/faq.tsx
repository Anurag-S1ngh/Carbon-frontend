import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What kind of projects can I deploy?",
      answer:
        "Right now the platform supports only React projects. If your project builds with a standard React build script, it will deploy without extra steps.",
    },
    {
      question: "Is it really free?",
      answer:
        "Yes. There are no pricing tiers, credits, or hidden limits. Deploy and host your React apps for free.",
    },
    {
      question: "Do you support custom domains?",
      answer:
        "Not yet. Your projects get a generated project URL, and custom domain support will be added later.",
    },
    {
      question: "Do I need to configure anything?",
      answer:
        "No. Push your project or upload it, and the platform handles the build and deployment automatically.",
    },
    {
      question: "How fast are deploys?",
      answer:
        "Deploys usually finish within a few seconds. As long as your build isn’t massive, it’s quick.",
    },
    {
      question: "Can I see logs?",
      answer:
        "Build logs are shown directly in the dashboard so you can track what happened during deployment.",
    },
    {
      question: "Do you support backend APIs?",
      answer:
        "Not at the moment. The platform is currently focused on front-end React deployments only.",
    },
    {
      question: "Do my projects stay online permanently?",
      answer:
        "Yes. Projects don’t auto-expire or shut down. Once deployed, they stay live unless you delete them.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          <h3 className="text-6xl mt-2">FAQs</h3>
          <p className="mt-4 w-sm">
            Answers to the most common questions about deploying your projects
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((e, index: number) => {
            return (
              <AccordionItem key={e.question} value={index.toString()}>
                <AccordionTrigger value={index}>{e.question}</AccordionTrigger>
                <AccordionContent className="bg-primary text-primary-foreground p-2">
                  {e.answer}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};
