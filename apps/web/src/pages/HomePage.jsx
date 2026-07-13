import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceCard from '@/components/ServiceCard';
import StatCounter from '@/components/StatCounter';
import { 
  Palette, 
  RefreshCw, 
  Search, 
  MapPin, 
  Wrench, 
  ShoppingCart, 
  Calendar, 
  Zap,
  Phone,
  Pencil,
  Code,
  Rocket
} from 'lucide-react';

function HomePage() {
  const services = [
    {
      icon: Palette,
      title: 'Custom Website Design',
      description: 'Unique, professional designs tailored to your brand identity and business goals.'
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      description: 'Modernize your outdated website with fresh design and improved functionality.'
    },
    {
      icon: Search,
      title: 'Local SEO',
      description: 'Rank higher in local search results and attract more customers in your area.'
    },
    {
      icon: MapPin,
      title: 'Google Business Profile Optimization',
      description: 'Maximize your visibility on Google Maps and local search results.'
    },
    {
      icon: Wrench,
      title: 'Website Maintenance',
      description: 'Keep your site secure, updated, and running smoothly with ongoing support.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Websites',
      description: 'Sell online with a powerful, user-friendly e-commerce platform.'
    },
    {
      icon: Calendar,
      title: 'Booking & Appointment Systems',
      description: 'Let customers book appointments directly from your website 24/7.'
    },
    {
      icon: Zap,
      title: 'Speed Optimization',
      description: 'Lightning-fast loading times that improve user experience and SEO.'
    }
  ];

  const stats = [
    { end: 200, suffix: '+', label: 'Websites Built' },
    { end: 98, suffix: '%', label: 'Client Satisfaction' },
    { end: 100, suffix: '%', label: 'Mobile Optimized' },
    { end: 14, suffix: ' Days', label: 'Fast Turnaround' }
  ];

  const processSteps = [
    {
      icon: Phone,
      title: 'Discovery Call',
      description: 'We learn about your business, goals, and target audience.'
    },
    {
      icon: Pencil,
      title: 'Design & Mockups',
      description: 'We create beautiful designs for your review and approval.'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'We build your website with clean code and best practices.'
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We launch your site and provide ongoing support and training.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Built by Prevail - Web Design Agency for Local Businesses</title>
        <meta name="description" content="Professional web design services for local businesses. Custom websites, SEO, e-commerce, and more. Get a free quote today from Built by Prevail." />
        <meta property="og:title" content="Built by Prevail - Web Design Agency for Local Businesses" />
        <meta property="og:description" content="Professional web design services for local businesses. Custom websites, SEO, e-commerce, and more." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Header />

      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="horizons-export-cfda2f16-5e23-43ad-a22b-81b2c9c74bdf/images/builtbyprevail.png"
            alt="Modern workspace with laptop and design tools"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Websites That Help Local Businesses Grow
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional web design that attracts customers, builds trust, and drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8" asChild>
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to build a strong online presence and grow your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <ServiceCard {...service} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Proven results and exceptional service for local businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <StatCounter {...stat} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A simple, transparent process from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-6xl font-bold text-primary/10 mb-2">{index + 1}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business Online?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Schedule a free consultation to discuss your project and get a custom quote.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8" asChild>
            <Link to="/contact">Book Your Free Consultation</Link>
          </Button>
        </div>
      </AnimatedSection>

      <Footer />
    </>
  );
}

export default HomePage;