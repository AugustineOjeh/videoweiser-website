"use client";
import { useState } from "react";
import { PrimaryButton, TextButton, TextComponent } from "../ui";
import { Glow, Section } from "../visuals";
import { FrequentlyAskedQuestions } from "@/core/constants/FAQs";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

export function FAQSection() {
  return (
    <Section
      id="faq"
      withGrid={false}
      className="py-12 lg:py-[96px]"
    >
      <Glow glowIntensity="low" glowSize={100}>
        <div
          className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-[var(--background)] border-border border-[1px] rounded-[24px] lg:rounded-[32px] px-6 py-8 md:px-12 md:py-12 items-center lg:items-start justify-between gap-10 lg:gap-[130px]"
        >
          <div
            className="w-full lg:max-w-[320px] text-center lg:text-left">
            <TextComponent.Headline.Medium
              text="Frequently asked questions" />

            <TextComponent.Body.Small
              className="my-6"
              text="Have more questions not covered here? Reach out to discuss more or have some fun browsing our works."
            />

            <div
              className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start w-full">
              <div
                className="w-full sm:w-auto">
                <PrimaryButton
                  label="Contact us"
                  href="#"
                  className="w-full sm:w-auto"
                />
              </div>
              <div
                className="w-full sm:w-auto">
                <TextButton
                  label="See our works"
                  href="/works"
                  className="w-full sm:w-auto justify-center"
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <QuestionBox />
          </div>
        </div>
      </Glow>
    </Section>
  );
}

export function QuestionBox() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      {FrequentlyAskedQuestions.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`w-full border-border ${i < FrequentlyAskedQuestions.length - 1
              ? "border-b-[1px]"
              : "border-none"
              }`}
          >
            <button
              // Adjusted vertical padding for touch targets
              className="w-full py-4 md:py-[24px] flex justify-between items-center space-x-4 md:space-x-[24px] text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="flex-1">
                <TextComponent.Headline.Small
                  // Responsive text size for the question
                  className="text-[18px] md:text-[20px]"
                  text={item.question}
                />
              </span>
              {/* Flex-shrink-0 prevents the icon from squishing on small screens */}
              <span className="flex-shrink-0">
                {isOpen ? (
                  <IoRemoveOutline size={24} />
                ) : (
                  <IoAddOutline size={24} />
                )}
              </span>
            </button>
            {isOpen && (
              <div className="mb-4 md:mb-[24px]">
                <TextComponent.Body.Small text={item.answer} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}