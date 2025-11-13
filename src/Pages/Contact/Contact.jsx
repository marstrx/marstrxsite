import React ,{useState} from "react";

function Contact() {
const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Your message has been sent. Thank you!");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <div className="bg-gray-700 text-white min-h-screen py-8 px-3 sm:px-5 lg:px-7">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:mb-2 mb-4 sm:mb-2">
          <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold pt-4 md:pt-6 text-center">
            Get in touch
          </h1>
          <p className="mt-2 text-base text-white max-w-xs mx-auto sm:text-xl sm:max-w-2xl sm:mt-4">
            Let's build something amazing together
          </p>
        </div>

        {/* Form */}
        <div className="max-w-sm mx-auto rounded-xl p-3 sm:max-w-2xl sm:p-6 md:p-8 lg:p-12">
          <form className="space-y-2 sm:space-y-4" onSubmit={onSubmit}>
            {/* First Name */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold mb-1"
              >
                First Name
              </label>
              <input
                name="name"
                type="text"
                id="first-name"
                className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold text-white  mb-1"
              >
                Last Name
              </label>
              <input
                name="name"
                type="text"
                id="last-name"
                className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white mb-1"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label 
                htmlFor="message"
                className="block text-sm font-semibold text-white mb-1"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={3}
                className="w-full px-2 py-2 text-sm border border-gray-300 rounded-md focus:ring-2 resize-none sm:rows-6"
                required
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-700 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-orange-700 focus:ring-2 focus:bg-orange-800 sm:text-lg"
            >
              Send Message
            </button>
            <span>{result}</span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;