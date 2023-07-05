'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import useDarkMode from './hooks/useDarkMode';

import { MoonIcon, SunIcon } from './Icons';
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
  className = 'md:text-md text-gray-500 font-semibold ',
  onClick,
}: LinkProps) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className}  relative group`}
    >
      {title}
      <span
        className={`absolute left-0 -bottom-[1px] h-[2px]  bg-gray-400
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
    <div
      className={`fixed w-full h-20  shadow-${shadow ? 'xl' : 'none'} z-[100] `}
    >
      <div className="p-4 2xl:px-8 flex items-center justify-between bg-white dark:bg-gray-900">
        <Logo />

        <div className=" hidden md:flex gap-4">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/#skills" title="Skills" />
          <CustomLink href="/#services" title="Services" />
          <CustomLink href="/#projects" title="Projects" />
          <CustomLink href="/#testimonials" title="Testimonials" />
          <CustomLink href="/#about" title="About me" />
          <CustomLink href="/casestudies" title="Case Studies" />
          <CustomLink href="/contact" title="Contact" />
          <button
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
            className="ml-3 flex items-center justify-center rounded-full p-1"
          >
            {mode === 'dark' ? (
              <SunIcon className={''} />
            ) : (
              <MoonIcon className={''} />
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

            <div className="mt-24 flex flex-col text-2xl gap-6">
              <CustomLink href="/" title="Home" onClick={() => handleNav()} />
              <CustomLink
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
              />
              <CustomLink
                href="/casestudies"
                title="Case Studies"
                onClick={() => handleNav()}
              />
              <CustomLink
                href="/contact"
                title="Contact"
                onClick={() => handleNav()}
              />
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Navbar;
