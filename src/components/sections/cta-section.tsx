'use client'
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Mail, Phone, MessageSquare, Calendar, CheckCircle, ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const CtaSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const bgDecorationsRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [activeTab, setActiveTab] = useState('contact');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const backgroundImageUrl = 'https://www.transcurebioservices.com/wp-content/uploads/2025/09/6096d98c-d433-4edb-bad5-59ec3bd53c92-ADV06012-1920x0-c-default.webp';
  const scientistImageUrl = 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5a531b2d-30ca-4559-903c-a3d07f77e281-transcurebioservices-com/assets/images/3428bac7-ce30-402d-bc3b-bc8f2343893f-96290705-71f7-4d59-b167-f2289f71fa26-scientist-1920x0-c-default-600x0-c-default-5.webp?';

  const contactOptions = [
    {
      id: 'contact',
      title: 'Get in Touch',
      icon: <Mail className="h-5 w-5" />,
      description: 'Fill out our contact form and we\'ll respond within 24 hours.'
    },
    {
      id: 'consultation',
      title: 'Schedule a Consultation',
      icon: <Calendar className="h-5 w-5" />,
      description: 'Book a 30-minute consultation with one of our experts.'
    },
    {
      id: 'call',
      title: 'Request a Call Back',
      icon: <Phone className="h-5 w-5" />,
      description: 'Leave your number and we\'ll call you at your convenience.'
    }
  ];

  const stats = [
    { value: '500+', label: 'Completed Studies' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '12+', label: 'Years of Experience' }
  ];

  useEffect(() => {
    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    gsap.fromTo(bgDecorationsRef.current,
      {
        scale: 0.5,
        opacity: 0,
        rotation: 0
      },
      {
        scale: 1,
        opacity: 0.1,
        rotation: 360,
        duration: 2,
        stagger: 0.3,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "bottom 10%",
          scrub: 1
        }
      }
    );

    if (headingRef.current) {
      const headingChars = headingRef.current.querySelectorAll('.char');
      gsap.fromTo(headingChars,
        {
          y: 100,
          opacity: 0,
          rotationX: -90
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.02,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%"
          }
        }
      );

      const paragraph = headingRef.current.querySelector('p');
      if (paragraph) {
        gsap.fromTo(paragraph,
          {
            y: 30,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%"
            }
          }
        );
      }
    }

    statsRef.current.forEach((stat, index) => {
      if (stat) {
        const valueEl = stat.querySelector('.stat-value');
        if (valueEl) {
          const finalValue = valueEl.textContent;

          gsap.fromTo(stat,
            {
              y: 50,
              opacity: 0,
              scale: 0.8
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: stat,
                start: "top 85%"
              }
            }
          );

          gsap.fromTo(valueEl,
            {
              textContent: 0
            },
            {
              textContent: finalValue,
              duration: 2,
              delay: index * 0.2 + 0.5,
              ease: "power2.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: stat,
                start: "top 80%"
              }
            }
          );
        }
      }
    });

    gsap.fromTo(cardRef.current,
      {
        y: 100,
        opacity: 0,
        rotationY: -15,
        transformPerspective: 1000
      },
      {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%"
        }
      }
    );

    gsap.fromTo(buttonsRef.current,
      {
        scale: 0,
        opacity: 0,
        rotation: -180
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonsRef.current[0],
          start: "top 85%"
        }
      }
    );

    gsap.fromTo(cardsRef.current,
      {
        y: 80,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%"
        }
      }
    );

    gsap.to('.bg-image', {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: '.bg-image',
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    cardsRef.current.forEach(card => {
      if (card) {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -10,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(card, {
          rotationY: x * 0.01,
          rotationX: -y * 0.01,
          duration: 0.5,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    gsap.to('.form-container', {
      scale: 0.95,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
    ));
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div ref={el => { bgDecorationsRef.current[0] = el; }} className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-gradient-light opacity-10 blur-3xl"></div>
      <div ref={el => { bgDecorationsRef.current[1] = el; }} className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-blue-accent opacity-10 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div ref={headingRef} className="mb-12 text-center">
          <h2 className="text-4xl font-bold leading-[1.2] mb-4">
            {splitText("Accelerate your preclinical research with confidence")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Together, we transform research into results. Our team of experts is ready to help you achieve your scientific goals.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} ref={el => { statsRef.current[index] = el; }} className="stat-item text-center">
              <div className="stat-value text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div
          className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-image"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply rounded-3xl" aria-hidden="true" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 sm:p-12 md:p-16 lg:p-24">
            <div className="text-primary-foreground">
              <h3 className="text-[2.5rem] font-semibold leading-[1.2] mb-6">
                Ready to advance your research?
              </h3>
              <p className="text-lg text-black mb-8 max-w-lg">
                Our team of PhD-level scientists has extensive experience in preclinical studies across various therapeutic areas. Let's discuss how we can support your research goals.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button
                  ref={el => { buttonsRef.current[0] = el; }}
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-primary hover:bg-gray-100 overflow-hidden group"
                >
                  <Link href="/contact" className="font-medium relative z-10">
                    <span className="relative z-10 flex items-center">
                      Contact Us
                      <ChevronRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </Button>
                <Button
                  ref={el => { buttonsRef.current[1] = el; }}
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white text-white hover:bg-white hover:text-primary overflow-hidden group"
                >
                  <Link href="/services" className="font-medium relative z-10">
                    <span className="relative z-10">Our Services</span>
                    <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Card ref={cardRef} className="w-full max-w-md shadow-xl rounded-2xl border-0 overflow-hidden transform-gpu">
                <div className="bg-gradient-to-r from-primary to-purple-deep p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                  
                  <div className="flex items-center justify-between mb-4 relative z-10">
                    <h4 className="text-xl font-semibold">Get in Touch</h4>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-white/90 relative z-10">
                    Our experts are ready to assist you. Choose how you'd like to connect.
                  </p>
                </div>
                
                <CardContent className="p-6 form-container">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {contactOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setActiveTab(option.id)}
                        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                          activeTab === option.id
                            ? 'bg-primary text-primary-foreground shadow-md'
                            : 'bg-secondary text-foreground hover:bg-accent'
                        }`}
                      >
                        {option.icon}
                        {option.title}
                      </button>
                    ))}
                  </div>
                  
                  <div className="mb-6">
                    {activeTab === 'contact' && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Fill out our contact form and we'll respond within 24 hours.
                        </p>
                        {!isSubmitted ? (
                          <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="w-full rounded-lg border border-accent bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                              required
                            />
                            <input
                              type="email"
                              name="email"
                              placeholder="Your Email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full rounded-lg border border-accent bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                              required
                            />
                            <textarea
                              name="message"
                              placeholder="Tell us about your project"
                              value={formData.message}
                              onChange={handleInputChange}
                              rows={3}
                              className="w-full rounded-lg border border-accent bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300"
                              required
                            />
                            <Button type="submit" className="w-full rounded-lg overflow-hidden group">
                              <span className="relative z-10 flex items-center justify-center">
                                Send Message
                                <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                              </span>
                              <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Button>
                          </form>
                        ) : (
                          <div className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                              <CheckCircle className="h-8 w-8" />
                            </div>
                            <h5 className="text-lg font-semibold mb-2">Message Sent!</h5>
                            <p className="text-sm text-muted-foreground">
                              We'll get back to you within 24 hours.
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {activeTab === 'consultation' && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Book a 30-minute consultation with one of our experts.
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Image
                              src={scientistImageUrl}
                              alt="Expert consultant"
                              width={48}
                              height={48}
                              className="rounded-full object-cover"
                            />
                            <div>
                              <h5 className="font-medium">Dr. Sarah Johnson</h5>
                              <p className="text-sm text-muted-foreground">Lead Research Scientist</p>
                            </div>
                          </div>
                          <Button asChild className="w-full rounded-lg overflow-hidden group">
                            <Link href="/consultation" className="relative z-10">
                              <span className="relative z-10 flex items-center justify-center">
                                Schedule Consultation
                                <Calendar className="h-4 w-4 ml-2" />
                              </span>
                              <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'call' && (
                      <div>
                        <p className="text-sm text-muted-foreground mb-4">
                          Leave your number and we'll call you at your convenience.
                        </p>
                        <div className="space-y-4">
                          <input
                            type="tel"
                            placeholder="Your Phone Number"
                            className="w-full rounded-lg border border-accent bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                          />
                          <Button className="w-full rounded-lg overflow-hidden group">
                            <span className="relative z-10 flex items-center justify-center">
                              Request Call Back
                              <Phone className="h-4 w-4 ml-2" />
                            </span>
                            <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">
                      Or call us directly at <a href="tel:+1234567890" className="font-medium text-primary">+1 (234) 567-890</a>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
            <Sparkles className="h-6 w-6 mr-2 text-primary" />
            Not sure where to start?
            <Sparkles className="h-6 w-6 ml-2 text-primary" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card ref={el => { cardsRef.current[0] = el; }} className="p-6 hover:shadow-lg transition-all duration-300 ">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Chat with an Expert</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get immediate answers to your questions from our scientific team.
                </p>
                <Button variant="outline" size="sm" className="rounded-full overflow-hidden group">
                  <span className="relative z-10">Start Chat</span>
                  <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="absolute inset-0 bg-primary text-primary-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Button>
              </div>
            </Card>

            <Card ref={el => { cardsRef.current[1] = el; }} className="p-6 hover:shadow-lg transition-all duration-300 ">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Watch Our Demo</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  See our facilities and processes in action with a short video tour.
                </p>
                <Button variant="outline" size="sm" className="rounded-full overflow-hidden group">
                  <span className="relative z-10">Watch Now</span>
                  <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="absolute inset-0 bg-primary text-primary-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Button>
              </div>
            </Card>

            <Card ref={el => { cardsRef.current[2] = el; }} className="p-6 hover:shadow-lg transition-all duration-300 ">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-2">Attend Webinar</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Join our upcoming webinar on advanced preclinical models.
                </p>
                <Button variant="outline" size="sm" className="rounded-full overflow-hidden group">
                  <span className="relative z-10">Register</span>
                  <span className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <span className="absolute inset-0 bg-primary text-primary-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;