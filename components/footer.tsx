import { Button } from "./ui/button";

export const Footer = () => {
  const socials = [
    {
      name: "Email",
      href: "",
    },
    {
      name: "Twitter",
      href: "",
    },
    {
      name: "Github",
      href: "",
    },
  ];
  return (
    <>
      <footer className="border py-2 px-24 flex justify-between items-center">
        <h3 className="text-lg">Radium</h3>
        {/* icons */}
        <div>
          {socials.map((e) => {
            return (
              <Button size={"sm"} key={e.name}>
                {e.name}
              </Button>
            );
          })}
        </div>
      </footer>
    </>
  );
};
