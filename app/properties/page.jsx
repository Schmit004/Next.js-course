import Link from 'next/link';

const PropertiesPage = () => {
  return (
    <main className="flex min-h-80 flex-col items-center justify-between p-24 bg-yellow-200">
      <h1 className='bg-yellow-200'>PropertiesPage</h1>
      <Link className='text-blue-700' href={'/'}>Back to home page</Link>
      <Link className='text-blue-700' href={'/properties/123'}>Go to specific property</Link>
    </main>
  );
};

export default PropertiesPage;
