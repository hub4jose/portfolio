'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import useDarkMode from './hooks/useDarkMode';

import { DowloadIcon, MoonIcon, SunIcon } from './Icons';
import Logo from './logos/Logo';

interface LinkProps {
  href: string;
  title: string;
  className?: string;
  onClick?: any;
}

const CustomLink = ({
  href,
  title,
  className = 'md:text-lg text-gray-500 dark:text-light font-semibold ',
  onClick,
}: LinkProps) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className}  relative group`}
      //scroll={false}
    >
      {title}
      <span
        className={`absolute left-0 -bottom-1 md:bottom-2 h-[3px]  bg-gray-500 md:bg-blue-600
           group-hover:w-full transition-[width] ease-in duration-300 
            ${path === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

//type SETMODE = React.Dispatch<React.SetStateAction<string>>;

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [mode, setMode] = useDarkMode();

  const handleNav = () => {
    setToggleNav(!toggleNav);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    //remove everything before the hash
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, []);
  return (
    <header
      className={`sticky left-0 top-0 right-0 w-full h-20  shadow-${
        shadow ? 'xl' : 'none'
      } z-[100] `}
    >
      <div className="p-4 2xl:px-8 flex items-center justify-between bg-white dark:bg-gray-900">
        <Logo />

        <div className=" hidden md:flex gap-8">
          <CustomLink href="/" title="Home" />
          {/* <CustomLink href="/#skills" title="Skills" onClick={handleScroll} />
          <CustomLink
            href="/#services"
            title="Services"
            onClick={handleScroll}
          />
          <CustomLink
            href="/#projects"
            title="Projects"
            onClick={handleScroll}
          />
          <CustomLink
            href="/#testimonials"
            title="Testimonials"
            onClick={handleScroll}
          />
          <CustomLink href="/#about" title="About me" onClick={handleScroll} /> */}
          <CustomLink href="/casestudies" title="Case Studies" />
          <CustomLink href="/contact" title="Contact" />
          <a
            href="/New.pdf"
            download
            className="dark:text-light group hover:text-blue-600  hover:scale-105 -mt-2 transition flex gap-1 md:text-lg text-gray-500 font-semibold justify-center items-center"
          >
            <DowloadIcon
              className={
                'dark:fill-light fill-gray-500 h-4 w-4  group-hover:fill-blue-600 '
              }
            />{' '}
            <p>Resume</p>
          </a>
          <button
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
            className=" hover:bg-gray-300 dark:hover:bg-slate-700  flex items-center justify-center rounded-full p-1"
          >
            {mode === 'dark' ? (
              <SunIcon className={''} />
            ) : (
              <MoonIcon className={'m1-1 mt-1'} />
            )}
          </button>
        </div>

        <div className="md:hidden">
          <AiOutlineMenu
            size={30}
            className="dark:text-white cursor-pointer"
            onClick={() => handleNav()}
          />
        </div>
      </div>

      {/* Mobile view Menu */}
      {
        <div
          className={
            toggleNav ? 'fixed left-0 top-0 h-screen w-full  bg-black/70' : ''
          }
        >
          <div
            className={`fixed ${
              toggleNav
                ? 'left-0 h-screen w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 bg-light p-4  '
                : 'left-[-100%]'
            } top-0  
            ease-in-out duration-500 p-4    dark:bg-gray-700`}
          >
            <div className=" flex flex-col justify-between h-full">
              <div className=" flex  justify-between items-center ">
                <Logo />
                <button
                  onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
                  className="ml-3  flex justify-center items-center rounded-full "
                >
                  {mode === 'dark' ? (
                    <SunIcon className={''} />
                  ) : (
                    <MoonIcon className={''} />
                  )}
                </button>
                <AiOutlineClose
                  size={30}
                  className="dark:text-white cursor-pointer"
                  onClick={() => handleNav()}
                />
              </div>

              <div className=" flex flex-col  text-2xl gap-6">
                <CustomLink href="/" title="Home" />
                {/* <CustomLink
                href="/#skills"
                title="Skills"
                onClick={() => handleNav()}
              />
              <CustomLink
                href="/#services"
                title="Services"
                onClick={() => handleNav()}
              />
              <CustomLink
                href="/#projects"
                title="Projects"
                onClick={() => handleNav()}
              />
              <CustomLink
                href="/#testimonials"
                title="Testimonials"
                onClick={() => handleNav()}
              />
              <CustomLink
                href="/#about"
                title="About me"
                onClick={() => handleNav()}
              /> */}
                <CustomLink href="/casestudies" title="Case Studies" />
                <CustomLink href="/contact" title="Contact" />
                <a
                  href="/New.pdf"
                  download
                  className="dark:text-light hover:scale-105  transition flex gap-1 text-sm  text-gray-500 font-semibold justify-end items-center"
                >
                  <DowloadIcon
                    className={
                      'dark:fill-light fill-gray-500 h-4 w-4  dark:text-light '
                    }
                  />{' '}
                  <p>Resume</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      }
    </header>
  );
};

export default Navbar;
