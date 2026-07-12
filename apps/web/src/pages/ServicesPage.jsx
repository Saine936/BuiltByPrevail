import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { 
  Palette, 
  RefreshCw, 
  Search, 
  MapPin, 
  Wrench, 
  ShoppingCart, 
  Calendar, 
  Zap,
  Check
} from 'lucide-react';

function ServicesPage() {
  const services = [
    {
      icon: Palette,
      title: 'Custom Website Design',
      description: 'Stand out from the competition with a unique website designed specifically for your business. We create custom designs that reflect your brand identity and resonate with your target audience.',
      benefits: [
        'Unique design tailored to your brand',
        'Mobile-responsive layouts',
        'User-friendly navigation',
        'Professional imagery and graphics',
        'Conversion-focused design'
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5'
    },
    {
      icon: RefreshCw,
      title: 'Website Redesign',
      description: 'Is your website outdated or underperforming? We modernize existing websites with fresh designs, improved functionality, and better user experience to help you stay competitive.',
      benefits: [
        'Modern, contemporary design',
        'Improved site performance',
        'Enhanced user experience',
        'Better mobile compatibility',
        'Updated content management'
      ],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166'
    },
    {
      icon: Search,
      title: 'Local SEO',
      description: 'Get found by customers in your area with our local SEO services. We optimize your website to rank higher in local search results and attract more qualified leads.',
      benefits: [
        'Higher local search rankings',
        'Increased organic traffic',
        'Better visibility on Google',
        'Targeted keyword optimization',
        'Ongoing performance tracking'
      ],
      image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1'
    },
    {
      icon: MapPin,
      title: 'Google Business Profile Optimization',
      description: 'Maximize your visibility on Google Maps and local search with a fully optimized Google Business Profile. We help you attract more customers through local search.',
      benefits: [
        'Complete profile setup',
        'Regular post updates',
        'Review management',
        'Photo optimization',
        'Insights and reporting'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
    },
    {
      icon: Wrench,
      title: 'Website Maintenance',
      description: 'Keep your website secure, updated, and running smoothly with our comprehensive maintenance services. We handle all the technical details so you can focus on your business.',
      benefits: [
        'Regular security updates',
        'Content updates and changes',
        'Performance monitoring',
        'Backup and recovery',
        'Technical support'
      ],
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Websites',
      description: 'Start selling online with a powerful e-commerce website. We build user-friendly online stores that make it easy for customers to browse, shop, and checkout.',
      benefits: [
        'Secure payment processing',
        'Product catalog management',
        'Shopping cart functionality',
        'Order management system',
        'Mobile-optimized checkout'
      ],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d'
    },
    {
      icon: Calendar,
      title: 'Booking & Appointment Systems',
      description: 'Let customers book appointments directly from your website 24/7. We integrate powerful booking systems that sync with your calendar and send automatic reminders.',
      benefits: [
        '24/7 online booking',
        'Calendar synchronization',
        'Automated reminders',
        'Payment integration',
        'Customer management'
      ],
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe'
    },
    {
      icon: Zap,
      title: 'Speed Optimization',
      description: 'Slow websites lose customers. We optimize your site for lightning-fast loading times, improving user experience, search rankings, and conversion rates.',
      benefits: [
        'Faster page load times',
        'Improved SEO rankings',
        'Better user experience',
        'Reduced bounce rates',
        'Mobile performance boost'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Built by Prevail Web Design</title>
        <meta name="description" content="Comprehensive web design and digital marketing services for local businesses. Custom websites, SEO, e-commerce, and more from Built by Prevail." />
      </Helmet>

      <Header />

      <section className="pt-32 pb-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to build a strong online presence and grow your business.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={index}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] object-cover rounded-2xl shadow-soft-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <AnimatedSection className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Contact us today to discuss your project and get a custom quote.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8" asChild>
            <Link to="/contact">Request a Quote</Link>
          </Button>
        </div>
      </AnimatedSection>

      <Footer />
    </>
  );
}

export default ServicesPage;