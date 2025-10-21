import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./animate-ui/components/radix/accordion";

interface FAQItemProps {
  question: string
  answer: string
  key: string | number
}

interface Props {
  faqs: FAQItemProps[]
}

const FAQ: React.FC<Props> = ({ faqs }) => {
  return (
    <Accordion type="multiple">
      {
        faqs.map((faq, index) => (
          <AccordionItem value={faq.key as string}>
            <AccordionTrigger className={`flex items-center justify-between h-auto no-underline! p-0`}>
              <div className="font-georgia font-semibold text-base flex items-center gap-2">
                <span>{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className={`AccordionContent`}>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))
      }

    </Accordion>
  )
}

export default FAQ
