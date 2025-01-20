// FAQ.jsx
import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What is an ICO?',
      answer: 'An ICO (Initial Coin Offering) is a fundraising method where new cryptocurrencies sell their underlying tokens in exchange for fiat or established cryptocurrencies.',
    },
    {
      question: 'How can I participate in the ICO?',
      answer: 'To participate, you need to create an account, connect your wallet, and purchase tokens using the supported cryptocurrencies.',
    },
    {
      question: 'What cryptocurrencies are accepted?',
      answer: 'We accept Ethereum (ETH), Bitcoin (BTC), and USDT as payment methods for purchasing tokens.',
    },
    {
      question: 'Is there a minimum purchase limit?',
      answer: 'Yes, the minimum purchase limit is 10 tokens per transaction.',
    },
    {
      question: 'What happens if the ICO does not reach its goal?',
      answer: 'If the ICO does not reach its funding goal, all contributions will be refunded to the participants.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-400 mt-4">
          Find answers to the most commonly asked questions about our ICO.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">{faq.question}</h3>
              <span className="text-blue-500 text-2xl">
                {openIndex === index ? '-' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-400 mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
