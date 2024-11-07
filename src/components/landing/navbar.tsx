import CustomButton from "../../ui/CustomButton";

const Links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "How to use",
    link: "/about",
  },
  {
    name: "Pricing",
    link: "/pricing",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-black">Sajilo Report</div>
        <div className="flex items-center justify-between">
          <div className="hidden items-center space-x-4 md:flex">
            {Links.map((link) => (
              <CustomButton
                size="md"
                text={link.name}
                variant="link"
                link={link.link}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
