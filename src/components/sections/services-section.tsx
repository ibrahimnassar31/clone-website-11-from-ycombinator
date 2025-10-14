import Image from "next/image";
import { Settings } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a531b2d-30ca-4559-903c-a3d07f77e281-transcurebioservices-com/assets/svgs/d6cab60a-a73b-4160-9e34-8502114a2659-Designsanstitre-1.svg?"
          alt="Expertise icon"
          width={64}
          height={64}
          className="h-16 w-16"
        />
      ),
      title: "Expertise",
      description: "With our 12 years of experience in preclinical studies on various advanced mouse models, we have the perspective, knowledge, and technical expertise necessary to provide high-quality support tailored to your expectations.",
    },
    {
      icon: (
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a531b2d-30ca-4559-903c-a3d07f77e281-transcurebioservices-com/assets/svgs/03810611-b0f0-4f75-8c07-6e558467e74a-Designsanstitre1-2.svg?"
          alt="Flexibility icon"
          width={64}
          height={64}
          className="h-16 w-16"
        />
      ),
      title: "Flexibility",
      description: "To maximize the output of your preclinical studies, we offer unparalleled flexibility in adapting your study protocol based on real-time data insights.",
    },
    {
      icon: <Settings className="h-16 w-16 text-primary" strokeWidth={1.5} />,
      title: "Transparency",
      description: "Transparency is at the core of our approach, ensuring open communication, clear processes, and trust at every step of your project.",
    },
  ];

  return (
    <section className="bg-secondary py-20 lg:py-[120px]">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-16">
            Supporting your research with solutions tailored to your needs
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-3xl bg-white p-8 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-1px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;