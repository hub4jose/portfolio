import Link from 'next/link';
import Image from 'next/image';
import {
  LinkedinIcon,
  GitIcon,
  TwitterIcon,
  DowloadIcon,
} from '@/components/Icons';

const Footer = () => {
  return (
    <footer
      className="  p-4 flex flex-col gap-6 items-center justify-center
    dark:bg-gradient-to-b dark:from-gray-900  dark:to-gray-800  w-full"
    >
      <div className="relative flex justify-center items-center">
        <Image
          src="/images/Footerimg.png"
          alt="Footer"
          width={1200}
          height={400}
        />
        <div className="absolute -ml-32 flex flex-col gap-8">
          <div className="text-4xl md:text-6xl font-bold text-dark flex flex-col gap-6">
            <p>Have a project idea to </p>
            <p>collaborate on?</p>
          </div>
          <Link
            href="/contact"
            className="bg-light shadow-lg hover:bg-blue-200 py-4 px-6 self-start  text-sm font-semibold rounded-full dark:text-dark"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <Link href="https://www.Linkedin.com/" target={'_blank'}>
          <LinkedinIcon
            className={'dark:fill-light fill-gray-500 hover:fill-black'}
          />
        </Link>
        <Link href="https://github.com/" target={'_blank'}>
          <GitIcon
            className={'dark:fill-light fill-gray-500 hover:fill-black'}
          />
        </Link>
        <Link href="https://twitter.com/" target={'_blank'}>
          <TwitterIcon
            className={'dark:fill-light fill-gray-500 hover:fill-black'}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
