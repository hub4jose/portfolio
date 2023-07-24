import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getExperiences } from '@/sanity/sanity-utils';
import { Experience, Education } from '@/types';
import { PortableText } from '@portabletext/react';

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [detail, setDetail] = useState(0);
  // const [education, setEducation] = useState<Education[]>([]);

  const getData = async () => {
    const experiences = await getExperiences();
    //const education = await getEducation();

    setExperiences(experiences);
    // setEducation(education);
  };

  // const educationLength = education.length - 1;
  const experinecesLength = experiences.length - 1;

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full lg:h-screen  items-center">
      <section className="mt-20 md:mt-0 max-w-6xl lg:h-full  p-6 mx-auto flex flex-col justify-center items-center gap-10">
        <div className="mt-5 h-[593px]   justify-self-center grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col h-full items-center p-20 justify-start  bg-dark dark:bg-['#222330'] text-light rounded-lg">
            <div className="flex flex-col gap-8">
              <div className="text-light text-4xl font-bold ">
                <p className=" ">Work </p>
                <div className="flex relative z-10">
                  {' '}
                  Experience
                  <span className="highlight w-[120px] border-b-[15px] mt-[24px] ml-[48px]  "></span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl   ">
                  {experiences[detail]?.title}
                </p>
                <div className="text-sm font-[500] leading-6 ">
                  <PortableText value={experiences[detail]?.details} />
                </div>
              </div>
            </div>
          </div>
          <div className="h-full flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <div
                key={exp._id}
                onClick={() => setDetail(i)}
                className={`flex flex-col justify-between ${
                  i === detail ? 'translate-x-5 border border-gray-300 ' : ''
                } hover:translate-x-5 bg-white dark:bg-dark shadow-lg group hover:bg-gray-50 rounded-lg p-6 transition duration-300`}
              >
                <div className="self-start   p-4 rounded-md">
                  <div className="flex flex-row gap-10 w-full">
                    {exp.images && (
                      <Image
                        src={exp?.images[0]?.asset.url}
                        alt={exp?.title}
                        width={60}
                        height={60}
                        className="object-scale-down w-14  rounded-full dark:grayscale"
                      />
                    )}
                    <div className="flex flex-col gap-3 ">
                      <div className="text-3xl font-bold text-dark dark:text-light">
                        {exp.company}
                      </div>
                      <div className="flex gap-4 text-sm text-gray-500 font-semibold">
                        <p>{exp.title}</p>
                        <p>{exp.years}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
