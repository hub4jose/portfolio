import Image from 'next/image';

import { getSkills } from '@/sanity/sanity-utils';

const Skills = async () => {
  const skills = await getSkills();
  return (
    <div id="skills" className="w-full lg:h-screen  items-center">
      <section className="max-w-6xl lg:h-full p-6 mx-auto flex flex-col justify-center items-center gap-10">
        <h2 className="flex justify-center">My Skills</h2>
        <div className="mt-5 justify-self-center grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-4 md:gap-6 items-center">
          {skills.map((skill) => (
            <div
              key={skill._id}
              className=" flex flex-col justify-center  rounded-lg p-2 hover:scale-105 transition"
            >
              {skill.images && (
                <Image
                  src={skill?.images[0]?.asset.url}
                  alt={skill?.title}
                  width={80}
                  height={80}
                  className="object-cover rounded-full grayscale-0 hover:grayscale"
                />
              )}
              <p className="text-center text-xs font-medium dark:text-light">
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
