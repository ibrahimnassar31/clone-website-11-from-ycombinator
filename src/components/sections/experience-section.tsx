import React from 'react';

const ExperienceSection = () => {
  return (
    <section className="bg-secondary py-20 md:py-[120px]">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[40px] font-semibold leading-[1.2] text-text-dark mb-6">
            Benefits from our 12 years experience in validated mouse models
          </h2>
          <p className="text-lg leading-[1.6] text-text-medium mb-8">
            Being at the forefront of our industry, we are committed to renewal and innovation. Together with our collaborators, we challenge the market with new preclinical models in humanized and standard mice that are increasingly predictive.
          </p>
          <p className="text-lg font-semibold leading-[1.6] text-text-dark">
            Our experienced R&D team loves new challenges!{' '}
            <a href="https://www.transcurebioservices.com/contact/" className="text-blue-accent hover:underline">
              Contact us to discuss your needs.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;