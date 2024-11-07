import React from "react";
import { ArrowRight, BarChart2, Clock, FileText, Check } from "lucide-react";
import Navbar from "./navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="b">
        <Navbar />

        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
              Transform Your Data Into Powerful Reports
            </h1>
            <p className="mb-8 text-xl text-blue-100">
              Create professional reports in minutes, not hours. Automate your
              reporting workflow and focus on what matters most.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 hover:bg-blue-50">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-semibold text-white hover:bg-blue-600">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-16 text-center text-3xl font-bold">
            Features that make reporting effortless
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <BarChart2 className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Smart Analytics</h3>
              <p className="text-gray-600">
                Automatically generate insights from your data with our
                AI-powered analytics engine.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <Clock className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Automated Reports</h3>
              <p className="text-gray-600">
                Schedule reports to run automatically and deliver to
                stakeholders on time.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <FileText className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="mb-4 text-xl font-semibold">Custom Templates</h3>
              <p className="text-gray-600">
                Create and save custom report templates that match your brand
                identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
    </div>
  );
};

export default LandingPage;
