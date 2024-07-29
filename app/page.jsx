import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex min-h-80 flex-col items-center justify-between p-24 bg-green-200">
      <h1>Home page</h1>
      <Link className='text-blue-700' href={'/properties'}>Go to Properties page</Link>
    </main>
  );
}

export default HomePage;
