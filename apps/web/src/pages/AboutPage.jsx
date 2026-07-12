import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { Target, Heart, Zap, Users } from 'lucide-react';

function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on creating websites that drive real business results, not just pretty designs.'
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your success is our success. We build long-term relationships with our clients.'
    },
    {
      icon: Zap,
      title: 'Fast & Efficient',
      description: 'We deliver high-quality websites quickly without compromising on quality.'
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'We understand local businesses and what it takes to succeed in your market.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Built by Prevail - Web Design Agency</title>
        <meta name="description" content="Learn about Built by Prevail's mission to help local businesses grow online with beautiful, effective websites." />
      </Helmet>

      <Header />

      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            About Built by Prevail
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We help local businesses grow online with beautiful, effective websites.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Built by Prevail was founded with a simple mission: make professional web design accessible and affordable for local businesses. We saw too many great businesses struggling with outdated websites or no online presence at all.
                </p>
                <p>
                  Since 2019, we have helped over 200 local businesses build their online presence and grow their customer base. From restaurants and contractors to dentists and gyms, we have worked with businesses across every industry.
                </p>
                <p>
                  What sets us apart is our focus on results. We do not just build websites that look good — we build websites that work hard for your business, attracting customers and driving growth.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration in modern office"
                className="w-full h-[500px] object-cover rounded-2xl shadow-soft-lg"
                loading="lazy"
              />
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The principles that guide everything we do.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-secondary rounded-2xl p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                To empower local businesses with professional websites that attract customers, build trust, and drive growth — all at prices that make sense for small business budgets.
              </p>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default AboutPage;