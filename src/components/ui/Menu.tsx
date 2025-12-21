"use client";

import React, { useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import Link from 'next/link';
import { TextComponent } from '.';

interface MenuItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  menuItems,
}) => {
  // Prevent body scroll when menu is open
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
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="mobile-menu-backdrop"
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 998,
          animation: 'fadeIn 0.3s ease-out',
        }}
      />

      {/* Menu panel */}
      <div
        className="mobile-menu-panel"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '85%',
          maxWidth: '400px',
          backgroundColor: 'var(--background)',
          zIndex: 999,
          boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.2)',
          animation: 'slideInRight 0.3s ease-out',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header with close button */}
        <div
          style={{
            padding: '24px',
            paddingBottom: '0px',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--foreground)',
              transition: 'background 0.2s ease',
            }}
            aria-label="Close menu"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--foreground)';
            }}
          >
            <IoCloseSharp size={54} />
          </button>
        </div>

        {/* Menu items */}
        <nav
          style={{
            flex: 1,
            overflowY: 'auto',
            paddingTop: '0px',
            padding: '24px',
          }}
        >
          <ul
            style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  style={{
                    display: 'block',
                    padding: '32px',
                    textDecoration: 'none',
                    color: 'var(--foreground)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--foreground)';
                  }}
                >
                  <TextComponent.Headline.Medium
                    text={item.label}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;