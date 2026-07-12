import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import TestimonialCard from '@/components/TestimonialCard';

function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Maya Chen',
      company: 'Lotus Garden Restaurant',
      rating: 5,
      review: 'Built by Prevail transformed our online presence completely. Our new website is beautiful, easy to navigate, and we have seen a 47% increase in online orders since launch. The team was professional and delivered exactly what we needed.',
      initials: 'MC'
    },
    {
      name: 'Raj Patel',
      company: 'Summit Construction',
      rating: 5,
      review: 'Working with Built by Prevail was a game changer for our business. They built us a professional website that showcases our projects beautifully. We now get 3-4 qualified leads per week directly from the website.',
      initials: 'RP'
    },
    {
      name: 'Lucia Torres',
      company: 'Bright Smile Dental',
      rating: 5,
      review: 'The online booking system they integrated has been incredible. Patients can now book appointments 24/7, which has reduced our phone calls and increased bookings by 62%. Highly recommend their services.',
      initials: 'LT'
    },
    {
      name: 'Kwame Asante',
      company: 'Peak Fitness Center',
      rating: 5,
      review: 'Our new website perfectly captures the energy of our gym. The design is modern, the class schedule integration works flawlessly, and membership sign-ups have increased significantly. Great work.',
      initials: 'KA'
    },
    {
      name: 'Anika Bergström',
      company: 'Nordic Hair Studio',
      rating: 5,
      review: 'Built by Prevail created a stunning website that reflects the premium quality of our salon. The online booking feature has been a huge time-saver, and clients love how easy it is to schedule appointments.',
      initials: 'AB'
    },
    {
      name: 'Marcus Williams',
      company: 'Coastal Properties',
      rating: 5,
      review: 'The real estate website they built for us is exceptional. Property listings are easy to manage, the search functionality is smooth, and we have received great feedback from both buyers and sellers.',
      initials: 'MW'
    },
    {
      name: 'Sofia Rodriguez',
      company: 'Artisan Coffee House',
      rating: 5,
      review: 'Our café needed a website that matched our artisanal approach to coffee. Built by Prevail delivered a beautiful, unique design that our customers love. Online orders have grown steadily since launch.',
      initials: 'SR'
    },
    {
      name: 'James O\'Connor',
      company: 'Sterling Legal Group',
      rating: 5,
      review: 'Professional, reliable, and excellent results. Our law firm website looks polished and credible, which is exactly what we needed. The team understood our requirements perfectly.',
      initials: 'JO'
    },
    {
      name: 'Priya Sharma',
      company: 'Wellness Spa & Retreat',
      rating: 5,
      review: 'The website Built by Prevail created for our spa is serene, elegant, and perfectly represents our brand. The booking system integration has streamlined our operations significantly.',
      initials: 'PS'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Client Testimonials - Built by Prevail Web Design</title>
        <meta name="description" content="Read reviews from satisfied clients who have grown their businesses with web design services from Built by Prevail." />
      </Helmet>

      <Header />

      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Client Testimonials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from local businesses who have grown their online presence with our help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default TestimonialsPage;