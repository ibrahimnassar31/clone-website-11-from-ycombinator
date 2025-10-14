import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PublicationsSection = () => {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="container">
        <div className="mb-12 flex flex-col items-start justify-between gap-y-6 md:flex-row md:items-center">
          <h2 className="text-4xl font-semibold leading-[1.2] text-foreground">
            Our latest scientific
            <br />
            publications and studies
          </h2>
          <Button
            asChild
            size="lg"
            className="h-auto shrink-0 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            <Link href="/scientific-publications">See all scientific publications</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Link
            href="/scientific-publications/pi3k-mtor-inhibition-induces-tumour-microenvironment-remodelling-and-sensitises-ps6high-uterine-leiomyosarcoma-to-pd-1-blockade-5/"
            className="group relative col-span-1 block min-h-[520px] overflow-hidden rounded-3xl lg:col-span-2"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a531b2d-30ca-4559-903c-a3d07f77e281-transcurebioservices-com/assets/images/a4317bfb-8328-4de2-9443-117e36987b25-hero-archive2x-1920x0-c-default.webp"
              alt="Background image for scientific publication on PI3K/mTOR inhibition"
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6D28D9] via-[#6D28D9]/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <div className="rounded-2xl bg-card p-8">
                <p className="mb-4 text-sm font-medium text-destructive">
                  Scientific publication
                </p>
                <h3 className="mb-6 text-[28px] font-semibold leading-[1.3] text-foreground">
                  PI3K/mTOR inhibition induces tumour microenvironment remodelling and sensitises pS6high uterine leiomyosarcoma to PD-1 blockade
                </h3>
                <div className="inline-flex items-center gap-2 font-medium text-primary transition-colors group-hover:text-primary/80">
                  Lire la suite
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </Link>

          <div className="col-span-1 flex flex-col gap-6">
            <Link
              href="/scientific-publications/poster-an-efficient-pre-clinical-mouse-model-to-evaluate-immune-targeted-therapies-in-cancer-research/"
              className="group flex h-full flex-col rounded-2xl border border-accent bg-card p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Badge variant="outline" className="border-primary/20 bg-accent/50 text-sm font-medium text-primary">
                  Poster
                </Badge>
                <span className="text-sm text-muted-foreground">03/11/2024</span>
              </div>
              <p className="mb-4 flex-grow text-lg font-medium text-foreground">
                POSTER: An efficient pre-clinical mouse model to evaluate immune targeted therapies in cancer research
              </p>
              <div className="flex justify-end">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>

            <Link
              href="/scientific-publications/poster-characterizing-growth-and-tissue-infiltration-of-luciferase-expressing-aml-cell-lines/"
              className="group flex h-full flex-col rounded-2xl border border-accent bg-card p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Badge variant="outline" className="border-primary/20 bg-accent/50 text-sm font-medium text-primary">
                  Poster
                </Badge>
                <span className="text-sm text-muted-foreground">03/01/2025</span>
              </div>
              <p className="mb-4 flex-grow text-lg font-medium text-foreground">
                POSTER: Characterizing Growth and Tissue Infiltration of Luciferase-Expressing AML Cell Lines
              </p>
              <div className="flex justify-end">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;