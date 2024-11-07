import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      company: "Growth Labs",
      image: "/api/placeholder/64/64",
      content:
        "The reporting system has transformed how we track our campaigns. What used to take hours now takes minutes, and the insights are so much clearer.",
      stars: 5,
    },
    {
      name: "James Wilson",
      role: "Data Analyst",
      company: "DataSense",
      image: "/api/placeholder/64/64",
      content:
        "I've tried many reporting tools, but this one stands out for its simplicity and effectiveness. The templates are incredibly well-designed and save me tons of time.",
      stars: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Operations Director",
      company: "Swift Solutions",
      image: "/api/placeholder/64/64",
      content:
        "Finally, a reporting tool that doesn't overcomplicate things. It's streamlined, intuitive, and gives me exactly what I need without the fluff.",
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by data-driven teams
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of professionals who've simplified their reporting
            workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="text-gray-700 mb-6">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Join these satisfied users and streamline your reporting today
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
