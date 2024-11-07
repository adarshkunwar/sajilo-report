import { BarChart2, Clock, FileText, Check } from "lucide-react";

const Features = () => {
  return (
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
              Automatically generate insights from your data with our AI-powered
              analytics engine.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Clock className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mb-4 text-xl font-semibold">Automated Reports</h3>
            <p className="text-gray-600">
              Schedule reports to run automatically and deliver to stakeholders
              on time.
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
  );
};

export default Features;
