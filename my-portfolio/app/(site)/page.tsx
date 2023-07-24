'use client';
import Qualification from '@/components/Qualification';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import Experience from '@/components/Experience';

export default async function Home() {
  return (
    <div className="flex flex-col ">
      <Hero />

      <Skills />

      <Services />

      <Experience />

      <Projects />

      <Testimonials />

      <Qualification />

      <div className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="md:hidden">Side Bar Mobile</div>
          <div className="flex flex-col md:col-span-1 gap-4 md:order-none order-last">
            <div className="hidden md:flex">Side Bar Desktop</div>
            <div className=" flex">popular</div>
            <div className="flex">pinned</div>
          </div>
          <div className="flex flex-col md:col-span-2 gap-4">
            <div className="">Create Post</div>
            <div className="">Post Section</div>
          </div>
          <div className="flex flex-col md:col-span-1 gap-4">
            <div className="">Meetup</div>
            <div className="">podcast</div>
          </div>
        </div>
      </div>
    </div>
  );
}
