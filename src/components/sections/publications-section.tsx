'use client'
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Search, Filter, Calendar, User, FileText, BookOpen, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

gsap.registerPlugin(ScrollTrigger);

const PublicationsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); 

  const publications = [
    {
      id: 1,
      title: "PI3K/mTOR inhibition induces tumour microenvironment remodelling and sensitises pS6high uterine leiomyosarcoma to PD-1 blockade",
      type: "Scientific publication",
      date: "03/15/2024",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1168",
      excerpt: "Our research demonstrates how PI3K/mTOR inhibition can remodel the tumor microenvironment to enhance the effectiveness of PD-1 blockade in pS6high uterine leiomyosarcoma.",
      authors: "Dr. Sarah Johnson, Dr. Michael Chen, et al.",
      journal: "Nature Medicine",
      featured: true,
      citations: 42,
      downloads: 128
    },
    {
      id: 2,
      title: "POSTER: An efficient pre-clinical mouse model to evaluate immune targeted therapies in cancer research",
      type: "Poster",
      date: "03/11/2024",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1168",
      excerpt: "We present a novel pre-clinical mouse model that provides more accurate predictions for immune-targeted therapies in cancer research.",
      authors: "Dr. Emily Rodriguez, Dr. James Wilson",
      conference: "AACR Annual Meeting 2024",
      citations: 12,
      downloads: 67
    },
    {
      id: 3,
      title: "POSTER: Characterizing Growth and Tissue Infiltration of Luciferase-Expressing AML Cell Lines",
      type: "Poster",
      date: "03/01/2025",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1168",
      excerpt: "Our study characterizes the growth patterns and tissue infiltration capabilities of luciferase-expressing AML cell lines in pre-clinical models.",
      authors: "Dr. Alex Thompson, Dr. Maria Garcia",
      conference: "ASCO Annual Meeting 2025",
      citations: 8,
      downloads: 45
    },
    {
      id: 4,
      title: "Novel biomarkers for predicting response to immunotherapy in solid tumors",
      type: "Scientific publication",
      date: "02/20/2024",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1168",
      excerpt: "We identified a panel of novel biomarkers that can predict patient response to various immunotherapy approaches in solid tumors.",
      authors: "Dr. Robert Lee, Dr. Jennifer Park, et al.",
      journal: "Cancer Immunology Research",
      citations: 35,
      downloads: 112
    },
    {
      id: 5,
      title: "CRISPR-based screening identifies new therapeutic targets in metastatic breast cancer",
      type: "Scientific publication",
      date: "01/15/2024",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1168",
      excerpt: "Using CRISPR-based screening, we identified several previously unknown therapeutic targets in metastatic breast cancer.",
      authors: "Dr. Lisa Wang, Dr. David Brown, et al.",
      journal: "Cell Reports",
      citations: 28,
      downloads: 95
    }
  ];

  const filters = [
    { id: 'all', label: 'All Publications', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'scientific', label: 'Scientific Publications', icon: <FileText className="h-4 w-4" /> },
    { id: 'poster', label: 'Posters', icon: <Award className="h-4 w-4" /> }
  ];

  const stats = [
    { value: 156, label: 'Total Publications', icon: <FileText className="h-5 w-5" /> },
    { value: 2840, label: 'Total Citations', icon: <TrendingUp className="h-5 w-5" /> },
    { value: 8920, label: 'Total Downloads', icon: <User className="h-5 w-5" /> }
  ];

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%"
        }
      }
    );

    gsap.fromTo(statsRef.current,
      {
        textContent: 0
      },
      {
        textContent: (index: number) => {
          if (index === 0) return 156;
          if (index === 1) return 2840;
          return 8920;
        },
        duration: 2,
        stagger: 0.3,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const filteredPublications = publications.filter(pub => {
    const matchesFilter = activeFilter === 'all' || 
      (activeFilter === 'scientific' && pub.type === 'Scientific publication') ||
      (activeFilter === 'poster' && pub.type === 'Poster');
    
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  const featuredPublication = filteredPublications.find(pub => pub.featured);
  const otherPublications = filteredPublications.filter(pub => !pub.featured);

  return (
    <section ref={sectionRef} className="relative bg-secondary py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-gradient-light opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-accent opacity-10 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-y-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-semibold leading-[1.2] text-foreground mb-4">
              Our latest scientific
              <br />
              publications and studies
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our cutting-edge research in preclinical studies, oncology, and immunotherapy. Our work is published in leading scientific journals and presented at major conferences worldwide.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-auto shrink-0 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            <Link href="/scientific-publications">See all scientific publications</Link>
          </Button>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-2xl bg-card p-6 shadow-sm border border-accent">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {stat.icon}
                </div>
                <div>
                  <div ref={(el) => { statsRef.current[index] = el; }} className="text-3xl font-bold text-foreground">
                    {stat.value.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-accent'
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-accent bg-card py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="mb-6 flex justify-end">
          <div className="inline-flex rounded-full border border-accent bg-card p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-foreground'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-foreground'
              }`}
            >
              List View
            </button>
          </div>
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {featuredPublication && (
              <Link
                href={`/scientific-publications/${featuredPublication.id}`}
                className="group relative col-span-1 block min-h-[520px] overflow-hidden rounded-3xl lg:col-span-2"
                ref={(el) => { cardsRef.current[0] = el; }}
              >
                <Image
                  src={featuredPublication.image || "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1168"}
                  alt={`Background image for ${featuredPublication.title}`}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6D28D9] via-[#6D28D9]/70 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-10">
                  <div className="rounded-2xl bg-card p-8">
                    <div className="mb-4 flex items-center gap-2">
                      <Badge variant="outline" className="border-primary/20 bg-accent/50 text-sm font-medium text-primary">
                        {featuredPublication.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {featuredPublication.date}
                      </span>
                    </div>
                    <h3 className="mb-4 text-[28px] font-semibold leading-[1.3] text-foreground">
                      {featuredPublication.title}
                    </h3>
                    <p className="mb-4 text-muted-foreground">{featuredPublication.excerpt}</p>
                    <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {featuredPublication.authors}
                      </span>
                      {featuredPublication.journal && (
                        <span className="flex items-center gap-1">
                          <FileText className="h-3 w-3" />
                          {featuredPublication.journal}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          {featuredPublication.citations} citations
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {featuredPublication.downloads} downloads
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-2 font-medium text-primary transition-colors group-hover:text-primary/80">
                        Read more
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )}

            <div className="col-span-1 flex flex-col gap-6">
              {otherPublications.slice(0, 2).map((publication, index) => (
                <Link
                  key={publication.id}
                  href={`/scientific-publications/${publication.id}`}
                  className="group flex h-full flex-col rounded-2xl border border-accent bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  ref={(el) => { cardsRef.current[index + 1] = el; }}
                >
                  <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <Badge variant="outline" className="border-primary/20 bg-accent/50 text-sm font-medium text-primary">
                      {publication.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {publication.date}
                    </span>
                  </div>
                  <p className="mb-4 flex-grow text-lg font-medium text-foreground">
                    {publication.title}
                  </p>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                    {publication.excerpt}
                  </p>
                  <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-3 w-3" />
                    {publication.authors}
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {publication.citations}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {publication.downloads}
                      </span>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-primary transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredPublications.map((publication, index) => (
              <Link
                key={publication.id}
                href={`/scientific-publications/${publication.id}`}
                className="group flex flex-col rounded-2xl border border-accent bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg md:flex-row"
                ref={(el) => { cardsRef.current[index] = el; }}
              >
                <div className="mb-4 h-48 w-full overflow-hidden rounded-xl md:mb-0 md:h-auto md:w-48 md:shrink-0">
                  <Image
                    src={publication.image || "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a531b2d-30ca-4559-903c-a3d07f77e281-transcurebioservices-com/assets/images/a4317bfb-8328-4de2-9443-117e36987b25-hero-archive2x-1920x0-c-default.webp"}
                    alt={`Image for ${publication.title}`}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between px-0 md:px-6">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className="border-primary/20 bg-accent/50 text-sm font-medium text-primary">
                        {publication.type}
                      </Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {publication.date}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-foreground">
                      {publication.title}
                    </h3>
                    <p className="mb-3 text-muted-foreground line-clamp-2">
                      {publication.excerpt}
                    </p>
                    <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      {publication.authors}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {publication.citations} citations
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {publication.downloads} downloads
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-2 font-medium text-primary transition-colors group-hover:text-primary/80">
                      Read more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="h-auto rounded-full px-8 py-4 font-medium transition-all hover:scale-105"
          >
            Load more publications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;