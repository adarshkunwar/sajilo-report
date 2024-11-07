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
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Loved by data-driven teams
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Join hundreds of professionals who've simplified their reporting
            workflow
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gray-50 p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4 flex">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <blockquote className="mb-6 text-gray-700">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mr-4 h-12 w-12 rounded-full"
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
          <p className="mb-6 text-gray-600">
            Join these satisfied users and streamline your reporting today
          </p>
          <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
