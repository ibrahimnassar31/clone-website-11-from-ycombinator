import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CtaSection = () => {
  const backgroundImageUrl = 'https://www.transcurebioservices.com/wp-content/uploads/2025/09/6096d98c-d433-4edb-bad5-59ec3bd53c92-ADV06012-1920x0-c-default.webp';
  const scientistImageUrl = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a531b2d-30ca-4559-903c-a3d07f77e281-transcurebioservices-com/assets/images/3428bac7-ce30-402d-bc3b-bc8f2343893f-96290705-71f7-4d59-b167-f2289f71fa26-scientist-1920x0-c-default-600x0-c-default-5.webp?';

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-3xl bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply rounded-3xl" aria-hidden="true" />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8 sm:p-12 md:p-16 lg:p-24">
            <div className="text-primary-foreground max-w-lg">
              <h2 className="text-[2.5rem] font-semibold leading-[1.2]">
                Accelerate your preclinical research with confidence. Together, we transform research into results.
              </h2>
            </div>
            
            <div className="flex justify-center md:justify-end">
              <Card className="w-full max-w-sm text-center shadow-lg rounded-2xl border-0">
                <CardContent className="p-8 flex flex-col items-center">
                  <Image
                    src={scientistImageUrl}
                    alt="A friendly scientist from TransCure bioServices"
                    width={96}
                    height={96}
                    className="rounded-full object-cover mb-6"
                  />
                  <h3 className="text-[1.75rem] font-semibold text-text-dark leading-[1.3] mb-2">
                    Have a question?
                  </h3>
                  <p className="text-lg text-text-medium mb-6">
                    Our experts are ready to assist you. Get in touch, and we’ll get back to you shortly.
                  </p>
                  <Button asChild size="lg" className="rounded-lg px-8 h-auto py-3">
                    <Link href="/contact" className="font-medium text-base">
                      Contact
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;