'use client';
import { useState, useEffect } from 'react';
import { BreifcaseIcon, CalendarIcon, GraduationIcon } from './Icons';
import { getEducation, getExperiences } from '@/sanity/sanity-utils';

import { Experience, Education } from '@/types';

const Qualification = () => {
  const [qualification, setQualification] = useState('Education');
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);

  const getData = async () => {
    const experiences = await getExperiences();
    const education = await getEducation();

    setExperiences(experiences);
    setEducation(education);
  };

  const educationLength = education.length - 1;
  const experinecesLength = experiences.length - 1;

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="about" className="w-full h-screen items-center">
      <section className=" max-w-6xl h-full mt-16 p-6 mx-auto flex flex-col justify-center items-center gap-10">
        <h2 className="flex justify-center ">Qualification</h2>
        <span className="text-sm font-semibold">My Personal Journey</span>
        <div className="flex flex-row gap-24">
          <button
            onClick={() => {
              setQualification('Education');
            }}
            className={`flex gap-1 hover:outline outline-1 rounded-md p-2 ${
              qualification === 'Education' ? 'bg-cyan-100' : ''
            }`}
          >
            <GraduationIcon className={''} width={30} height={30} />
            <div className="text-xl font-semibold">Education</div>
          </button>
          <button
            onClick={() => {
              setQualification('Experience');
            }}
            className={`flex gap-1 hover:outline outline-1 rounded-md p-2 ${
              qualification !== 'Education' ? 'bg-cyan-100' : ''
            }`}
          >
            <BreifcaseIcon className={''} width={30} height={30} />
            <div className="text-xl font-semibold">Experience</div>
          </button>
        </div>
        {/* Content */}
        {qualification === 'Education'
          ? education.map((learned, i) => (
              <div
                key={i}
                className="grid grid-col grid-cols-[1fr_max-content_1fr] gap-6"
              >
                {i % 2 !== 0 && (
                  <>
                    <div></div>
                    <div className="transform translate-y-10">
                      {/* rounder */}
                      <span className="inline-block w-[13px] h-[13px] bg-[#6A7AB5] rounded-full "></span>
                      {/* line */}

                      {i !== educationLength && (
                        <span className="block w-[1px] h-[140%] bg-[#6A7AB5] transform translate-x-1.5 -translate-y-2 md:-translate-y-3"></span>
                      )}
                    </div>
                  </>
                )}
                <div>
                  <h3 className="text-xl text-dark dark:text-light font-medium">
                    {learned.course}
                  </h3>
                  <span className="text-[1rem] text-gray-400 dark:text-light font-medium">
                    {learned.institution}
                  </span>
                  <div className=" flex items-center text-[1rem] text-gray-400 dark:text-light font-medium gap-1">
                    <CalendarIcon
                      className="fill-gray-500 dark:fill-light"
                      width={24}
                      height={24}
                    />
                    <div> {learned.years}</div>
                  </div>
                </div>
                {i % 2 === 0 && (
                  <>
                    <div className="transform translate-y-10">
                      <span className="inline-block w-[13px] h-[13px] bg-[#6A7AB5] rounded-full "></span>

                      {i !== educationLength && (
                        <span className="block w-[1px] h-[140%] bg-[#6A7AB5] transform translate-x-1.5 -translate-y-2 md:-translate-y-3"></span>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))
          : experiences.map((exp, i) => (
              <div
                key={i}
                className="grid grid-col grid-cols-[1fr_max-content_1fr] gap-6"
              >
                {i % 2 !== 0 && (
                  <>
                    <div></div>
                    <div className="transform translate-y-10">
                      <span className="inline-block w-[13px] h-[13px] bg-blue-600 rounded-full "></span>
                      {i !== experinecesLength && (
                        <span className="block w-[1px] h-[140%] bg-blue-600 transform translate-x-1.5 -translate-y-2 md:-translate-y-3"></span>
                      )}
                    </div>
                  </>
                )}
                <div>
                  <h3 className="text-xl text-dark dark:text-light font-medium">
                    {exp.title}
                  </h3>
                  <span className="text-[1rem] text-gray-400 dark:text-light  font-medium">
                    {exp.company}
                  </span>
                  <div className=" flex items-center text-[1rem] text-gray-400 dark:text-light   font-medium gap-1">
                    <CalendarIcon
                      className="fill-gray-500 dark:fill-light"
                      width={24}
                      height={24}
                    />
                    <div>{exp.years}</div>
                  </div>
                </div>
                {i % 2 === 0 && (
                  <>
                    <div className="transform translate-y-10">
                      <span className="inline-block w-[13px] h-[13px] bg-blue-600 rounded-full "></span>
                      {i !== experinecesLength && (
                        <span className="block w-[1px] h-[140%] bg-blue-600 transform translate-x-1.5 -translate-y-2 md:-translate-y-3"></span>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
      </section>
    </div>
  );
};

export default Qualification;
