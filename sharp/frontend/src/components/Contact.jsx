import Navbar from "./Navbar";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-red-50 text-black py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-lg">
            We’d love to hear from you! Contact us for inquiries, support, or
            feedback.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto mt-10 p-6 grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4" action="https://formspree.io/f/mdkoyrdl"
            method="POST">
            <div>
              <label htmlFor="name" className="block text-gray-600">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-2 rounded"
                required 
                  name="name"
                />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-2 rounded"
                required
                name="email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 p-2 rounded"
                required
                name="password" />
            </div>
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded shadow hover:bg-primary-dark"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Contact Information
          </h2>
          <p className="text-gray-600 mb-6">
            Reach out to us using the details below or visit our location.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <i className="ri-phone-line text-primary text-2xl mr-3"></i>
              <p className="text-gray-700">+91 9758105523</p>
            </div>
            <div className="flex items-center">
              <i className="ri-mail-line text-primary text-2xl mr-3"></i>
              <p className="text-gray-700">sharp_systemsksp@yahoo.co.in</p>
            </div>
            <div className="flex items-center">
              <i className="ri-map-pin-line text-primary text-2xl mr-3"></i>
              <p className="text-gray-700">
                Opp. Roadways Bus Stand , Patel Nagar Chowk Kashipur
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="container mx-auto mt-10 p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Our Location
        </h2>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.4778716244537!2d78.96162027531157!3d29.209495275354666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a43b19e9cb4a1%3A0x7c12619a8bb753ce!2sHP%20World!5e0!3m2!1sen!2sin!4v1732474699033!5m2!1sen!2sin"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
