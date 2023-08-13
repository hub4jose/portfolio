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
    <div className=" w-full h-screen items-center md:-mt-10 bg-light dark:bg-[#15141C]">
      <section className=" max-w-[1440px] p-8 lg:h-full mx-auto justify-center items-center grid md:grid-cols-2 gap-4">
        <div>
          <h1 className="text-sm font-bold tracking-[.5em] text-blue-600 dark:text-blue-400">
            HI, I AM JOSEPH
          </h1>

          <div className="flex flex-col space-y-3 mt-6 text-6xl font-bold text-dark dark:text-light">
            <p>Proffesional</p>
            <p className="relative">
              <span className="">Web Developer</span>
              <span className="highlight border-b-[22px] w-[320px] sm:w-[480px]  -ml-[320px] sm:-ml-[480px] mt-10"></span>
            </p>
            <p>based in USA</p>
          </div>

          <p className="flex flex-col mt-8 font-semibold text-[#a5a3b4] dark:text-light">
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
          <div className="mt-10 flex  gap-6 items-center">
            <a
              href="/contact"
              className="bg-blue-600  shadow-lg hover:bg-blue-500 py-3 px-6  text-xs font-semibold rounded-3xl text-light"
            >
              Contact Us
            </a>
            <motion.a
              href="https://www.linkedin.com/"
              target={'_blank'}
              whileHover={{ y: -1 }}
            >
              <LinkedinIcon
                className={'dark:fill-light fill-gray-500 hover:fill-dark'}
              />
            </motion.a>
            <motion.a
              href="https://github.com/"
              target={'_blank'}
              whileHover={{ y: -1 }}
            >
              <GitIcon
                className={'dark:fill-light  fill-gray-500 hover:fill-dark'}
              />
            </motion.a>
            <motion.a
              href="https://twitter.com/"
              target={'_blank'}
              whileHover={{ y: -1 }}
            >
              <TwitterIcon
                className={'dark:fill-light  fill-gray-500 hover:fill-dark'}
              />
            </motion.a>
            <div className="text-blue-600 text-3xl"> &#8594; </div>
          </div>
        </div>
        <div className="hidden md:flex -mt-20 items-center justify-center">
          <div>
            <Image
              src="/images/HeroLight.png"
              alt="image"
              width={858}
              height={796}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
