import Image from "next/image";

const TeamSection = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <div className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a531b2d-30ca-4559-903c-a3d07f77e281-transcurebioservices-com/assets/images/3428bac7-ce30-402d-bc3b-bc8f2343893f-96290705-71f7-4d59-b167-f2289f71fa26-scientist-1920x0-c-default-1920x0-c-default-1.webp?"
              alt="A female scientist in a white lab coat smiling in a laboratory"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="font-semibold text-[40px] leading-[1.2] mb-6">
              Meet your humanized research team: Dedicated to your success
            </h2>
            <p className="text-lg leading-[1.6] opacity-90 mb-6">
              Human values are essential to the cultivation of all innovations. Our advanced mouse models would not yield such relevant results without the investment and expertise of our team.
            </p>
            <p className="text-lg leading-[1.6] opacity-90 mb-8">
              Our 70 collaborators all believe that partnership, exchange and collaboration drive forward the causes that matter. Together, in our diversity, we bring expertise, passion, and a commitment to making a difference, driving solutions that truly matter.
            </p>
            <p className="text-lg font-semibold">
              Large enough to serve, small enough to care!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;