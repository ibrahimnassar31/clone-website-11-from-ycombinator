import React from 'react';

const CommitmentsSection = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col items-center gap-9 text-center lg:items-start lg:text-left">
            <h2 className="text-4xl font-semibold text-text-dark leading-tight">
              Our mission reflects our
              <br />
              strong shared commitments
            </h2>
            <a
              href="https://www.transcurebioservices.com/ethics-quality/"
              className="inline-block rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-colors hover:bg-purple-deep focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              See our ethic &amp; quality policy
            </a>
          </div>
          <div className="flex flex-col items-center gap-5 lg:items-end">
            <div className="rounded-full bg-purple-gradient-light px-7 py-3">
              <p className="font-medium text-lg text-primary">
                Animal welfare excellence
              </p>
            </div>
            <div className="rounded-full bg-[#FBEFF6] px-7 py-3">
              <p className="font-medium text-lg text-pink-accent">
                AAALAC accredited
              </p>
            </div>
            <div className="rounded-full bg-[#EEF4FD] px-7 py-3">
              <p className="font-medium text-lg text-blue-accent">
                Quality driven
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentsSection;