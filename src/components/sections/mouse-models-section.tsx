import Link from 'next/link';

const mouseModels = [
  {
    title: 'Human Immune System Mouse Model (CD34+)',
    description: 'Predict the efficacy and immunotoxicity of your lead candidate using a fully reconstituted human immune system.',
    href: '/mouse-models/cd34/',
  },
  {
    title: 'Humanized Liver Mouse Model',
    description: 'Evaluate the efficacy and hepatotoxicity of your lead candidate in a human liver setting.',
    href: '/mouse-models/humanized-liver-mouse/',
  },
  {
    title: 'Double Humanized Mouse Model',
    description: 'Combining, in the same animal, a full human immune system and a humanized liver',
    href: '/mouse-models/double-humanized-mouse/',
  },
  {
    title: 'Conventional Mouse Model',
    description: 'Your standard immunodeficient and immunocompetent mouse model with our unrivaled expertise.',
    href: '/mouse-models/conventional-mouse-model/',
  },
];

export default function MouseModelsSection() {
  return (
    <section className="bg-[#6D28D9] py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="flex flex-col gap-y-6">
            <h2 className="font-semibold text-white text-[40px] leading-tight">
              Find the perfect humanized mouse model to advance your research
            </h2>
            <svg width="258" height="34" viewBox="0 0 258 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#E0E7FF]">
              <path d="M1.5 2C57 -16.5 159.5 53.5 256.5 29" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <p className="text-lg text-[#E0E7FF] leading-relaxed">
              Discover our validated mouse models, from conventional to cutting-edge double-humanized mice. Perfectly designed for predictive studies, they accelerate breakthroughs in oncology, infectious, and inflammatory diseases.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {mouseModels.map((model, index) => (
              <div key={index} className="bg-white p-8 rounded-[24px] flex flex-col shadow-lg h-full">
                <div className="flex-grow">
                  <h3 className="text-[1.75rem] leading-tight font-semibold text-[#1F2937] mb-4">
                    {model.title}
                  </h3>
                  <p className="text-lg text-[#6B7280] leading-relaxed">
                    {model.description}
                  </p>
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href={model.href}
                    className="inline-block bg-[#8B5CF6] text-white font-medium py-4 px-8 rounded-full hover:bg-[#6D28D9] transition-colors"
                  >
                    See the mouse model
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}