import React from "react";
import { ArrowRight, BarChart2, Clock, FileText, Check } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">ReportPro</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-white hover:text-blue-200">
                Features
              </a>
              <a href="#pricing" className="text-white hover:text-blue-200">
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-white hover:text-blue-200"
              >
                Testimonials
              </a>
            </div>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50">
              Get Started
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Data Into Powerful Reports
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Create professional reports in minutes, not hours. Automate your
              reporting workflow and focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 flex items-center justify-center">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Features that make reporting effortless
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BarChart2 className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Analytics</h3>
              <p className="text-gray-600">
                Automatically generate insights from your data with our
                AI-powered analytics engine.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Automated Reports</h3>
              <p className="text-gray-600">
                Schedule reports to run automatically and deliver to
                stakeholders on time.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <FileText className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Templates</h3>
              <p className="text-gray-600">
                Create and save custom report templates that match your brand
                identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            Simple, transparent pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Starter", "Professional", "Enterprise"].map((plan, index) => (
              <div key={plan} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">{plan}</h3>
                <div className="text-4xl font-bold mb-6">
                  ${index === 0 ? "29" : index === 1 ? "99" : "299"}
                  <span className="text-base font-normal text-gray-600">
                    /month
                  </span>
                </div>
                <ul className="space-y-4 mb-8">
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
                        <Check className="h-5 w-5 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
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
