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
    <section
      id="pricing"
      className="bg-gradient-to-b from-white to-gray-50 py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Free during beta!
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Since we are still in the WIP phase, all plans are free during beta.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl ${
                plan.featured
                  ? "scale-105 border-2 border-blue-500 bg-white shadow-xl lg:-mt-4"
                  : "border border-gray-200 bg-white shadow-lg"
              } transition-all duration-300 hover:scale-[1.02]`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
                  <span className="rounded-full bg-blue-500 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mb-6 text-gray-600">{plan.subtitle}</p>

                <div className="mb-8 flex items-baseline">
                  <span className="text-5xl font-extrabold text-gray-900">
                    $0
                  </span>
                  <span className="ml-2 text-gray-600">/month</span>
                  <span className="ml-2 text-sm text-blue-600">
                    during beta
                  </span>
                </div>

                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-xl px-6 py-4 font-semibold transition-colors duration-200 ${
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
