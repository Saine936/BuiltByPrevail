import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServiceCard({ icon: Icon, title, description, link = '/services' }) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 border-border/50">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <div className="mt-auto">
          <Button variant="ghost" className="group p-0 h-auto font-medium text-primary hover:text-primary/80" asChild>
            <Link to={link}>
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;