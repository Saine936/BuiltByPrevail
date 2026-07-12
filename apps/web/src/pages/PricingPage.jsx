import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import PricingCard from '@/components/PricingCard';

function PricingPage() {
  const pricingTiers = [
    {
      tier: 'Starter Website',
      price: '1,497',
      period: 'one-time',
      features: [
        'Up to 5 pages',
        'Mobile-responsive design',
        'Contact form',
        'Basic SEO setup',
        'Social media integration',
        '30 days of support',
        'Free hosting for 1 year'
      ],
      cta: 'Get Started',
      isPopular: false
    },
    {
      tier: 'Business Website',
      price: '2,997',
      period: 'one-time',
      features: [
        'Up to 10 pages',
        'Custom design',
        'Advanced SEO optimization',
        'Google Business Profile setup',
        'Blog functionality',
        'Contact forms & CTAs',
        '90 days of support',
        'Free hosting for 1 year',
        'Speed optimization'
      ],
      cta: 'Get Started',
      isPopular: true
    },
    {
      tier: 'Premium Growth Package',
      price: '4,997',
      period: 'one-time',
      features: [
        'Unlimited pages',
        'Premium custom design',
        'E-commerce or booking system',
        'Advanced SEO & local optimization',
        'Content creation (up to 10 pages)',
        'Email marketing integration',
        '6 months of support',
        'Free hosting for 2 years',
        'Priority support',
        'Monthly performance reports'
      ],
      cta: 'Get Started',
      isPopular: false
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'Most websites are completed within 2-4 weeks, depending on the complexity and your responsiveness with content and feedback. We provide a detailed timeline during our discovery call.'
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans. You can pay 50% upfront and 50% upon completion, or we can arrange a custom payment schedule that works for your budget.'
    },
    {
      question: 'What is included in SEO optimization?',
      answer: 'Our SEO services include keyword research, on-page optimization, meta tags, image optimization, site speed improvements, mobile optimization, and Google Business Profile setup for local businesses.'
    },
    {
      question: 'Do I own the website after it is built?',
      answer: 'Yes, you own 100% of your website, including all design files, content, and code. We provide full ownership and access to all website assets upon final payment.'
    },
    {
      question: 'What happens after the website is launched?',
      answer: 'We provide training on how to update your website, ongoing support based on your package, and optional maintenance plans to keep your site secure and up-to-date.'
    },
    {
      question: 'Can you help with website hosting?',
      answer: 'Yes, we include free hosting for the first year (or two years with the Premium package). After that, hosting is available for a small monthly fee, or you can host it yourself.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Built by Prevail Web Design Packages</title>
        <meta name="description" content="Transparent pricing for professional web design services from Built by Prevail. Choose the package that fits your business needs and budget." />
      </Helmet>

      <Header />

      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the package that fits your business needs and budget. No hidden fees.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {pricingTiers.map((tier, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <PricingCard {...tier} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-foreground font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Not sure which package is right for you?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Schedule a free consultation and we will help you choose the best option for your business.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8" asChild>
            <Link to="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
      </AnimatedSection>

      <Footer />
    </>
  );
}

export default PricingPage;