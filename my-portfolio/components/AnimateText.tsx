import { motion } from 'framer-motion';

const AnimateText = ({ text, className = '' }) => {
  const quote = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <div>
      <motion.h1
        variants={quote}
        initial="initial"
        animate="animate"
        className={`${className}`}
      >
        {text}&nbsp;{' '}
      </motion.h1>
    </div>
  );
};

export default AnimateText;
