import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import PortfolioCard from '@/components/PortfolioCard';

function PortfolioPage() {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1684675144506-b181f5209c5a',
      category: 'Restaurant',
      title: 'Bella Italia Restaurant',
      description: 'Modern restaurant website with online ordering and reservation system.'
    },
    {
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
      category: 'Café',
      title: 'Morning Brew Café',
      description: 'Cozy café website featuring menu, location, and loyalty program.'
    },
    {
      image: 'https://images.unsplash.com/photo-1702477578035-08ed43b097c5',
      category: 'Contractor',
      title: 'Elite Construction',
      description: 'Professional contractor website showcasing projects and services.'
    },
    {
      image: 'https://images.unsplash.com/photo-1629909615957-be38d48fbbe6',
      category: 'Dental',
      title: 'Bright Smile Dentistry',
      description: 'Modern dental practice website with appointment booking.'
    },
    {
      image: 'https://images.unsplash.com/photo-1647645426550-c36f3727ec71',
      category: 'Fitness',
      title: 'Peak Performance Gym',
      description: 'Dynamic fitness center website with class schedules and membership options.'
    },
    {
      image: 'https://images.unsplash.com/photo-1623474769376-87682a78c0fe',
      category: 'Salon',
      title: 'Luxe Hair Studio',
      description: 'Elegant salon website with online booking and service gallery.'
    },
    {
      image: 'https://images.unsplash.com/photo-1655314873087-a3ca9343e8cf',
      category: 'Real Estate',
      title: 'Coastal Properties',
      description: 'Real estate website with property listings and virtual tours.'
    },
    {
      image: 'https://images.unsplash.com/photo-1697638164340-6c5fc558bdf2',
      category: 'Law Firm',
      title: 'Sterling Legal Group',
      description: 'Professional law firm website with practice areas and attorney profiles.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Portfolio - Built by Prevail Web Design Projects</title>
        <meta name="description" content="Browse our portfolio of beautiful, high-performing websites built for restaurants, contractors, dentists, gyms, salons, and more by Built by Prevail." />
      </Helmet>

      <Header />

      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beautiful, high-performing websites we have built for local businesses.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1} className="md:col-span-1">
                <PortfolioCard {...project} />
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {projects.slice(2, 5).map((project, index) => (
              <AnimatedSection key={index + 2} delay={(index + 2) * 0.1}>
                <PortfolioCard {...project} />
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {projects.slice(5).map((project, index) => (
              <AnimatedSection key={index + 5} delay={(index + 5) * 0.1} className="md:col-span-1">
                <PortfolioCard {...project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default PortfolioPage;