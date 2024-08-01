import Link from "next/link";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";

const HomePage = () => {
  return (
    <main className="flex min-h-80 flex-col items-center justify-between p-24 bg-green-500">
      <h1>Home page</h1>
      <Link className='text-blue-700' href={'/properties'}>Go to Properties page</Link>
      <Accordion collapsible type="single">
        <AccordionItem value="unique-id1">
          <AccordionTrigger>What payment options do you accept?</AccordionTrigger>
          <AccordionContent>We accept Mastercard, Visa and American Express.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="unique-id2">
          <AccordionTrigger>What payment options do you accept?</AccordionTrigger>
          <AccordionContent>We accept Mastercard, Visa and American Express.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="unique-id3">
          <AccordionTrigger>What payment options do you accept?</AccordionTrigger>
          <AccordionContent>We accept Mastercard, Visa and American Express.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}

export default HomePage;
