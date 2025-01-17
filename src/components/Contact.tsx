"use client"

import { useState } from 'react';

const messageStyles = {
  default: 'text-white',
  success: 'text-green-400',
  error: 'text-red-400'
} as const;

type MessageStatus = keyof typeof messageStyles | '';

const initialFormData = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [resultSubmitMessage, setResultSubmitMessage] = useState("");
  const [resultSubmitSuccess, setResultSubmitSuccess] = useState<MessageStatus>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setResultSubmitMessage("Sending email...");

    try {
      const formTarget = e.target as HTMLFormElement;
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "!!!Portfolio Contact from " + formData.email,
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });

      const result = await response.json();

      if (result.success) {
        setResultSubmitMessage("Form Submitted Successfully");
        setResultSubmitSuccess('success');
        setFormData(initialFormData);
        formTarget.reset();
      } else {
        console.error("Error", result);
        setResultSubmitMessage(result.message);
        setResultSubmitSuccess('error');
      }
    } catch (error) {
      console.error("Error:", error);
      setResultSubmitMessage("An error occurred. Please try again.");
      setResultSubmitSuccess('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setResultSubmitMessage('');
        setResultSubmitSuccess('');
      }, 2000);
    }
  }

  return (
    <section id="contact" className="container min-h-screen px-6 py-20">
      <h1 className="mb-8 text-3xl font-bold text-white">Contact Me</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 text-gray-900 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {resultSubmitMessage && (
          <div className={`mt-4 text-center ${messageStyles[resultSubmitSuccess || 'default']}`}>
            {resultSubmitMessage}
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
