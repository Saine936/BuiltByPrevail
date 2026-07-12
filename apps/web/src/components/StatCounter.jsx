import React from 'react';
import { useCountUp } from '@/hooks/useCountUp';

function StatCounter({ end, suffix = '', label }) {
  const { count, elementRef } = useCountUp(end, 2000, true);

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
        {count}{suffix}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
}

export default StatCounter;