import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

function TestimonialCard({ name, company, rating = 5, review, avatar, initials }) {
  return (
    <Card className="break-inside-avoid mb-6 transition-all duration-300 hover:shadow-soft border-border/50">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-12 h-12 rounded-xl">
            {avatar && <AvatarImage src={avatar} alt={name} />}
            <AvatarFallback className="rounded-xl bg-primary/10 text-primary font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold text-foreground">{name}</h4>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
        
        <div className="flex gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        
        <p className="text-foreground leading-relaxed">{review}</p>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;