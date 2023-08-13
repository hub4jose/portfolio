import Image from 'next/image';

import { getSkills } from '@/sanity/sanity-utils';

const Skills = async () => {
  const skills = await getSkills();
  return (
    <div id="skills" className="w-full lg:h-screen  items-center">
      <section className="max-w-4xl lg:h-full p-6 mx-auto flex flex-col justify-center items-center gap-10">
        <h2 className=" relative flex  justify-center">
          My Skills{' '}
          <span className="highlight w-[84px] border-b-[15px] mt-[18px] ml-14"></span>
        </h2>
        <div className="mt-5 justify-center flex flex-wrap gap-4 md:gap-6 items-center">
          {skills.map((skill) => (
            <div
              key={skill._id}
              className=" flex flex-col justify-center  p-2 hover:scale-105 transition"
            >
              {skill.images && (
                <Image
                  src={skill?.images[0]?.asset.url}
                  alt={skill?.title}
                  width={80}
                  height={80}
                  rounded-full
                  className="p-2  bg-light dark:bg-gray-700  rounded-full dark:grayscale grayscale-0 hover:grayscale dark:hover:grayscale-0"
                />
              )}
              <p className="text-center mt-2 text-xs font-medium dark:text-light">
                {skill.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
