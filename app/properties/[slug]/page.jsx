'use client'

import Link from 'next/link';
import { Card, CardImage, CardContent, CardTitle, CardDescription } from '@/components/Card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@radix-ui/react-hover-card';

const PropertyPage = ({ params }) => {
  const { slug } = params;

  return (
    <main className="flex min-h-80 flex-col items-center justify-between p-24 bg-blue-200">
      <h1>Property Page</h1>
      <p>Propery Page #{slug}</p>
      <Link className='text-blue-700' href={'/'}>Back to home page</Link>
      <Card>
        <CardImage src="https://images.unsplash.com/photo-1487124504955-e42a39e11aaf?w=512&h=512&dpr=2&q=80" />
        <CardContent>
          <CardTitle>Carrot Cake Cupcake</CardTitle>
          <CardDescription>
            $5.00 (members get 10% off)
          </CardDescription>
        </CardContent>
      </Card>
      <HoverCard>
        <HoverCardTrigger className="dark:text-white">Hover me</HoverCardTrigger>
        <HoverCardContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac risus sed sem lacinia finibus.
        </HoverCardContent>
      </HoverCard>
    </main>
  );
};

export default PropertyPage;
