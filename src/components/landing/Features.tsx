import { BarChart2, Clock, FileText } from "lucide-react";

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
            <h3 className="mb-4 text-xl font-semibold">Pre built templates</h3>
            <p className="text-gray-600">
              Choose from a variety of pre-built templates to get started
              quickly.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <Clock className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mb-4 text-xl font-semibold">Simple but efficeint</h3>
            <p className="text-gray-600">
              Our platform is designed to be simple and easy to use, yet
              powerful.
            </p>
          </div>
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <FileText className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="mb-4 text-xl font-semibold">Feature complete</h3>
            <p className="text-gray-600">
              Nearly everything you could possibly want to do with the reports,
              can be done here
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
