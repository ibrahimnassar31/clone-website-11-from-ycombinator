import { ChevronRight } from 'lucide-react';

type DiseaseModel = {
  name: string;
  href: string;
};

type DiseaseCategory = {
  title: string;
  description: string;
  models: DiseaseModel[];
};

const categories: DiseaseCategory[] = [
  {
    title: 'Oncology',
    description:
      'Assess your lead candidate efficacy targeting cancer cells and or the immune system. We provide a large range of validated mouse and human tumor models.',
    models: [
      { name: 'Human CDX', href: 'https://www.transcurebioservices.com/disease-models/human-cdx/' },
      { name: 'Human PDX', href: 'https://www.transcurebioservices.com/disease-models/human-pdx/' },
      {
        name: 'Syngeneic Tumor Mouse Models',
        href: 'https://www.transcurebioservices.com/disease-models/mouse-tumor/',
      },
    ],
  },
  {
    title: 'Inflammation',
    description:
      'Assess your lead candidate efficacy in validated inflammatory disease models involving either the mouse or the human immune system.',
    models: [
      { name: 'IBD', href: 'https://www.transcurebioservices.com/disease-models/ibd/' },
      { name: 'MASH', href: 'https://www.transcurebioservices.com/disease-models/mash/' },
      { name: 'GvHD', href: 'https://www.transcurebioservices.com/disease-models/dev-disease-model-4/' },
      {
        name: 'Lung inflammation',
        href: 'https://www.transcurebioservices.com/disease-models/lung-inflammation/',
      },
    ],
  },
  {
    title: 'Infectious Disease and Toxicity',
    description:
      'Assess your lead candidate efficacy in validated infectious disease models triggered by human tropic viruses or screen for Immuno/hepato toxicity.',
    models: [
      { name: 'HIV', href: 'https://www.transcurebioservices.com/disease-models/hiv/' },
      { name: 'HBV', href: 'https://www.transcurebioservices.com/disease-models/hbv/' },
      {
        name: 'Hepatotoxicity',
        href: 'https://www.transcurebioservices.com/disease-models/hepato-toxicity/',
      },
      {
        name: 'Immunotoxicity',
        href: 'https://www.transcurebioservices.com/disease-models/immuno-toxicity/',
      },
    ],
  },
];

const DiseaseModelCard = ({ title, description, models }: DiseaseCategory) => (
  <div className="flex h-full flex-col rounded-3xl bg-card p-8 shadow-lg">
    <h3 className="mb-4 text-[28px] font-semibold leading-[1.3] text-text-dark">{title}</h3>
    <p className="mb-8 text-lg leading-[1.6] text-text-medium">{description}</p>
    <ul className="flex flex-col space-y-4">
      {models.map((model) => (
        <li key={model.name}>
          <a
            href={model.href}
            className="group flex items-center justify-between rounded-xl border border-border p-4 text-left transition-colors hover:bg-accent"
          >
            <span className="font-medium text-text-dark">{model.name}</span>
            <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const DiseaseModelsSection = () => {
  return (
    <section className="bg-gradient-to-b from-secondary to-background py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <DiseaseModelCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiseaseModelsSection;