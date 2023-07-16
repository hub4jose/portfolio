import Link from 'next/link';

import {
  LinkedinIcon,
  GitIcon,
  TwitterIcon,
  DowloadIcon,
} from '@/components/Icons';

const Footer = () => {
  return (
    <footer
      className=" absolute inset-x-0 bottom-0 p-4 md:p-10  flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 
    dark:bg-gradient-to-b dark:from-gray-900  dark:to-gray-800  w-full h-60 "
    >
      <div className="ml-4 flex flex-col gap-6">
        <div className="text-3xl text-md:text-5xl font-bold text-dark dark:text-light">
          Have a project idea to collaborate on?
        </div>
        <Link
          href="/contact"
          className="bg-light shadow-lg hover:bg-blue-200 py-2 px-4 self-start  text-sm font-semibold rounded-lg dark:text-dark"
        >
          Contact Us
        </Link>
      </div>
      <div className="mt-10 flex  gap-4 items-center">
        <Link href="https://www.Linkedin.com/" target={'_blank'}>
          <LinkedinIcon className={'dark:fill-light grayscale'} />
        </Link>
        <Link href="https://github.com/" target={'_blank'}>
          <GitIcon className={'dark:fill-light grayscale'} />
        </Link>
        <Link href="https://twitter.com/" target={'_blank'}>
          <TwitterIcon className={'dark:fill-light grayscale'} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
