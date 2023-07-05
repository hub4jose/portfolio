'use client';
import Qualification from '@/components/Qualification';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';

export default async function Home() {
  return (
    <div>
      <Hero />

      <Skills />

      <Projects />

      <Testimonials />

      <Qualification />
    </div>
  );
}
