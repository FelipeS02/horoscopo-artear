import { FC, HTMLAttributes, ReactNode } from 'react';
import '@/styles/layout/signs-section.css';

const SignsSectionTitle: FC<{ children: ReactNode }> = ({ children }) => (
  <h2>{children}</h2>
);

const SignsSectionContent: FC<{ children: ReactNode }> = ({ children }) => (
  <div className='signs-section__content section-content'>{children}</div>
);

const SignsSection: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  className = '',
}) => {
  return (
    <section className={`signs-section__container ${className}`}>
      {children}
    </section>
  );
};

export { SignsSection, SignsSectionTitle, SignsSectionContent };
