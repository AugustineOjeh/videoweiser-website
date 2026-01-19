"use client";
import { useState } from 'react';
import { PrimaryButton } from "./Button";
import ContactFormModal from './ContactForm';

interface ButtonProps {
  className?: string
}

export default function ContactUsButton({ className }: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <PrimaryButton
        label="Contact Us"
        className={className}
        onClick={() => setIsOpen(true)}
      />
      <ContactFormModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}