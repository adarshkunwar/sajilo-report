import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      subtitle: "For personal use",
      features: [
        "Up to 5 reports per month",
        "Basic report templates",
        "7-day report history",
        "Export to PDF",
      ],
      featured: false,
    },
    {
      name: "Pro",
      subtitle: "For professionals",
      features: [
        "Unlimited reports",
        "Advanced report templates",
        "30-day report history",
        "Export to PDF & Excel",
        "Custom report branding",
        "Priority email support",
      ],
      featured: true,
    },
    {
      name: "Team",
      subtitle: "For growing teams",
      features: [
        "Everything in Pro",
        "Unlimited report history",
        "Team workspace",
        "Shared report library",
        "Collaboration tools",
        "Custom report scheduling",
      ],
      featured: false,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Free during beta!
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Since we are still in the WIP phase, all plans are free during beta.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl ${
                plan.featured
                  ? "bg-white border-2 border-blue-500 shadow-xl scale-105 lg:-mt-4"
                  : "bg-white border border-gray-200 shadow-lg"
              } transition-all duration-300 hover:scale-[1.02]`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.subtitle}</p>

                <div className="flex items-baseline mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">
                    $0
                  </span>
                  <span className="ml-2 text-gray-600">/month</span>
                  <span className="ml-2 text-sm text-blue-600">
                    during beta
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-xl py-4 px-6 font-semibold transition-colors duration-200 ${
                    plan.featured
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Start Using {plan.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
