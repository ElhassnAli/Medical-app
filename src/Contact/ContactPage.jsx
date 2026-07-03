import { useState } from "react";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage(
        "Please add your EmailJS credentials to the .env.local file.",
      );
      setIsSubmitted(false);
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.message,
      to_email: "elhassnali4@gmail.com",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setIsSubmitted(true);
        setErrorMessage("");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => {
        setIsSubmitted(false);
        setErrorMessage(
          "Failed to send the message. Please check your EmailJS setup.",
        );
      });
  };

  return (
    <section className="w-full py-4 sm:py-6 lg:py-8">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-4xl bg-linear-to-br from-teal-700 via-cyan-700 to-sky-800 p-6 text-white shadow-2xl shadow-cyan-900/20 sm:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100">
            Contact us
          </p>
          <h3 className="mt-3 text-3xl font-semibold sm:text-4xl">
            We’re here to help you anytime
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-cyan-50/90 sm:text-base">
            Whether you need product support, want to ask about our services, or
            just want to say hello, our team is ready to assist you quickly and
            professionally.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <FaPhone className="text-cyan-200" />
                <span className="font-medium">Phone</span>
              </div>
              <p className="mt-2 text-sm text-cyan-50/90">+20 101 295 4398</p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-200" />
                <span className="font-medium">Email</span>
              </div>
              <p className="mt-2 text-sm text-cyan-50/90">
                elhassnali4@gmail.com
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur sm:col-span-2">
              <div className="flex items-center gap-3">
                <FaLocationDot className="text-cyan-200" />
                <span className="font-medium">Address</span>
              </div>
              <p className="mt-2 text-sm text-cyan-50/90">
                Egypt • We are happy to help you from anywhere
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/+2001097203319?text=Hello%20Medical%20Store%2C%20I%20would%20like%20to%20contact%20you."
              target="_blank"
              rel="noreferrer nofollow"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 font-medium text-white transition hover:bg-emerald-600"
              title="Go to Whatsapp"
            >
              <FaWhatsapp />
              Contact on WhatsApp
            </a>
            <a
              rel="noreferrer nofollow"
              target="_blank"
              href="mailto:elhassnali4@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 font-medium text-white transition hover:bg-white/20"
              title="Go to Email"
            >
              <FaEnvelope />
              Send an email
            </a>
          </div>
        </div>

        <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-800">
            Send us a message
          </h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Fill out the form below and we’ll get back to you as soon as
            possible.
          </p>

          {isSubmitted && (
            <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              Your message has been sent successfully. Thank you for contacting
              us.
            </div>
          )}

          {errorMessage && (
            <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {errorMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
                required
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-cyan-500 focus:bg-white"
              required
            />

            <button
              type="submit"
              className="w-full rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
