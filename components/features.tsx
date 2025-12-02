export const Features = () => {
  const features = [
    {
      title: "Instant Deploys",
      description:
        "Deploy React projects in seconds with minimal setup. Push and preview immediately.",
    },
    {
      title: "Completely Free",
      description:
        "No pricing tiers, no hidden limits. Deploy and host your projects without paying a rupee.",
    },
    {
      title: "Built for React",
      description:
        "The platform is optimized specifically for React apps, giving you a simpler, cleaner workflow.",
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="border rounded-xl p-8 hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-xl font-medium">{f.title}</h3>
            <p className="text-sm text-accent-foreground/80 mt-2">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
