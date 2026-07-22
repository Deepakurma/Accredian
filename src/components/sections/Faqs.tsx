"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqCategories } from "@/data/site";

type FaqsProps = {
  onEnquire: () => void;
};

export function Faqs({ onEnquire }: FaqsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [showAnswer, setShowAnswer] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-12" id="faqs">
      <div className="mx-auto max-w-7xl">
        <div className="text-left">
          <h2 className="text-xl sm:text-2xl font-semibold leading-tight text-text-primary md:text-4xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>
        <div className="mt-10 md:mt-16 grid gap-10 md:grid-cols-3 md:gap-16">
          <div className="flex gap-4 overflow-x-auto pb-3 md:block md:space-y-5 md:overflow-visible md:pb-0">
            {faqCategories.map((category, index) => (
              <button
                className={`h-12 sm:h-14 min-w-40 cursor-pointer text-nowrap rounded-md border px-4 text-sm font-semibold shadow-md transition-all duration-300 hover:border-primary hover:text-primary hover:scale-[1.01] active:scale-[0.99] md:w-full md:text-base ${
                  index === activeTab
                    ? "border-primary bg-white text-primary shadow-sm shadow-primary/5"
                    : "border-border-strong bg-white text-text-muted"
                }`}
                onClick={() => setActiveTab(index)}
                key={category.title}
              >
                {category.title}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-6 pt-3 md:col-span-2">
            {faqCategories[activeTab].faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={`flex flex-col gap-4 border-l-2 pl-4 transition-all duration-300 ${
                  showAnswer === index
                    ? "border-primary bg-primary-muted/30"
                    : "border-transparent bg-transparent"
                }`}
              >
                <button
                  className={`flex cursor-pointer w-full items-center justify-between gap-4 text-left text-base font-semibold transition hover:text-primary ${index == showAnswer ? "text-primary" : "text-text-primary"}`}
                  key={faq.question}
                  onClick={() =>
                    setShowAnswer(showAnswer == index ? null : index)
                  }
                >
                  {faq.question}
                  <ChevronDown
                    className={`shrink-0 text-text-muted transition-transform duration-300 ${showAnswer == index ? "rotate-180" : null}`}
                    size={20}
                  />
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    showAnswer === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-2 text-text-secondary text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <button
            className="inline-flex cursor-pointer items-center justify-center rounded-md bg-primary px-7 py-4 text-base font-semibold leading-none text-white shadow-lg transition-all duration-300 hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl hover:shadow-primary/20"
            onClick={onEnquire}
            type="button"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
