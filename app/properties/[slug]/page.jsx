'use client'

import Link from 'next/link';
const PropertyPage = ({ params }) => {
  const { slug } = params;

  return (
    <main className="flex min-h-80 flex-col items-center justify-between p-24 bg-blue-200">
      <h1>Property Page</h1>
      <p>Propery Page #{slug}</p>
      <Link className='text-blue-700' href={'/'}>Back to home page</Link>
    </main>
  );
};

export default PropertyPage;
