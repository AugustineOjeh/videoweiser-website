"use client";
import { useState } from "react";
import { PrimaryButton, TextButton, TextComponent } from "../ui";
import { Glow, Section } from "../visuals";
import { FrequentlyAskedQuestions } from "@/core/constants/FAQs";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

export function FAQSection() {
  return (

    < Section withGrid={false} className="py-[96px]">
      {/* Main Section Container */}
      <Glow glowIntensity="low" glowSize={100}>

        <div className="max-w-6xl mx-auto flex bg-[var(--background)] border-border border-[1px] rounded-[32px] px-[48px] py-[48px]">
          {/* This container holds the Texts (on the left —or top for mobile + tablets) 
                and the video cards on the right (or below for mobile + tablets) */}
          <div className="flex w-full gap-[140px] items-start justify-between">
            <div className="max-w-[320px]">
              <TextComponent.Headline.Medium
                text="Frequently asked questions" />
              <TextComponent.Body.Small
                className="my-6"
                text="Have more questions not covered here? Reach out to discuss more or have some fun browsing our works." />

              <div className="flex gap-4 mt-4">
                <PrimaryButton label="Contact us" href="#" />
                <TextButton label="See our works" href="#" />
              </div>
            </div>
            <div
              className="w-full" >
              <QuestionBox />
            </div>
          </div>
        </div>
      </Glow>
    </Section >

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
            className={`py-[24px] w-full border-border ${(i < (FrequentlyAskedQuestions.length - 1)) ? 'border-b-[1px]' : 'border-none'}`}
          >
            <button
              className="w-full flex justify-between items-center text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span>
                <TextComponent.Headline.Small
                  className="text-[20px]"
                  text={item.question}
                />
              </span>
              <span>{isOpen ? <IoRemoveOutline size={24} /> : <IoAddOutline size={24} />}</span>
            </button>
            {isOpen && (
              <div className="mt-[24px]">
                <TextComponent.Body.Small
                  text={item.answer}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}