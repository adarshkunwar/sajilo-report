import { BarChart2, Clock, FileText, Check } from "lucide-react";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-16 text-center text-3xl font-bold">
          Simple, transparent pricing
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {["Starter", "Professional", "Enterprise"].map((plan, index) => (
            <div key={plan} className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-xl font-semibold">{plan}</h3>
              <div className="mb-6 text-4xl font-bold">
                ${index === 0 ? "29" : index === 1 ? "99" : "299"}
                <span className="text-base font-normal text-gray-600">
                  /month
                </span>
              </div>
              <ul className="mb-8 space-y-4">
                {[
                  "Unlimited Reports",
                  "Custom Templates",
                  "Email Support",
                  index > 0 && "API Access",
                  index > 1 && "Custom Branding",
                ]
                  .filter(Boolean)
                  .map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
              </ul>
              <button className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
