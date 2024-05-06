"use client";
import React from "react";
import { appContent, gradientText } from "../variants";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useTheme } from "next-themes";

const FAQ = () => {
  const theme = useTheme();
  return (
    <div className={`${theme.theme === "light" ? " bg-bgColor" : ""} mb-16`}>
      <div className="max-w-[1200px] mx-auto text-center">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-raleway text-foreground-primary/90 font-semibold mb-1">
            GET TO KNOW US
          </h2>
          <div
            className={gradientText({
              class: "w-[80px] mx-auto h-1 rounded-full",
            })}
          ></div>
        </div>
        <p className="text-4xl leading-[50px] md: leading-0 md:text-5xl mb-12">
          Frequently Asked Questions
        </p>
        <div className="md:grid grid-cols-2 text-start">
          <Accordion variant="splitted">
            {FAQDATALEFT.map((item) => {
              return (
                <AccordionItem
                  key={item.id}
                  aria-label={item.question}
                  title={item.question}
                  className="border border-primary mb-4 px-5 rounded-xl "
                >
                  <p className="text-[#8a8a8a]">{item.ans}</p>
                </AccordionItem>
              );
            })}
          </Accordion>
          <Accordion variant="splitted" className="px-2">
            {FAQRIGHT.map((item) => {
              return (
                <AccordionItem
                  key={item.id}
                  aria-label={item.question}
                  title={item.question}
                  className="border border-primary mb-4 px-5  rounded-xl "
                >
                  <p className="text-[#8a8a8a]">{item.ans}</p>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const FAQDATALEFT = [
  {
    id: 1,
    question: "Do i need sign a contract?",
    ans: "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions.After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.",
  },
  {
    id: 2,
    question: "How do we ensure quality of deliverables?",
    ans: "We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.",
  },
  {
    id: 3,
    question: "How do i begin collaboration",
    ans: `Please contact us at solutions@lenscorp.ai. We usually respond within 24 Hrs.`,
  },
];

const FAQRIGHT = [
  {
    id: 4,
    question: "What sevices do we offer?",
    ans: "We build accurate and efficient AI systems for your business. Our ethically-trained solutions are paving a new path forward to create explainable, transparent, and easily customizable. In addition, we grant ownership of all copyrights to the system, software, and model to you.",
  },
  {
    id: 5,
    question: "How do you ensure user privacy",
    ans: "We do not share, sell, or rent your competitive information (including any and all data) to any third party.Since we grant exclusive Intellectual Property Rights back to you, we have no intention of violating any user privacy.",
  },
  {
    id: 6,
    question: "How can i pay for the services?",
    ans: "We split the entire project into multiple milestones.We work on an advanced milestone payment basis with an option to drop off remaining milestones anytime.",
  },
];
