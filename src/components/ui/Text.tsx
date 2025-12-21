
import React from 'react';

interface TextProps {
  text: string;
  className?: string;
}

// Headline variants
const Title: React.FC<TextProps> = ({ text, className }) => (
  <h1 className={`text-h1 whitespace-pre-line ${className}`} >
    {text}
  </h1 >
);

const HeadlineLarge: React.FC<TextProps> = ({ text, className }) => (
  <h2 className={`text-h2 whitespace-pre-line ${className}`} >
    {text}
  </h2 >
);

const HeadlineMedium: React.FC<TextProps> = ({ text, className }) => (
  <h2 className={`text-h3 whitespace-pre-line ${className}`} >
    {text}
  </h2 >
);

const HeadlineSmall: React.FC<TextProps> = ({ text, className }) => (
  <h4 className={`text-h4 ${className}`} >
    {text}
  </h4 >
);

const HeadlineXSmall: React.FC<TextProps> = ({ text, className }) => (
  <h2 className={`text-h5 whitespace-pre-line ${className}`} >
    {text}
  </h2 >
);

// Body variants
const BodyLarge: React.FC<TextProps> = ({ text, className }) => (
  <p className={`text-xlarge whitespace-pre-line ${className}`} >
    {text}
  </p >
);

const BodyMedium: React.FC<TextProps> = ({ text, className }) => (
  <p className={`text-large whitespace-pre-line ${className}`} >
    {text}
  </p >
);

const BodySmall: React.FC<TextProps> = ({ text, className }) => (
  <p className={`text-medium whitespace-pre-line ${className}`} >
    {text}
  </p >

);

const LabelMedium: React.FC<TextProps> = ({ text, className }) => (
  <p className={`text-small whitespace-pre-line ${className}`} >
    {text}
  </p >

);

const LabelSmall: React.FC<TextProps> = ({ text, className }) => (
  <p className={`text-xsmall whitespace-pre-line ${className}`} >
    {text}
  </p >

);

// Flutter-style nested structure
export const Text = {
  Title: Title,
  Headline: {
    Large: HeadlineLarge,
    Medium: HeadlineMedium,
    Small: HeadlineSmall,
    XSmall: HeadlineXSmall,
  },
  Body: {
    Large: BodyLarge,
    Medium: BodyMedium,
    Small: BodySmall,
  },
  Label: {
    Medium: LabelMedium,
    Small: LabelSmall,
  },
};

export default Text;