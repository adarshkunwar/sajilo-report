import { Mail, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formStatus, setFormStatus] = useState("");

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "Our friendly team is here to help.",
      contact: "hello@sajiloreport.com",
    },
    {
      icon: MessageSquare,
      title: "Messages",
      description: "Chat with our support team via messneger.",
      contact: "Available 24/7",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Mon-Fri from 8am to 5pm.",
      contact: "+977 9847543062 ",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Thank you! We'll get back to you soon.");
    // Reset form
    e.target.reset();
    // Clear status after 3 seconds
    setTimeout(() => setFormStatus(""), 3000);
  };

  return (
    <section id="contact" className="bg-white py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Get in touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We'd love to hear from you. Choose how you want to reach us or fill
            out the form below.
          </p>
        </div>

        {/* Contact Options */}
        <div className="mx-auto mb-16 grid max-w-5xl gap-8 md:grid-cols-3">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {info.title}
                </h3>
                <p className="mb-2 text-gray-600">{info.description}</p>
                <p className="font-medium text-blue-600">{info.contact}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 transition-colors duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
                >
                  Send message
                </button>
              </div>

              {formStatus && (
                <div className="animate-in fade-in text-center font-medium text-green-600">
                  {formStatus}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
