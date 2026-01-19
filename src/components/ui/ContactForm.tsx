"use client";
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { IoCloseSharp } from 'react-icons/io5';
import Text from './Text';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const handleClose = () => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsAnimatingOut(false);
      onClose();
    }, 300); // Match animation duration
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  if (!isOpen && !isAnimatingOut) return null;

  return createPortal(
    <>
      {/* Backdrop overlay */}
      <div
        className="contact-form-backdrop"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 998,
          animation: isAnimatingOut ? 'fadeOut 0.3s ease-out forwards' : 'fadeIn 0.3s ease-out',
        }}
      />

      {/* Modal panel */}
      <div
        className="contact-form-panel rounded-3xl border border-border border-2"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '800px',
          backgroundColor: 'var(--background)',
          zIndex: 999,
          animation: isAnimatingOut ? 'scaleOut 0.3s ease-out forwards' : 'scaleIn 0.3s ease-out',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* Header with close button */}
        <div
          className='flex w-full p-4 items-center justify-between'
        >
          <Text.Headline.Medium text='Book a Meeting' />
          <button
            className='cursor-pointer hover:text-[var(--foreground)]'
            onClick={handleClose}
            style={{
              transition: 'color 0.2s ease',
            }}
            aria-label="Close modal"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--foreground)';
            }}
          >
            <IoCloseSharp size={40} />
          </button>
        </div>

        {/* Embedded calendar content */}
        <div
          className='p-4 rounded-2xl'
        >
          <iframe
            src="https://calendly.com/production-videoweiser/30min"
            className='border border-border border-2 rounded-2xl'
            style={{
              width: '100%',
              height: '900px',
              flex: 1,
            }}
            title="Apollo Meeting Scheduler"
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
    </>,
    document.body
  );
};

export default ContactFormModal;