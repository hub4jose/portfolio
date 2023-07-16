import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <MotionLink
        href="/"
        className="w-12 h-12 bg-dark text-light dark:text-dark dark:bg-blue-100 text-xl font-bold flex items-center justify-center rounded-full"
        animate={{ rotateY: 360 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.2 }}
      >
        J
      </MotionLink>
    </div>
  );
};

export default Logo;
