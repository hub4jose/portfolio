import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import {
  LinkedinIcon,
  GitIcon,
  TwitterIcon,
  DowloadIcon,
} from '@/components/Icons';
import { AnimateText } from '@/components/AnimateText';

const Hero = () => {
  return (
    <div id="home" className=" w-full h-screen items-center md:-mt-10">
      <section className=" max-w-6xl p-8 lg:h-full mx-auto justify-center items-center grid md:grid-cols-2 gap-4">
        <div>
          <h1 className="text-sm font-bold tracking-[.5em] text-blue-600 dark:text-blue-400">
            HI, I AM JOSEPH
          </h1>

          <div className="flex flex-col space-y-2 mt-3 text-5xl font-bold text-dark dark:text-light">
            <p>Proffesional</p>
            <p className="relative">
              <span className="">Web Developer</span>
              <span className="highlight -z-10 -ml-[260px] sm:-ml-[388px] mt-8"></span>
            </p>
            <p>based in USA</p>
          </div>

          <p className="flex flex-col space-y-6 mt-4 text-md font-semibold text-[#a5a3b4] dark:text-light">
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
              className="bg-white shadow-lg hover:bg-blue-200 py-2 px-4  text-sm font-semibold rounded-lg dark:text-dark"
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
            <a
              href="/New.pdf"
              download
              className="dark:text-light hover:scale-105 transition flex gap-1 text-sm font-semibold justify-center items-center"
            >
              <DowloadIcon
                className={'dark:fill-light h-4 w-4  dark:text-light '}
              />{' '}
              <p>Resume</p>
            </a>
          </div>
        </div>
        <div className="hidden md:flex items-start justify-end">
          {' '}
          <Image
            src="/images/HeroLight.png"
            alt="image"
            width={520}
            height={680}
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
