import React from 'react'
import FAQItem from './ui/FAQItem'

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Is it free to join?",
      answer: "Yes, joining the platform is completely free for all open source maintainers. We believe in removing barriers to entry and helping maintainers get started without any upfront costs."
    },
    {
      question: "How is this different from GitHub Sponsors?",
      answer: "While GitHub Sponsors focuses on direct sponsorship, our platform creates a comprehensive ecosystem with project discovery, collaborative features, quest-based funding, and community-driven prioritization that helps maintainers build sustainable businesses."
    },
    {
      question: "Is my project too small?",
      answer: "Not at all! Projects of all sizes are welcome. Whether you're just starting out or managing a large-scale project, our platform provides tools and opportunities to help you grow and connect with the right supporters and collaborators."
    },
    {
      question: "Do I need a big community already?",
      answer: "No, you don't need an existing large community. Our platform helps you build and grow your community organically by connecting you with users who value your work and want to support your project's development."
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
