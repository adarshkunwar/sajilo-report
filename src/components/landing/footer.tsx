import { Twitter, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "FAQ", href: "#faq" },
    ],
    Resources: [
      { name: "Documentation", href: "#" },
      { name: "Tutorial", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Support", href: "#" },
    ],
    Company: [
      { name: "About", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
    ],
  };

  const socialLinks = [
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
    {
      name: "Email",
      href: "mailto:hello@example.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 py-12">
          {/* Brand section */}
          <div className="col-span-2 md:col-span-4">
            <div className="text-xl font-bold text-gray-900 mb-4">
              Sajilo report
            </div>
            <p className="text-gray-600 mb-4">
              Simplifying reports for teams of all sizes. Create beautiful
              reports in minutes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <span className="sr-only">{item.name}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-2">
              <h3 className="font-semibold text-gray-900 mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} Sajilo report. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Status
              </a>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Changelog
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
