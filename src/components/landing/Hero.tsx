import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold leading-tight text-gray-800">
            <span className="text-blue-600">The</span> best way to{" "}
            <span className="text-blue-600">Create </span> and{" "}
            <span className="text-blue-600">Have fun</span> while creating your{" "}
            <span className="text-blue-600">Reports</span>
          </h1>
          <p className="text-gray-600 lg:text-lg mt-6">
            We provide you with the ready made templates to create your reports
            in a fun and interactive way so that you dont have to worry about
            the formatting.
          </p>
          <button className="flex items-center mt-6 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            Get started <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="https://cdn.devdojo.com/images/november2020/hero-image.png"
            alt="Hero"
            className="object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
