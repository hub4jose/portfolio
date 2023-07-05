import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { LinkedinIcon, GitIcon, TwitterIcon } from '@/components/Icons';
import AnimateText from '@/components/AnimateText';

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen items-center">
      <section className="max-w-6xl h-full mx-auto justify-center items-center grid grid-cols-2 gap-2">
        <div>
          <h1 className="text-sm font-bold tracking-[.5em] text-blue-600 dark:text-blue-400">
            HI, I AM JOSEPH
          </h1>

          <p className="flex flex-col space-y-2 mt-3 text-5xl font-bold text-dark dark:text-light">
            <span>Proffesional</span>
            <span>Web Developer </span>
            <span>based in USA</span>
          </p>

          <p className="flex flex-col space-y-6 mt-4 text-md font-semibold text-gray-500 dark:text-light">
            Dynamically skilled Sofware Engineer with more than 5 years of
            hands-on experience as a core member of the development team for a
            wide range of software , data analysis and web development.
          </p>

          <div className=" flex flex-row items-center  mt-3 text-xl text-slate-700 dark:text-light">
            <div>
              <AnimateText text="Gracious " className="!text-2xl" />
            </div>
            <div>{` everyone! Check out my projects!`}</div>
          </div>
          <div className="mt-10 flex  gap-4 items-center">
            <motion.a
              href="/contact"
              className="bg-blue-100 hover:bg-blue-200 py-2 px-4 text-sm font-semibold self-center  rounded-lg dark:text-dark"
              whileHover={{ y: -1 }}
            >
              Contact Us
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/"
              target={'_blank'}
              whileHover={{ y: -1 }}
            >
              <LinkedinIcon className={'dark:fill-light'} />
            </motion.a>
            <motion.a
              href="https://github.com/"
              target={'_blank'}
              whileHover={{ y: -1 }}
            >
              <GitIcon className={'dark:fill-light'} />
            </motion.a>
            <motion.a
              href="https://twitter.com/"
              target={'_blank'}
              whileHover={{ y: -1 }}
            >
              <TwitterIcon className={'dark:fill-light'} />
            </motion.a>
            <Link href="/New.pdf" target="_blank" className="dark:text-light">
              Resume
            </Link>
          </div>
        </div>
        <div> Hero Image goes here...</div>
      </section>
    </div>
  );
};

export default Hero;
