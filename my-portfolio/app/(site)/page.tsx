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
    </div>
  );
}
