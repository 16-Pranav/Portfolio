import React, { useState } from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async(e) =>{
    e.preventDefault();
    setResult("Thank you for your message! I'll get back to you soon.");
    // Here you can add your form submission logic, like sending the data to an API or email service.

    const formData = new FormData(e.target);

    // You can send the formData to your API or email service here

    formData.append("access_key", "2e8940a8-cf15-407c-8830-dd58305d81b2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (response.success) {
      setResult("Message Sent Successfully!");
      e.target.reset(); // Reset the form fields
    } else {
      console.log("Error", response);
      setResult(response.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4" id="contact">
      <h1 className="text-5xl font-bold text-center">Get in touch!</h1>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-10 mb-10">
        {/* Social Media and Other Networks related Stuff. */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-semibold">Let's Start a Conversation</h1>
          <p className="text-md mt-2 text-justify pr-0 md:pr-9">
            I'm always interested in hearing about new opportunities, creative
            projects, and innovative ideas. Whether you're looking for a
            developer, have a question, or just want to say hello, I'd love to
            hear from you.
          </p>

          <p className="mt-4">Bangalore, India</p>
          <p>Available for In-Office, Hybrid and Remote Work</p>

          {/* Fixed grid structure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-3 border rounded-lg pt-4 pb-4 pl-2 transition-colors">
              <Mail className="text-2xl text-blue-600 min-w-[24px]" />
              <div>
                <h2 className="font-medium">Email</h2>
                <a
                  className="text-sm text-gray-600 whitespace-nowrap"
                  href="mailto:16pranavbhat.official@gmail.com"
                >
                  16pranavbhat.official@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 border rounded-lg p-3 transition-colors">
              <Linkedin className="text-2xl text-blue-600 min-w-[24px]" />
              <div>
                <h2 className="font-medium">LinkedIn</h2>
                <a
                  className="text-sm text-gray-600"
                  href="https://linkedin.com/in/pranav-bhat-9b44bb176"
                >
                  Visit my LinkedIn Profile!
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 border rounded-lg p-3 transition-colors">
              <Github className="text-2xl  min-w-[24px]" />
              <div>
                <h2 className="font-medium">GitHub</h2>
                <a
                  className="text-sm text-gray-600"
                  href="https://github.com/16-pranav"
                >
                  Visit my GitHub Profile!
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 border rounded-lg p-3 transition-colors">
              <Phone className="text-2xl text-green-600 min-w-[24px]" />
              <div>
                <h2 className="font-medium">Phone</h2>
                <a className="text-sm text-gray-600" href="tel:+91 70198 67202">
                  Ping me on What'sApp!
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Message Box */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h1 className="text-3xl mb-4 font-semibold pl-2">Send me a message!</h1>

          {/* Form to send me a Message */}
          <form onSubmit={onSubmit} method="post" className="border border-gray-500 p-4 rounded-2xl">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-5">
                <div>
                  <p className="text-md text-white mb-2 pl-2">Name</p>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    className="border border-gray-500 rounded-md w-full p-3"
                  />
                </div>

                <div>
                  <p className="text-md text-white mb-2 pl-2">Phone Number</p>
                  <input
                    type="tel"
                    name="Phone"
                    placeholder="Phone Number"
                    className="border border-gray-500 rounded-md w-full p-3"
                  />
                </div>
              </div>

              <div>
                <p className="text-md text-white mb-2 pl-2">Email</p>
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  className="border border-gray-500 rounded-md w-full p-3"
                />
              </div>
              <div>
                <p className="text-md text-white mb-2 pl-2">Subject</p>
                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  className="border border-gray-500 rounded-md w-full p-3"
                />
              </div>

              <div>
                <p className="text-md text-white mb-2 pl-2">Message</p>
                <textarea
                  rows="4"
                  name="Message"
                  placeholder="Drop in your thoughts, share your ideas or want to work with me? Or just say Hello! :)"
                  className="border border-gray-500 rounded-md w-full p-3"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors self-end"
              >
                Send Message
              </button>
            </div>
          </form>

          <span className="mt-4 block text-center">{result}</span>

        </div>
      </div>
    </div>
  );
};

export default Contact;
