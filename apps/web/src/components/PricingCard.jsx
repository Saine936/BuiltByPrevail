import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

function PricingCard({ tier, price, period = 'one-time', features, cta = 'Get Started', isPopular = false }) {
  return (
    <Card 
      className={`relative h-full transition-all duration-300 hover:shadow-soft-lg ${
        isPopular 
          ? 'scale-105 ring-2 ring-primary shadow-soft-lg' 
          : 'hover:-translate-y-1'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <CardHeader className="text-center pb-8 pt-8">
        <h3 className="text-2xl font-bold mb-2 text-foreground">{tier}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-foreground">${price}</span>
          {period && <span className="text-muted-foreground">/{period}</span>}
        </div>
      </CardHeader>
      
      <CardContent className="flex flex-col h-full pb-8">
        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-auto">
          <Button 
            className={`w-full ${
              isPopular 
                ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
            size="lg"
          >
            {cta}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default PricingCard;